import Parser from 'rss-parser';
import { MediumFeed } from '@/types/medium-feed';
import sanitizeHtml from 'sanitize-html';
import he from 'he';

type MediumRssItem = {
  title: string;
  link: string;
  pubDate?: string;
  isoDate?: string;
  content?: string;
  contentSnippet?: string;
  'content:encoded'?: string;
  enclosure?: {
    url?: string;
  };
};

type MediumRss = {
  items: MediumRssItem[];
};

const parser = new Parser<MediumRss>({
  customFields: {
    item: ['content:encoded'],
  },
});

const FEED_URL = 'https://medium.com/feed/@osman-koc';
const SNIPPET_LENGTH = 160;

export async function getMediumPosts(limit = 10, page = 1): Promise<MediumFeed> {
  try {
    const response = await fetch(FEED_URL, {
      headers: {
        Accept: 'application/rss+xml, application/xml',
      },
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Medium feed: ${response.status}`);
    }

    const xml = await response.text();
    const { items } = await parser.parseString(xml);

    if (!items?.length) {
      return { posts: [], total: 0 };
    }

    const allPosts = items.map((item) => {
      const decodedTitle = he.decode(item.title);
      const content = item['content:encoded'] ?? item.content ?? '';
      const plainText = sanitizeHtml(content, { allowedAttributes: {}, allowedTags: [] })
        .replace(/\s+/g, ' ')
        .trim();
      const snippet = plainText.length > SNIPPET_LENGTH
        ? `${plainText.slice(0, SNIPPET_LENGTH - 3).trimEnd()}...`
        : plainText;

      return {
        title: decodedTitle,
        link: item.link,
        pubDate: item.isoDate ?? item.pubDate ?? '',
        contentSnippet: snippet,
        thumbnail: item.enclosure?.url || extractImageFromContent(content),
      };
    });

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    return {
      posts: allPosts.slice(startIndex, endIndex),
      total: allPosts.length,
    };
  } catch (error) {
    console.error('Error fetching Medium posts:', error);
    return {
      posts: [],
      total: 0,
    };
  }
}

function extractImageFromContent(content: string): string {
  const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
  return imgMatch ? imgMatch[1] : '/images/no-image.jpg';
}
