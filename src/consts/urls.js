import faComments from '@fortawesome/fontawesome-free-solid/faComments'
import faUserShield from '@fortawesome/fontawesome-free-solid/faShieldAlt'
import faCircle from '@fortawesome/fontawesome-free-solid/faCircle'
import faMicrochip from '@fortawesome/fontawesome-free-solid/faMicrochip'
import faCodeBranch from '@fortawesome/fontawesome-free-solid/faCodeBranch'
import faEdit from '@fortawesome/fontawesome-free-solid/faEdit'

export const URLS = {
  HOME: '/',
  NEWS: '/news',
  NEWS_SINGLE: '/news/:id',
  COLLECTIVE: '/collective',
  FALLOUT: '/fallout',
  POST_CULTURE: '/post-culture',
  TECH_SCIENCE: '/tech-science',
  CREATION: '/creation',
  SEARCH: '/search/:query',
  EDIT: '/edit'
}
export const NAV_LINKS = [
  {
    name: 'Nowiny',
    url: URLS.NEWS,
    icon: faComments
  },
  {
    name: 'Kolektyw',
    url: URLS.COLLECTIVE,
    icon: faUserShield
  },
  {
    name: 'Fallout',
    url: URLS.FALLOUT,
    icon: faCircle
  },
  {
    name: 'Postkultura',
    url: URLS.POST_CULTURE,
    icon: faCodeBranch
  },
  {
    name: 'Nauka I Technika',
    url: URLS.TECH_SCIENCE,
    icon: faMicrochip
  },
  {
    name: 'Twórczość',
    url: URLS.CREATION,
    icon: faEdit
  }
]
