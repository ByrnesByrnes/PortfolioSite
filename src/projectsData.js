export const projects = [
  {
    id: 1,
    title: 'S and R Assisted Living Facility',
    technologies: ['ReactJS', 'SCSS', 'React-hooks', 'React Router'],
    description: 'Built for a client who needed a custom static site. Using netlify CMS for submitting forms through netlify API.',
    imgs: [
      {
        id: 1,
        img: 'imgs/projects/sandr/SandRassistedLiving.jpg'
      },
      {
        id: 2,
        img: 'imgs/projects/sandr/sandr-contact.jpg'},
      {
        id: 3,
        img: 'imgs/projects/sandr/sandr-difference.jpg'},
      {
        id: 4,
        img: 'imgs/projects/sandr/sandr-services.jpg'},
    ],
    site: 'https://www.sandrassistedliving.com/',
    source: 'https://github.com/ByrnesByrnes/SandRAssistedLiving',
    client: true,
  },
  {
    id: 2,
    title: 'Room (E-commerce)',
    technologies: ['ReactJS', 'SCSS','Netlify', 'EasyShip API', 'React Router'],
    description: 'Ecommerce site connecting to a product API and easyShip API for shipping rates. Storing State in React Context API in conjunction with useReducer to emulate a single source of truth. On refresh Favorites and Cart persist from being saved in Local Storage.',
    imgs: [
      'imgs/projects/room/Room-Ecom.jpg',
      'imgs/projects/room/room-browse.jpg',
      'imgs/projects/room/room-cart.jpg',
      'imgs/projects/room/room-checkout.jpg',
      'imgs/projects/room/room-product.jpg'
    ],
    site: 'https://room-static.netlify.app/',
    source: 'https://github.com/ByrnesByrnes/Ecom-Room-Static',
    client: false,
  },
  {
    id: 3,
    title: 'Amazon Clone',
    technologies: ['ReactJS', 'Styled-Components', 'Firebase', 'Stripe', 'React Router'],
    description: 'Emulation of an ecommerce site with login authentication using Firebase. Custom search for products on the browse page, and emulates a checkout flow using Stripe. If successful transaction order is pushed and stored in firebase and retrieved in the view orders tab.',
    imgs: [
      'imgs/projects/amazon/Amazon-Demo.jpg',
      'imgs/projects/amazon/Amazon-browse.jpg',
    ],
    site: ['https://amzn-cln-ed1f8.firebaseapp.com'],
    source: 'https://github.com/ByrnesByrnes/amazon-cln',
    client: false,
  },
]