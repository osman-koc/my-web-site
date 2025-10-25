import { TalksList as TalksData } from '@/lib/talks-data';
import { GetMetada } from '@/lib/page-metadata';
import { TalksList } from '@/components/talks-list';

export const metadata = GetMetada('talks');

export default function TalksPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Talks & Events</h1>
        <p className="text-muted-foreground">
          Discover my talks and events, both past and upcoming.
        </p>
      </div>

      <TalksList talks={TalksData} />
    </div>
  );
}
