export interface Project {
  name: string;
  description: string;
  stars: number;
  tech: string;
  link: string;
  github:string
}

export interface BlogPost {
  title: string;
  date: string;
  description: string;
  link: string;
}

export interface TechStack {
  frontend: string[];
  backend: string[];
  database: string[];
  tools: string[];
}