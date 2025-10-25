"use client";

import { ImageDialog } from '@/components/ui/image-dialog';
import type { TalkWithYear } from '@/types/talk';

interface TalkCardProps {
  talk: TalkWithYear;
  onViewDetails: (t: TalkWithYear) => void;
}

export function TalkCard({ talk, onViewDetails }: TalkCardProps) {
  const lightImage = talk.imageUrl ?? talk.imageUrlDark;
  const darkImage = talk.imageUrlDark ?? talk.imageUrl;
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

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border bg-card transition-colors hover:bg-accent">
      {/* Upcoming badge (more prominent) */}
      {talk.planned && (
        <span className="absolute top-3 right-3 z-10 inline-flex items-center rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow">Upcoming</span>
      )}

      {(lightImage || darkImage) && (
        <div className="aspect-[16/9] overflow-hidden">
          {/* Light-mode: prefer `imageUrl`, fall back to `imageUrlDark` */}
          <div className="h-full w-full block dark:hidden">
            {lightImage && (
              <ImageDialog imageUrl={lightImage} altText={talk.title} className="h-full w-full object-cover" />
            )}
          </div>

          {/* Dark-mode: prefer `imageUrlDark`, fall back to `imageUrl` */}
          <div className="h-full w-full hidden dark:block">
            {darkImage && (
              <ImageDialog imageUrl={darkImage} altText={talk.title} className="h-full w-full object-cover" />
            )}
          </div>
        </div>
      )}

      <div className="flex-1 p-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-4">
            <h3 className="font-medium leading-none">{talk.title}</h3>
            {/* year shown subtly if present */}
            {talk.year && <span className="text-sm text-muted-foreground">{talk.year}</span>}
          </div>

          <div className="space-y-2 text-sm text-muted-foreground">
            {talk.datetime && (
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0">
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
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{talk.location}</span>
              </div>
            )}
          </div>

          {talk.description && <p className="text-sm text-muted-foreground line-clamp-2">{talk.description}</p>}
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t">
          {talk.participationLink && talk.participationLink !== '#' && (
            <div className="flex flex-wrap items-center gap-3">
              <a href={talk.participationLink} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary">{talk.planned ? 'Register' : 'Details'}</a>
            </div>
          )}

          <button onClick={() => onViewDetails(talk)} className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary ml-auto">
            View Details
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 ml-1">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
