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

const falloutChildren = [
  {
    name: 'O grze',
    url: '/about'
  },
  {
    name: 'Solucja',
    url: '/walkthrough'
  },
  {
    name: 'Ciekawe Questy',
    url: '/easter-eggs'
  },
  {
    name: 'Porady',
    url: '/tips'
  },
  {
    name: 'Bohater',
    url: '/character'
  },
  {
    name: 'Ekwipunek',
    url: '/equipment'
  },
  {
    name: 'Npc',
    url: '/npc'
  }
]
const falloutSecondaryLinks = [
  {
    name: 'Fallout',
    url: '/fallout',
    children: falloutChildren
  },
  {
    name: 'Fallout 2',
    url: '/fallout2',
    children: falloutChildren
  },
  {
    name: 'Fallout 3',
    url: '/fallout3',
    children: [...falloutChildren, {
      name: 'Van Buren',
      url: '/van-buren'
    }]
  },
  {
    name: 'Fallout Tactics',
    url: '/fallout-tactics',
    children: falloutChildren
  }
]

const postSecondaryLinks = [
  {
    name: 'Postkultura',
    url: '/post',
    children: [
      {
        name: 'Filmy i seriale',
        url: '/movies'
      },
      {
        name: 'Powieści i Opowiadania',
        url: '/stories'
      },
      {
        name: 'Komiksy',
        url: '/comics'
      },
      {
        name: 'Muzyka',
        url: '/music'
      },
      {
        name: 'Muzyka z Fallout',
        url: '/fallout-music'
      },
      {
        name: 'Teledyski 13 Schronu',
        url: '/videos'
      }
    ]
  },
  {
    name: 'Gry',
    url: '/games',
    children: [
      {
        name: 'Gry PC',
        url: '/games-pc'
      },
      {
        name: 'Gry planszowe',
        url: '/games-board'
      },
      {
        name: 'Gry fabularne',
        url: '/games-fiction'
      },
      {
        name: 'Gry karciane',
        url: '/games-cards'
      },
      {
        name: 'Gry paragrafowe',
        url: '/games-capitulation'
      }
    ]
  },
  {
    name: 'Rozrywka',
    url: '/entertainment',
    children: [
      {
        name: 'Fallout Quiz',
        url: '/fallout-quiz'
      },
      {
        name: 'Easter Eggs',
        url: '/easter-eggs'
      },
      {
        name: 'Humor',
        url: '/humour'
      },
      {
        name: 'Humor pisany',
        url: '/humour-written'
      },
      {
        name: 'Criticals',
        url: '/criticals'
      },
      {
        name: 'Other',
        url: '/other'
      }
    ]
  }
]
export const NAV_LINKS = [
  {
    name: 'Newsy',
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
    icon: faCircle,
    children: falloutSecondaryLinks,
    defaultChildren: falloutSecondaryLinks[0]
  },
  {
    name: 'Postkultura',
    url: URLS.POST_CULTURE,
    icon: faCodeBranch,
    children: postSecondaryLinks,
    defaultChildren: postSecondaryLinks[0]
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
