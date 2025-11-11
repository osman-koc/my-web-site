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
        title: 'How We Use AI in Enterprise Software Development',
        datetime: '2025-11-17',
        location: 'Hezarfen Campus, Istanbul Ticaret University, Istanbul',
        description: 'A short talk sharing real-world insights on how we integrate AI into software development at the enterprise level — from practical tools to in-house solutions developed at Turkcell.',
        imageUrl: `${imageFolderPath}/2025_istanbul_ticaret_university.jpeg`,
        imageUrlDark: `${imageFolderPath}/2025_istanbul_ticaret_university.jpeg`,
        participationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdJJvG_PPtuFUkOSK8hfh5LsLt2mBtTwH5SJ0cCh16w9QXvuw/viewform',
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
