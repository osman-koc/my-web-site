import { type Project } from "@/types/project";

const imageFolderPath = '/images/projects';
const githubRepoBaseUrl = 'https://github.com/osman-koc';

export const ProjectList: Project[] = [
  {
    title: "yâdet",
    description: "A mobile-first cemetery care platform that enables remote grave maintenance. Users can publish care requests, while local service providers accept tasks and complete them on-site, making it possible to manage and monitor cemetery services from anywhere.",
    image: `${imageFolderPath}/yadet-app.png`,
    demoUrl: "https://yadet.app",
    storeLinks: [
      {
        type: "appstore",
        url: "https://apps.apple.com/tr/app/yadet-uzaktan-mezar-bak%C4%B1m%C4%B1/id6756832778"
      },
      {
        type: "playstore",
        url: "https://play.google.com/store/apps/details?id=com.osmankoc.yadet"
      }
    ]
  },
  {
    title: "Freedom Complete Builder",
    description: "Custom skateboard complete builder for the freedom.com.tr ikas store. Lets users select all skateboard parts in one screen and place a single order, with assembly handled by the Freedom store.",
    image: `${imageFolderPath}/freedom-complete-builder.png`,
    demoUrl: "https://freedom.com.tr/pages/complete-builder"
  },
  {
    title: "SquarePad for ikas",
    description: "Square product-image generator for ikas stores. Create 1:1 visuals from catalog items, image links, or XML feeds — ready for social and ads.",
    image: `${imageFolderPath}/squarepad-logo.png`,
    demoUrl: "https://squarepad.frdm.tr",
    sourceUrl: `${githubRepoBaseUrl}/squarepad-for-ikas`
  },
  {
    title: "Git Search AI - VSCode Extension",
    description: "AI-powered Git commit history and code search tool for VS Code. Running on your local machine, it helps you find the code you need in seconds.",
    image: "/images/projects/git-search-ai/icon.png",
    demoUrl: "https://marketplace.visualstudio.com/items?itemName=kocdev.git-search-ai"
  },
  {
    title: "Personal Website",
    description: "osmankoc.dev - Built with Next.js, TypeScript, and Tailwind CSS",
    image: "/images/projects/osmankocdev-home.jpg",
    demoUrl: "https://osmankoc.dev",
    sourceUrl: `${githubRepoBaseUrl}//my-web-site`
  },
  {
    title: "En Yakın Hastaneyi Bul - Telegram Bot",
    description: "It is a Telegram bot that transmits the name, address, telephone and map location information of the nearest hospitals around you by location. It works only in Türkiye for the moment.",
    image: `${imageFolderPath}/en-yakin-hastaneyi-bul-bot.jpg`,
    demoUrl: "https://t.me/EnYakinHastaneBot",
    sourceUrl: `${githubRepoBaseUrl}/en-yakin-hastane-telegram-botu`
  },
  {
    title: "En Yakın Eczaneyi Bul - Telegram Bot",
    description: "It is a Telegram bot that transmits the name, address, telephone and map location information of the pharmacies that are closest or on duty around you by location. It works only in Türkiye for the moment.",
    image: `${imageFolderPath}/en-yakin-eczaneyi-bul-bot.jpg`,
    demoUrl: "https://t.me/EnYakinEczaneBot",
    sourceUrl: `${githubRepoBaseUrl}/en-yakin-eczane-telegram-botu`
  },
  {
    title: "GuidGenerator - VSCode Extension",
    description: "Generate and insert GUIDs (uuid) effortlessly into your code using a simple shortcut.",
    image: "https://kocdev.gallerycdn.vsassets.io/extensions/kocdev/guidgenerator/0.0.6/1691729877308/Microsoft.VisualStudio.Services.Icons.Default",
    demoUrl: "https://marketplace.visualstudio.com/items?itemName=kocdev.guidgenerator",
    sourceUrl: `${githubRepoBaseUrl}/vscode-guid-generator`
  },
  {
    title: "GuidGenerator - Visual Studio Extension",
    description: "Generate and insert GUIDs effortlessly into your code using a simple shortcut.",
    image: "https://kocdev.gallerycdn.vsassets.io/extensions/kocdev/vsguidgenerate/0.0.3/1691761600857/Microsoft.VisualStudio.Services.Icons.Default",
    demoUrl: "https://marketplace.visualstudio.com/items?itemName=kocdev.vsguidgenerate",
    sourceUrl: `${githubRepoBaseUrl}/vs-guid-generator`
  },
  {
    title: "Whistle SOS (Deprem Düdüğü)",
    description: "Emergency whistle app for earthquake situations.  Developed with Flutter.",
    image: "https://play-lh.googleusercontent.com/RA5xl79ALrLWIL8SptFCc6UQIN-iVdf-Y5d0KsNsUI0H3Yn4MwOHf6WgB4K7n6mAGMA=w240-h480-rw",
    sourceUrl: `${githubRepoBaseUrl}/deprem-dudugu`,
    storeLinks: [
      {
        type: "playstore",
        url: "https://play.google.com/store/apps/details?id=com.osmankoc.DepremDudugu"
      },
      {
        type: "appstore",
        url: "https://apps.apple.com/app/id6477729209"
      }
    ]
  },
  {
    title: "Random Quotes",
    description: "Daily inspirational quotes app.  Developed with Flutter.",
    image: "https://play-lh.googleusercontent.com/ecgtkF_JnTvt_9Haz1X878rvkUu0AXeCCISm156LQZQo52JTpv5_bml3Yq1WW7vDHoQ=w240-h480-rw",
    sourceUrl: `${githubRepoBaseUrl}/random-quotes-app`,
    storeLinks: [
      {
        type: "playstore",
        url: "https://play.google.com/store/apps/details?id=com.osmankoc.randomquotes"
      },
      {
        type: "appstore",
        url: "https://apps.apple.com/app/id6477748373"
      }
    ]
  },
  {
    title: "ZooWord - Word guessing game",
    description: "Find the common word that the words displayed on the screen suggest or are related to.",
    image: "https://github.com/osman-koc/zoo-word-game/raw/master/img/lightmode_screen.jpg",
    demoUrl: "https://osman-koc.github.io/zoo-word-game/",
    sourceUrl: `${githubRepoBaseUrl}/zoo-word-game`,
  },
  {
    title: "Simple ToDo",
    description: "Minimalist todo list app for daily tasks. Developed with Flutter.",
    image: "https://play-lh.googleusercontent.com/Sfkbt3l8SdK1WWJ637Gi0d4WskqF3SPn32uo3V7_CpjZQnMXZr56Au0Mo2bMuM8srA=w240-h480-rw",
    sourceUrl: `${githubRepoBaseUrl}/simple-todo-app`,
    storeLinks: [
      {
        type: "playstore",
        url: "https://play.google.com/store/apps/details?id=com.osmkoc.simpletodo"
      }
    ]
  },
  {
    title: "Baby Sleeper",
    description: "Soothing sounds and lullabies for babies.  Developed with Flutter.",
    image: "https://play-lh.googleusercontent.com/lUVE3_TOvgVdRentWDpLwDj-qq5j2N4ciZvehsfrWBL-VuHNSesqOauqSvL4kaGjZDI=w240-h480-rw",
    sourceUrl: `${githubRepoBaseUrl}/baby-sleeper-app`,
    storeLinks: [
      {
        type: "playstore",
        url: "https://play.google.com/store/apps/details?id=com.osmankoc.babysleeper"
      }
    ]
  },
];