import type{ TechStack, Project, BlogPost } from '../types/index';

export const techIcons: Record<string,string> = {
  'React': '⚛️',
  'Next.js': '▲',
  'TypeScript': 'TS',
  'Tailwind CSS': '🎨',
  'Redux': '🔄',
  'Express.js': '🚂',
  'Spring Boot': '🍃',
  'Node.js': '🟢',
  'Java': '☕',
  'MySQL': '🐬',
  'PostgreSQL': '🐘',
  'MongoDB': '🍃',
  'Oracle': '🔴',
  'Git': '📦',
  'Docker': '🐳',
  'AWS': '☁️',
  'Linux': '🐧'
};

export const techStack: TechStack = {
  backend: [ 'Java','Spring Boot','Express.js', 'Node.js',],
  frontend: ['React', 'TypeScript', 'Tailwind CSS', ],
  database: ['MySQL', 'PostgreSQL',],
  tools: ['Git', 'Docker', 'AWS', 'Linux']
};

export const projects: Project[] = [
   {
    name: 'Filmiflix',
    description: 'Movie website showing cast, director, and videos of searched movies',
    stars: 3,
    tech: 'TypeScript',
    link:"https://filmiflix.netlify.app",
    github: 'https://github.com/amreshpro/filmiflix'
  },
  {
    name: 'zsh-theme',
    description: 'oh-my-zsh terminal theme to increase productivity during coding',
    stars: 24,
    tech: 'Shell',
    link: 'https://github.com/amreshpro/zsh-theme',
    github:""
  },
 

];




export const blogPosts: BlogPost[] = [
   {
    title: 'POJO vs JavaBean vs Spring Bean',
    date: '2025',
    description: 'A clear comparison of POJO, JavaBean, and Spring Bean concepts, highlighting their roles and differences in full-stack Java development.',
    link: 'https://amreshpro.medium.com/demystifying-java-beans-pojo-vs-javabean-vs-spring-bean-4844be3781f9'
  },
  {
    title: 'Stop using Var in JavaScript',
    date: '2025',
    description: 'Modern JavaScript best practices explaining why let and const are safer, clearer, and preferred over var in ES6 and beyond.',
    link: 'https://amreshpro.medium.com/stop-using-var-in-javascript-heres-why-let-const-are-better-07f24657d0b5'
  },
 
];
