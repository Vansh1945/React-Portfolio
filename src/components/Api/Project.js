export const Projects = [
    {
        id: 1,
        title: 'Daily Blog',
        image: require('../../Assets/project/blog.png'), 
        details: 'This project is a responsive website for daily blogs, where only the admin can add blogs, while the public can view and read them.',
        languages: ['HTML', 'CSS', 'Python','Django','SQLite'],
        code: '#',
        liveLink: 'django-blog-wzf3.onrender.com/',
    },
    {
        id: 2,
        title: 'Todo App',
        image: require('../../Assets/project/Todo.png'), // Ensure this path is correct
        details: 'A simple Todo App for managing tasks, featuring add and delete functionalities with a clean user interface.',
        code: '#',
        liveLink: 'https://tododaliy.vercel.app/', // Updated live link
    },
    {
        id: 3,
        title: 'Raj Electrical Services',
        image: require('../../Assets/project/raj.png'), // Add your image path here
        details: 'A service management web app for Raj Electricals to handle customer service requests, installations, and project bookings.',
        code: '#',
        liveLink: 'https://rajelectricalservices.vercel.app/',
    },
    {
        id: 4,
        title: 'GuardianNet ',
        image: require('../../Assets/project/guardiannet.png'), // Add your image path here
        details: 'A MERN-based smart safety and alert system that helps users manage security and emergency notifications efficiently.',
        code: '#',
        liveLink: 'https://guardiannet.vercel.app/',
    },
];
