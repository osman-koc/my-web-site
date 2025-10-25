import { type Talk } from '@/types/talk';

const imageFolderPath = '/images/highlights';
const defaultImage = '/images/talks/no-image.png';

export const TalksList: Talk[] = [
  {
    year: '2025',
    talks: [
       {
        title: 'AI-Assisted Developer Tools Workshop',
        datetime: '2025-12-16',
        location: 'Bursa Uludag University',
          description:
            'Hands-on workshop exploring the latest AI-powered tools for developers, including practical demonstrations and workflow optimization strategies.',
        imageUrl: defaultImage,
        participationLink: '#',
        planned: true
      }, 
      {
        title: 'Future of Development with AI',
        datetime: '2025-11-17',
        location: 'Istanbul Ticaret University',
          description:
            'Keynote on the evolving role of AI in software development, future trends, and how AI is shaping the next generation of developer experiences.',
        imageUrl: defaultImage,
        participationLink: '#',
        planned: true
      },
      {
        title: "Master's Thesis Defense",
        datetime: '2025-07-01',
        location: 'Istanbul Technical University',
        description:
          "Presentation of my master's thesis about no-code platforms and LLM-assisted development.",
        imageUrl: `${imageFolderPath}/2025_master_degree.jpg`,
        otherLinks: [
          { label: 'Thesis (PDF)', url: '#' },
          { label: 'Slides', url: '#' },
        ],
      },
    ],
  },
  {
    year: '2024',
    talks: [
      {
        title: 'No-Code Development with Turkcell LCAP',
        datetime: '2024-05-15',
        location: 'Medipol University, Istanbul',
        description:
          'Talk on no-code software development and Turkcell LCAP platform. Discussion with students about low-code and no-code platforms and real-world use cases.',
        imageUrl: `${imageFolderPath}/2024_presentation_medipol.jpg`,
        otherLinks: [
          { label: 'University Announcement', url: '#' },
        ],
      },
    ],
  },
  {
    year: '2018',
    talks: [
      {
        title: "Driver Sleep Alert System at EFIS",
        datetime: '2018-11-10',
        location: 'Bülent Ecevit University, Zonguldak',
        description:
          "Shared work on the Driver Sleep Alert System at the Future Engineers International Student Symposium (EFIS).",
        imageUrl: `${imageFolderPath}/2018_efis_presentation.jpg`,
        otherLinks: [
          { label: 'Event Page', url: '#' },
        ],
      },
    ],
  },
];

export default TalksList;
