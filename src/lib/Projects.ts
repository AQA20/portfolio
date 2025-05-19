import { Project } from '@/interfaces/Project'

export const Projects: Project[] = [
  {
    title: 'Paginated & Filterable Booking Tickets',
    description: 'A new booking flow for a travel booking platform',
    tech: ['PHP', 'MySQL', 'Laravel', 'Vue', 'Tailwind', 'Vuetify'],
    video: '/filtered&paginated-tickets.webm',
    liveUrl: 'https://tripsome.az/en/activities',
    type: 'video',
  },
  {
    title: 'Booking flow',
    description: 'A new booking flow for a travel booking platform',
    tech: ['PHP', 'MySQL', 'Laravel', 'Vue', 'Tailwind', 'Vuetify'],
    image: '/500kalima.png',
    liveUrl: 'https://tripsome.az/en/activities',
    images: [
      '/tripsome/0.png',
      '/tripsome/1.png',
      '/tripsome/2.png',
      '/tripsome/3.png',
    ],
    type: 'images',
  },
  {
    title: 'Blog',
    description: 'A blog website',
    tech: ['Next.js', 'React', 'JavaScript', 'Tailwind'],
    image: '/500kalima.png',
    githubUrl: 'https://github.com/AQA20/500kalima',
    liveUrl: 'https://500kalima.com',
    type: 'image',
  },
  {
    title: 'Blog CMS',
    description: 'A blog content management system',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Shadcn'],
    image: '/500kalima-cms.png',
    githubUrl: 'https://github.com/AQA20/blog-cms',
    liveUrl: 'https://manage.500kalima.com',
    type: 'image',
  },
  {
    title: 'Blog API',
    description: 'Node.js and Express.js RESTful API for a blog',
    tech: ['Node.js', 'Express.js', 'AWS', 'MySql', 'Sequelize'],
    image: '/node-api.png',
    githubUrl: 'https://github.com/AQA20/blog-api',
    liveUrl: '#',
    type: 'image',
  },
]