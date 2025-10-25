"use client";

import { useState } from 'react';
import type { Talk, TalkWithYear } from '@/types/talk';
import { TalkDetailsDialog } from '@/components/talk-details-dialog';
import { TalkCard } from '@/components/talk-card';

interface TalksListProps {
  talks: Talk[];
}

function getAllTalks(talks: Talk[]): TalkWithYear[] {
  return talks.flatMap((yearGroup) =>
    yearGroup.talks.map((talk) => ({
      ...talk,
      year: yearGroup.year,
    }))
  ).sort((a, b) => {
    if (!a.datetime) return 1;
    if (!b.datetime) return -1;
    return new Date(b.datetime).getTime() - new Date(a.datetime).getTime();
  });
}

export function TalksList({ talks }: TalksListProps) {
  const allTalks = getAllTalks(talks);
  const [selectedTalk, setSelectedTalk] = useState<TalkWithYear | null>(null);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {allTalks.map((talk, idx) => (
          <TalkCard key={`talk-${idx}`} talk={talk} onViewDetails={(t) => setSelectedTalk(t)} />
        ))}
      </div>

      {selectedTalk && (
        <TalkDetailsDialog talk={selectedTalk} isOpen={!!selectedTalk} onClose={() => setSelectedTalk(null)} />
      )}
    </div>
  );
}