export interface HeroInterface {
    title: string;
    subTitle: string;
    image: string;
    id: string;
    linkedInUrl: string;
    githubUrl: string;
}

export interface JobsInterface {
  title: string;
  id: string;
  data: JobsDataInterface[];
}

export interface JobsDataInterface {
  company: string;
  role: string;
  description:string[];
  time: string;
  stack: string[];
}

export interface PersonalProjectsDataInterface {
  title: string;
  image: string;
  description: string;
  stack: string[];
  githubUrl?: string;
  projectUrl?: string;
}