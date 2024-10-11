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