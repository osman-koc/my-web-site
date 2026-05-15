import { MediumPosts } from '@/components/medium-posts';
import { FeaturedProjects } from '@/components/featured-projects';
import { getBlogPosts } from '@/lib/blog';
import { TalksList } from '@/lib/talks-data';
import { GetMetada } from '@/lib/page-metadata';
import { RecentTalks } from '@/components/recent-talk';

export const metadata = GetMetada('home');

function getLatestTalks(count: number = 1) {
  // Flatten all talks and sort by date (most recent first)
  const allTalks = TalksList.flatMap(year => year.talks.map(talk => ({
    ...talk,
    year: year.year
  }))).sort((a, b) => {
    if (!a.datetime) return 1;
    if (!b.datetime) return -1;
    return new Date(b.datetime).getTime() - new Date(a.datetime).getTime();
  });

  return allTalks.slice(0, count);
}

export default async function Home() {
  const { posts: mediumPosts } = await getBlogPosts(4);
  const latestTalks = getLatestTalks(3);

  return (
    <div className="space-y-16">
      <section className="space-y-4">
        <h1 className="text-2xl font-semibold tracking-tight">
          Hi, I'm Osman 👋
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
        A Software Engineer, M.Sc., based in Türkiye. I specialize in building scalable 
        applications and have a passion for web development, technology, and software engineering 
        practices. I also enjoy sharing insights and knowledge through writing.
        </p>
      </section>



      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-medium tracking-tight">Latest Posts</h2>
          <a href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            View all →
          </a>
        </div>
        {mediumPosts.length > 0 && <MediumPosts posts={mediumPosts} />}
      </section>

      {latestTalks.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-medium tracking-tight">Recent Talk</h2>
            <a href="/talks" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              View all →
            </a>
          </div>
          <RecentTalks talks={latestTalks} />
        </section>
      )}

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-medium tracking-tight">Featured Projects</h2>
          <a href="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            View all →
          </a>
        </div>
        <FeaturedProjects />
      </section>
    </div>
  );
}