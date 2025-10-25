import type { TalkWithYear } from '@/types/talk';

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

export function RecentTalks({ talks }: { talks: TalkWithYear[] }) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4">
        {talks.map((talk, idx) => (
          <article key={idx} className="group rounded-lg border bg-card px-4 py-3">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-medium group-hover:text-primary transition-colors">{talk.title}</h3>
                  {talk.datetime && (
                    <time className="text-sm text-muted-foreground whitespace-nowrap">{formatDate(talk.datetime)}</time>
                  )}
                </div>

                {talk.planned && (
                  <div className="mt-2">
                    <span className="inline-flex items-center rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow">Upcoming</span>
                  </div>
                )}

                {talk.description && (
                  <p className="text-sm text-muted-foreground line-clamp-2 mt-2">{talk.description}</p>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
