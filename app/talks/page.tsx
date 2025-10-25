import { ImageDialog } from '@/components/ui/image-dialog';
import { TalksList } from '@/lib/talks-data';
import { GetMetada } from '@/lib/page-metadata';

export const metadata = GetMetada('talks');

function formatDate(dateString?: string) {
  if (!dateString) return undefined;
  try {
    const d = new Date(dateString);
    if (Number.isNaN(d.getTime())) return dateString;
    return d.toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' });
  } catch (e) {
    return dateString;
  }
}

export default function TalksPage() {
  return (
    <div className="max-w-4xl space-y-12">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Talks & Presentations</h1>
        <p className="text-muted-foreground">
          Past and upcoming talks, presentations, and conference appearances.
        </p>
      </div>

      <div className="space-y-16">
        {TalksList.map((group) => (
          <div key={group.year} className="relative grid grid-cols-[100px_1fr] gap-8">
            <div className="text-xl font-medium sticky top-20">{group.year}</div>

            <div className="space-y-12 relative">
              {group.talks.map((talk, idx) => (
                <div key={`${group.year}-${idx}`} className="relative pl-12">
                  {idx < group.talks.length - 1 && (
                    <div className="absolute left-[11px] top-[28px] h-[calc(100%+20px)] w-[2px] bg-border/30" />
                  )}

                  <div className="absolute left-0 top-1.5">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <span className="text-sm font-medium">•</span>
                    </div>
                  </div>

                  <div className="group flex gap-6">
                    {talk.imageUrl && (
                      <div className="shrink-0">
                        <ImageDialog 
                          imageUrl={talk.imageUrl} 
                          altText={talk.title}
                          className="h-32 w-32"
                        />
                      </div>
                    )}

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-medium group-hover:text-primary transition-colors truncate">
                          {talk.title}
                        </h3>
                        {talk.planned && (
                          <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
                            Planned
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-2">
                        {talk.datetime && (
                          <div className="flex items-center gap-2">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-4 w-4 shrink-0"
                            >
                              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                              <line x1="16" x2="16" y1="2" y2="6" />
                              <line x1="8" x2="8" y1="2" y2="6" />
                              <line x1="3" x2="21" y1="10" y2="10" />
                            </svg>
                            <span>{formatDate(talk.datetime)}</span>
                          </div>
                        )}
                        {talk.location && (
                          <div className="flex items-center gap-2">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-4 w-4 shrink-0"
                            >
                              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                              <circle cx="12" cy="10" r="3" />
                            </svg>
                            <span>{talk.location}</span>
                          </div>
                        )}
                      </div>

                      {talk.description && (
                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-3">
                          {talk.description}
                        </p>
                      )}

                      <div className="flex flex-wrap items-center gap-3">
                        {talk.participationLink && talk.participationLink !== '#' && (
                          <a
                            href={talk.participationLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm font-medium text-primary underline-offset-4 hover:underline"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-4 w-4"
                            >
                              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                              <polyline points="10 17 15 12 10 7" />
                              <line x1="15" x2="3" y1="12" y2="12" />
                            </svg>
                            Join / Register
                          </a>
                        )}

                        {talk.otherLinks?.filter(l => l.url && l.url !== '#').map((l) => (
                          <a
                            key={l.url}
                            href={l.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
                          >
                            {l.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
