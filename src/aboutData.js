import { 
  IoLogoHtml5, 
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoNpm,
} from 'react-icons/io';
import {
  SiStyledComponents,
  SiReact,
  SiFirebase
} from 'react-icons/si'
import {ImGit} from 'react-icons/im'


export const aboutData = [
  { 
    id: 1,
    title: 'HTML',
    icon: <IoLogoHtml5/>,
    color: '#f16529',
    image: false
  },
  { 
    id: 2,
    title: 'CSS',
    icon: <IoLogoCss3 />,
    color: '#2965f1',
    image: false
  },
  { 
    id: 3,
    title: 'JavaScript',
    icon: <IoLogoJavascript/>,
    color: '#f0db4f',
    image: false
  },
  { 
    id: 4,
    title: 'NPM',
    icon: <IoLogoNpm/>,
    color: '#cc3534',
    image: false
  },
  { 
    id: 5,
    title: 'React',
    icon: <SiReact/>,
    color: '#61dbfb',
    image: false
  },
  { 
    id: 6,
    title: 'Git',
    icon: <ImGit/>,
    color: '#f1502f',
    image: false
  },
  { 
    id: 7,
    title: 'Styled-Components',
    icon: '/imgs/styled-components-icon.png',
    color: 'yellow',
    image: true
  },
  { 
    id: 8,
    title: 'Firebase',
    icon: '/imgs/firebase-icon.png',
    color: 'yellow',
    image: true
  }
]
// { 
//   id: 9,
//   title: 'Node.js',
//   icon: <IoLogoNodejs/>,
//   color: 'yellow'
// },