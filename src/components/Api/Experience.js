import htmlImg from '../../Assets/skill/html.png';
import cssImg from '../../Assets/skill/css.png';
import nodeImg from '../../Assets/skill/node.png';
import reactImg from '../../Assets/skill/react.png';
import jsImg from '../../Assets/skill/javascript.png';
import pythonImg from '../../Assets/skill/python.png';
import djangoImg from '../../Assets/skill/django.png';
import mongoImg from '../../Assets/skill/mongo.png';
import expressImg from '../../Assets/skill/express.png';
import reduxImg from '../../Assets/skill/redux.png';
import gitImg from '../../Assets/skill/git.png';
import tailwindImg from '../../Assets/skill/tailwind.png';
import bootstrapImg from '../../Assets/skill/bootstrap.png';
import mysqlImg from '../../Assets/skill/mysql.png';
import postgresqlImg from '../../Assets/skill/postgresql.png';

export const skills = [
    // Frontend Technologies
    {
        id: 1,
        title: 'HTML',
        img: htmlImg,
        category: 'frontend'
    },
    {
        id: 2,
        title: 'CSS',
        img: cssImg,
        category: 'frontend'
    },
    {
        id: 4,
        title: 'React',
        img: reactImg,
        category: 'frontend'
    },
    {
        id: 5,
        title: 'JavaScript',
        img: jsImg,
        category: 'frontend'
    },
    {
        id: 12,
        title: 'Tailwind CSS',
        img: tailwindImg,
        category: 'frontend'
    },
    {
        id: 13,
        title: 'Bootstrap',
        img: bootstrapImg,
        category: 'frontend'
    },
    {
        id: 14,
        title: 'Redux',
        img: reduxImg,
        category: 'frontend'
    },

    // Backend Technologies
    {
        id: 3,
        title: 'Node.js',
        img: nodeImg,
        category: 'backend'
    },
    {
        id: 8,
        title: 'Express.js',
        img: expressImg,
        category: 'backend'
    },
    {
        id: 6,
        title: 'Python',
        img: pythonImg,
        category: 'backend'
    },
    {
        id: 7,
        title: 'Django',
        img: djangoImg,
        category: 'backend'
    },

    // Databases
    {
        id: 9,
        title: 'MongoDB',
        img: mongoImg,
        category: 'database'
    },
    {
        id: 15,
        title: 'MySQL',
        img: mysqlImg,
        category: 'database'
    },
    {
        id: 16,
        title: 'PostgreSQL',
        img: postgresqlImg,
        category: 'database'
    },

    // Tools & Others
    {
        id: 10,
        title: 'Git',
        img: gitImg,
        category: 'tool'
    }
];

// Alternatively, you can organize them by technology stacks
export const techStacks = {
    mern: [
        { id: 4, title: 'React', img: reactImg },
        { id: 8, title: 'Express.js', img: expressImg },
        { id: 3, title: 'Node.js', img: nodeImg },
        { id: 9, title: 'MongoDB', img: mongoImg }
    ],
    django: [
        { id: 6, title: 'Python', img: pythonImg },
        { id: 7, title: 'Django', img: djangoImg },
        { id: 16, title: 'PostgreSQL', img: postgresqlImg }
    ],
    frontend: [
        { id: 1, title: 'HTML', img: htmlImg },
        { id: 2, title: 'CSS', img: cssImg },
        { id: 5, title: 'JavaScript', img: jsImg },
        { id: 4, title: 'React', img: reactImg },
        { id: 12, title: 'Tailwind CSS', img: tailwindImg },
        { id: 14, title: 'Redux', img: reduxImg }
    ]
};