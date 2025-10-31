import { type Talk } from '@/types/talk';

const imageFolderPath = '/images/talks';
const imageFolderPathHighlights = '/images/highlights';
const defaultImage = '/images/talks/no-image.png';
const defaultImageDark = '/images/talks/no-image-dark.png';

export const TalksList: Talk[] = [
  {
    year: '2025',
    talks: [
       {
        title: 'AI-Assisted Developer Tools Workshop',
        datetime: '2025-12-16',
        location: 'Uludag University, Bursa',
          description:
            'Hands-on workshop exploring the latest AI-powered tools for developers, including practical demonstrations and workflow optimization strategies.',
        imageUrl: defaultImage,
        imageUrlDark: defaultImageDark,
        participationLink: '#',
        planned: true
      }, 
      {
        title: 'Future of Development with AI',
        datetime: '2025-11-17',
        location: 'Istanbul Ticaret University, Istanbul',
          description:
            'Keynote on the evolving role of AI in software development, future trends, and how AI is shaping the next generation of developer experiences.',
        imageUrl: defaultImage, //`${imageFolderPath}/2025_istanbul_ticaret_university.jpeg`,
        imageUrlDark: defaultImageDark, //`${imageFolderPath}/2025_istanbul_ticaret_university.png`,
        participationLink: '#',
        planned: true
      },
      {
        title: "Master's Thesis Defense",
        datetime: '2025-07-01',
        location: 'Düzce University, Düzce',
        description:
          "Presentation of my master's thesis about no-code platforms and LLM-assisted development.",
        imageUrl: `${imageFolderPathHighlights}/2025_master_degree.jpg`,
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
        imageUrl: `${imageFolderPathHighlights}/2024_presentation_medipol.jpg`,
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
        imageUrl: `${imageFolderPathHighlights}/2018_efis_presentation.jpg`,
        otherLinks: [
          { label: 'Event Page', url: '#' },
        ],
      },
    ],
  },
];

export default TalksList;
