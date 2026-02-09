export interface Project {
  name: string;
  description: string;
  stars: number;
  tech: string;
  link: string;
  github: string;
  image_url: string;
}

export interface BlogPost {
  title: string;
  date: string;
  description: string;
  link: string;
  tags: string[];
}

export interface Skill {
  id: string;
  name: string;
  image_url: string;
}
