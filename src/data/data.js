const navCategories = [
  {
    name: "Accueil",
    link: "/"
  },
  {
    name: "Présentation",
    link: "/presentation"
  },
  {
    name: "Compétences",
    link: "/competences"
  },
  {
    name: "Projets",
    link: "/projets"
  },
  {
    name: "Contact",
    link: "/contact"
  },
  {
    name: "Mon CV",
    link: "/mon-cv"
  }
];

export default navCategories

import darkCode from './../assets/dark/code-solid.svg'
import lightCode from './../assets/light/code-solid.svg'
import darkResponsive from './../assets/dark/mobile-screen-button-solid.svg'
import lightResponsive from './../assets/light/mobile-screen-button-solid.svg'
import darkRef from './../assets/dark/bolt-solid.svg'
import lightRef from './../assets/light/bolt-solid.svg'
import darkAccess from './../assets/dark/universal-access-solid.svg'
import lightAccess from './../assets/light/universal-access-solid.svg'
import darkMaintenance from './../assets/dark/screwdriver-wrench-solid.svg'
import lightMaintenance from './../assets/light/screwdriver-wrench-solid.svg'


export const activitiesSlider = [
  {
    name: 'Développement web',
    darkImg: darkCode,
    lightImg: lightCode
  },
  {
    name: 'Responsive',
    darkImg: darkResponsive,
    lightImg: lightResponsive
  },
  {
    name: 'Référencement',
    darkImg: darkRef,
    lightImg: lightRef
  },
  {
    name: 'Accessibilité',
    darkImg: darkAccess,
    lightImg: lightAccess
  },
  {
    name: 'Maintenance',
    darkImg: darkMaintenance,
    lightImg: lightMaintenance
  }
];

import darkHtml from './../assets/dark/html.svg'
import lightHtml from './../assets/light/html.svg'
import darkCss from './../assets/dark/css.svg'
import lightCss from './../assets/light/css.svg'
import darkSass from './../assets/dark/sass.svg'
import lightSass from './../assets/light/sass.svg'
import darkTailwind from './../assets/dark/tailwind.svg'
import lightTailwind from './../assets/light/tailwind.svg'
import darkJavascript from './../assets/dark/js.svg'
import lightJavascript from './../assets/light/js.svg'
import darkReact from './../assets/dark/react.svg'
import lightReact from './../assets/light/react.svg'
import darkNode from './../assets/dark/node.svg'
import lightNode from './../assets/light/node.svg'
import darkMongo from './../assets/dark/mongodb.svg'
import lightMongo from './../assets/light/mongodb.svg'

export const allSkills = [
  {
    name: 'HTML 5',
    darkSkill: darkHtml,
    lightSkill: lightHtml,
    rate: 9
  },
  {
    name: 'CSS 3',
    darkSkill: darkCss,
    lightSkill: lightCss,
    rate: 7
  },
  {
    name: 'SASS',
    darkSkill: darkSass,
    lightSkill: lightSass,
    rate: 7
  },
  {
    name: 'Tailwind',
    darkSkill: darkTailwind,
    lightSkill: lightTailwind,
    rate: 7
  },
  {
    name: 'Javascript',
    darkSkill: darkJavascript,
    lightSkill: lightJavascript,
    rate: 7
  },
  {
    name: 'React',
    darkSkill: darkReact,
    lightSkill: lightReact,
    rate: 8
  },
  {
    name: 'Node.js',
    darkSkill: darkNode,
    lightSkill: lightNode,
    rate: 3
  },
  {
    name: 'MongoDB',
    darkSkill: darkMongo,
    lightSkill: lightMongo,
    rate: 3
  }
];

export const portfolioProjects = [
  {
    name: 'Booki',
    technologies: ['HTML', 'CSS'],
    image: '',
    liveUrl: '',
    description: '',
    category: 'Front-end',
    repo: '',
    skill: ''
  },
  {
    name: '',
    technologies: ['', ''],
    image: '',
    liveUrl: '',
    description: '',
    category: '',
    repo: '',
    skill: ''
  },
]