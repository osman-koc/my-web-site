export type Talk = {
  year: string;
  talks: TalkItem[];
};

export type TalkItem = {
  title: string;
  datetime?: string; // ISO date or friendly string
  location?: string; // venue/location of the talk
  description?: string;
  imageUrl?: string;
  participationLink?: string; // link to register or join (optional)
  otherLinks?: { label: string; url: string }[]; // post-event materials, slides, photos
  planned?: boolean; // indicates if this is a planned/upcoming talk
};
