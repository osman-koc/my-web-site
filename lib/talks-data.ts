import { type Talk } from '@/types/talk';

const imageFolderPath = '/images/talks';
const imageFolderPathHighlights = '/images/highlights';
const defaultImage = '/images/talks/no-image.png';
const defaultImageDark = '/images/talks/no-image-dark.png';

export const TalksList: Talk[] = [
  {
  year: '2026',
  talks: [
    {
      title: 'Natural Language Querying on Large-Scale Data Platforms',
      datetime: '2026-05-14',
      location: 'Muğla Sıtkı Koçman University, Muğla',
      description:
        'This paper presentation will be delivered at the 17th National Software Engineering Symposium (UYMS 2026), organized in collaboration with Muğla Sıtkı Koçman University and held as an in-person event between 14–16 May 2026. Presented on behalf of Turkcell, the talk focuses on enabling natural language querying over large-scale data platforms and discusses key engineering and architectural considerations. The presentation also includes the patented Text to Report project, demonstrating how natural language interfaces can be used to generate structured analytical reports from complex enterprise data sources.',
      imageUrl: "https://uyms26.mu.edu.tr/assets/banner-HjGUIG6r.png",
      imageUrlDark: "https://uyms26.mu.edu.tr/assets/banner-HjGUIG6r.png",
      participationLink: 'https://uyms26.mu.edu.tr/',
      planned: true
    },
    {
        title: 'Engineering in the Age of Artificial Intelligence',
        datetime: '2026-01-08',
        location: 'Uludag University, Bursa',
        description: 'This conference presentation was delivered as part of the Open Talks: #Turkcell event series. It focuses on engineering in the age of artificial intelligence, exploring common concerns among university students such as whether AI will replace software engineers. The talk discusses how engineers and engineering candidates can position themselves in an AI-driven world, what kind of professional landscape they are likely to encounter, and how artificial intelligence can be approached as an enabling technology rather than a threat.',
        imageUrl: `${imageFolderPath}/2026_uludag_opentalks_turkcell.jpeg`,
        imageUrlDark: `${imageFolderPath}/2026_uludag_opentalks_turkcell.jpeg`,
        participationLink: '#',
        planned: false,
      }
    ]
  },
  {
    year: '2025',
    talks: [
      {
        title: 'How We Use AI in Enterprise Software Development',
        datetime: '2025-11-17',
        location: 'Hezarfen Campus, Istanbul Ticaret University, Istanbul',
        description: 'A short talk sharing real-world insights on how we integrate AI into software development at the enterprise level — from practical tools to in-house solutions developed at Turkcell.',
        imageUrl: `${imageFolderPath}/2025_ticaretedutr_turkcellitsolutionsday.jpeg`,
        imageUrlDark: `${imageFolderPath}/2025_ticaretedutr_turkcellitsolutionsday.jpeg`,
        participationLink: '#',
        planned: false
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
