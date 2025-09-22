import { Project } from "../types/project"

export const projectsApps: Project[] = [
  {
    title: 'GG Arcade',
    technologies: 'React Native, Azure Playfab',
    date: '2020',
    imgSrcs: ['/work/images/apps/gg-arcade.jpg', '/work/images/apps/gg-arcade2.jpg', '/work/images/apps/gg-arcade3.jpg'],
    description: [
      "<strong>GG Arcade</strong> was a free to play social casino Android app with over 10k active users. Users could win tokens and exchange them for prizes which included game skins and gift vouchers for online stores like Amazon. I was responsible for the design along with the front end implementation."
    ]
  },
  {
    title: 'PocketPredictor',
    technologies: 'React Native',
    date: '2019 - 2020',
    imgSrcs: ['/work/images/apps/pp.jpg', '/work/images/apps/pp2.jpg'],
    description: [
      "<strong>PocketPredictor</strong> was a free to play prediction Android app. Users could win tokens by correctly answering questions about future esports matches and exchange them for game skins. I was responsible for the initial prototype, design and the front end implementation."
    ]
  }
];