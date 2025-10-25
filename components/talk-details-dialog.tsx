"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ImageDialog } from '@/components/ui/image-dialog';

interface TalkDetailsProps {
  talk: {
    title: string;
    datetime?: string;
    location?: string;
    description?: string;
    imageUrl?: string;
    participationLink?: string;
    otherLinks?: { label: string; url: string }[];
    planned?: boolean;
  };
  isOpen: boolean;
  onClose: () => void;
}

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

export function TalkDetailsDialog({ talk, isOpen, onClose }: TalkDetailsProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">{talk.title}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {talk.imageUrl && (
            <div className="aspect-video overflow-hidden rounded-lg">
              <ImageDialog
                imageUrl={talk.imageUrl}
                altText={talk.title}
                className="h-full w-full object-cover"
              />
            </div>
          )}

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
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
            <div className="prose prose-sm dark:prose-invert max-w-none">
              <p className="whitespace-pre-wrap">{talk.description}</p>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-4">
            {talk.participationLink && talk.participationLink !== '#' && (
              <a
                href={talk.participationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                {talk.planned ? 'Join / Register' : 'View Details'}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 ml-1"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </a>
            )}

            {talk.otherLinks && talk.otherLinks.length > 0 && (
              talk.otherLinks.filter(l => l.url && l.url !== '#').map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary underline"
                >
                  {link.label}
                </a>
              ))
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}