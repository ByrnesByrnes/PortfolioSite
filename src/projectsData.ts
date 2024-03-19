export interface Project {
    id: number;
    title: string;
    technologies: string[];
    description: string;
    imgs: string[];
    site: string;
    mockup?: string;
    source: string;
    client: boolean;
    testData?: {
        userName: string;
        password: string;
    }[];
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Album Connect",
        technologies: ["ReactJS", "Typescript", "LESS", "AntD", "DotNet"],
        description:
            "Store photos, videos and organize them in a folder format if you so choose to do so. Add friends to an album so they can upload photos and show the experience they had. (CI/CD)",
        imgs: [
            "imgs/projects/album-connect/album-connect.png",
            "imgs/projects/album-connect/album-connect-folder.png",
            "imgs/projects/album-connect/album-connect-album.png",
            "imgs/projects/album-connect/album-connect-albums.png",
            "imgs/projects/album-connect/album-connect-comment.png",
        ],
        site: "https://albumconnect.fly.dev/",
        source: "https://github.com/ByrnesByrnes/AlbumConnect",
        client: false,
        testData: [
            {
                userName: "test",
                password: "Pa$$w0rd",
            },
            {
                userName: "testTwo",
                password: "Pa$$w0rd",
            },
        ],
    },
    {
        id: 2,
        title: "Synk",
        technologies: ["ReactJS", "Typscript", "SCSS", "FireBase"],
        description:
            "People all around the world can take a photo at a designated time and create a photo of up to 100 people from around the world or join a photo now event",
        imgs: [
            "imgs/projects/synk/admin-main.png",
            "imgs/projects/synk/event-main-upload.png",
            "imgs/projects/synk/event-edit-photo.png",
            "imgs/projects/synk/event-edit-photo-two.png",
        ],
        site: "https://synk-development.web.app/events",
        source: "",
        client: true,
        testData: [
            {
                userName: "1 650-555-3311",
                password: "123456",
            },
        ],
    },
    {
        id: 3,
        title: "S and R Assisted Living Facility",
        technologies: [
            "ReactJS",
            "SCSS",
            "React-hooks",
            "React Router",
            "Netlify",
        ],
        description:
            "Built for a client who needed a custom static site. Using netlify CMS for submitting forms through netlify API.",
        imgs: [
            "imgs/projects/sandr/SandRassistedLiving.jpg",
            "imgs/projects/sandr/sandr-contact.jpg",
            "imgs/projects/sandr/sandr-difference.jpg",
            "imgs/projects/sandr/sandr-services.jpg",
        ],
        site: "https://www.sandrassistedliving.com/",
        source: "https://github.com/ByrnesByrnes/SandRAssistedLiving",
        client: true,
    },
    {
        id: 4,
        title: "Room (E-commerce)",
        technologies: [
            "ReactJS",
            "SCSS",
            "Netlify",
            "EasyShip API",
            "React Router",
        ],
        description:
            'Created an Ecommerce site from scratch that connects to multiple API"s. Storing State in React Context API in conjunction with useReducer to emulate a single source of truth. On refresh Favorites and Cart persist from being saved in Local Storage.',
        imgs: [
            "imgs/projects/room/Room-Ecom.jpg",
            "imgs/projects/room/room-browse.jpg",
            "imgs/projects/room/room-cart.jpg",
            "imgs/projects/room/room-checkout.jpg",
            "imgs/projects/room/room-product.jpg",
        ],
        site: "https://room-static.netlify.app/",
        source: "https://github.com/ByrnesByrnes/Ecom-Room-Static",
        client: false,
    },
    {
        id: 5,
        title: "Valorant (Desktop Dashboard) - Not Responsive",
        technologies: ["ReactJS", "SCSS", "React-Spring"],
        description:
            "Champions are clickable as well as each champion ability. Designed by Dmitry Kiiashko from Dribbble.com.",
        imgs: [
            "./imgs/projects/valorant/champion-dashboard.png",
            "./imgs/projects/valorant/champion.png",
            "./imgs/projects/valorant/champion-phoenix.png",
            "./imgs/projects/valorant/champion-sage.png",
        ],
        site: "https://valorant-dashboard.netlify.app/",
        source: "https://github.com/ByrnesByrnes/Riot-Valorant-Dashboard",
        mockup: "https://www.figma.com/proto/BHd4pzLRvZ6xhanLtFflqk/Valorant---Agents-page-concept-design?node-id=1%3A2&scaling=scale-down",
        client: false,
    },
    {
        id: 6,
        title: "Amazon Clone",
        technologies: [
            "ReactJS",
            "Styled-Components",
            "Firebase",
            "Stripe",
            "React Router",
        ],
        description:
            "Emulation of an ecommerce site with login authentication using Firebase. Custom search for products on the browse page, and emulates a checkout flow using Stripe. If successful transaction order is pushed and stored in firebase and retrieved in the view orders tab.",
        imgs: [
            "imgs/projects/amazon/Amazon-Demo.jpg",
            "imgs/projects/amazon/Amazon-browse.jpg",
        ],
        site: "https://amzn-cln-ed1f8.firebaseapp.com",
        source: "https://github.com/ByrnesByrnes/amazon-cln",
        client: false,
    },
    {
        id: 7,
        title: "Drone Landing Page",
        technologies: ["HTML", "CSS", "Vanilla JS"],
        description: "Responsive landing page created from a mock up.",
        imgs: [
            "imgs/projects/drone/hero.png",
            "imgs/projects/drone/quote.png",
            "imgs/projects/drone/gallery.png",
            "imgs/projects/drone/footer.png",
        ],
        site: "https://byrnesbyrnes.github.io/Drone-landing/",
        source: "https://github.com/ByrnesByrnes/Drone-landing",
        client: false,
    },
    {
        id: 8,
        title: "Designer Site Landing Page",
        technologies: ["ReactJS", "SCSS", "Figma"],
        description:
            "Responsive mobile first design, that was created using figma.",
        imgs: [
            "imgs/projects/designer/hero.png",
            "imgs/projects/designer/seo.png",
            "imgs/projects/designer/services.png",
            "imgs/projects/designer/footer.png",
        ],
        site: "https://designer-demo.netlify.app/",
        source: "https://github.com/ByrnesByrnes/Designer-Sample-Site",
        mockup: "https://www.figma.com/file/ejN1UY3AmPhlElFwaMy8Eq/Untitled?node-id=0%3A1",
        client: false,
    },
    {
        id: 9,
        title: "Tetris Game",
        technologies: ["Vanilla JS", "CSS", "HTML"],
        description: "Created the classic tetris game",
        imgs: [
            "imgs/projects/tetris/tetris.png",
            "imgs/projects/tetris/tetris-2.png",
            "imgs/projects/tetris/tetris-zoom.png",
        ],
        site: "https://tetris-demo.netlify.app/",
        source: "https://github.com/ByrnesByrnes/Tetris-Game",
        mockup: "",
        client: false,
    },
];
