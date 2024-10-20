const navCategories = [
  {
    name: "Accueil",
    link: ""
  },
  {
    name: "Présentation",
    link: "presentation"
  },
  {
    name: "Compétences",
    link: "competences"
  },
  {
    name: "Projets",
    link: "projets"
  },
  {
    name: "Contact",
    link: "contact"
  },
  {
    name: "CV",
    link: "mon-cv"
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
    liveUrl: 'https://esther57-web.github.io/projet2OC/',
    description: `Dans ce projet, j'ai été chargé de créer la page d'accueil d'une agence de voyage en utilisant HTML et CSS. Ma mission principale était d'intégrer l'interface responsive de leur site.`,
    category: 'Front-end',
    repo: 'https://github.com/esther57-web/projet2OC.git',
    skill: [
      'Intégration de maquette',
      'Responsive'
    ]
  },
  {
    name: 'Sophie Bluel',
    technologies: ['Javascript'],
    image: '',
    liveUrl: 'https://esther57-web.github.io/projet3OC/',
    description: `Dans ce projet, j'ai été engagé à créer une page web dynamique pour le site internet d'une architecte d'intérieur en utilisant JavaScript et en communiquant avec une API.`,
    category: 'Front-end',
    repo: 'https://github.com/esther57-web/projet3OC.git',
    skill: [
      'Gérer les événements utilisateurs avec JavaScript',
      'Manipuler les éléments du DOM avec JavaScript',
      'Récupérer les données utilisateurs dans le JavaScript via des formulaires',
      'Communiquer via une API'
    ]
  },
  {
    name: 'Kasa',
    technologies: ['React', 'Sass'],
    image: '',
    liveUrl: 'https://projet5-oc.vercel.app/',
    description: `Dans ce projet, j'ai implémenté le front-end d’une application en utilisant React et React Router pour créer une expérience utilisateur moderne et réactive.`,
    category: 'Front-end',
    repo: 'https://github.com/esther57-web/projet5OC.git',
    skill: [
      'Développer une interface web avec Sass',
      `Configurer la navigation entre les pages de l'application avec React Router`,
      `Développer des éléments de l'interface d'un site web grâce à des composants React`,
      'Mettre en œuvre des animations CSS',
      'Initialiser une application avec Vite'
    ]
  },
  {
    name: 'Mon Vieux Grimoire',
    technologies: ['Node.js', 'Express', 'MongoDB'],
    image: '',
    liveUrl: '',
    description: `Ce projet m'a amené à développer le back-end d'un site de notation de livres.`,
    category: 'Back-end',
    repo: 'https://github.com/esther57-web/projet6OC.git',
    skill: [
      `Création d'un serveur Express`,
      `Connexion à une base de données MongoDB`,
      'Utilisation du modèle CRUD',
      `Système d'authentification sécurisée`,
      `Utilisation de Mongoose et du modèle MVC`
    ]
  }
]