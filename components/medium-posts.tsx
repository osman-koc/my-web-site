import { formatDistance } from "date-fns";
import { type Post } from "@/types/post";

export function MediumPosts({
  posts,
  showViewAll = false
}: {
  posts: Post[];
  showViewAll?: boolean;
}) {
  if (!posts.length) return null;

  return (
    <div className="space-y-6">
      <div className="space-y-6">
        {posts.map((post) => (
          <article key={post.link} className="group space-y-2">
            <a 
              href={post.link}
              target="_blank"
              rel="noopener noreferrer" 
              className="block"
            >
              <h3 className="text-lg font-medium group-hover:text-primary transition-colors">
                {post.title}
              </h3>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {post.contentSnippet}
            </p>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <time>
                {formatDistance(new Date(post.pubDate), new Date(), { addSuffix: true })}
              </time>
              {post.sourceUrl && (
                <>
                  <span className="text-muted-foreground/40">·</span>
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${new URL(post.sourceUrl).hostname}&sz=14`}
                    alt={post.sourceName ?? ''}
                    width={14}
                    height={14}
                    className="rounded-sm"
                  />
                  <span>{post.sourceName}</span>
                </>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}