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
        title: 'Restaurant-Demo',
        image: require('../../Assets/project/3.png'), // Add your image path here
        details: 'A blogging platform where users can create, edit, and delete blog posts.',
        code: '#',
        liveLink: 'https://vk-restaurant.vercel.app/',
    },
];
