import { LINKEDIN_URL, GITHUB_URL } from "./constants"

export const data = {
  hero: {
    title: "Jose Negrin",
    subTitle: "Hello! 😁 My name is José, I'm front-end developer with 7 years of experience, and more than programming, I love developing products that users love to use.",
    image: "/src/assets/images/profile-img.png",
    id: 'hero',
    linkedInUrl: LINKEDIN_URL,
    githubUrl: GITHUB_URL
  },
  title: "",

  jobs: {
    title: "Work Experience",
    id: "work",
    data: [
      {
        company: "EPAM Systems",
        role: "Senior Software Engineer",
        description:[
          "Development of OTT (Streaming TV) applications in Angular and React, focused on usability and user experience.",
          "Development focused on Clean Code and SOLID principles.",
          "Migration of applications from JavaScript vanilla to Angular, and from AngularJS to React."
          ],
          time: "April 2022 - Current",
          stack: []
      },
      {
        company: "ATOS",
        role: "Senior Application Developer",
        description:[
          "Full stack web application development with SSR using Next.js, React.js, and TypeScript.",
          "Development of middleware and APIs in Node.js.",
          "Integration of authentication system with Keycloak and microservices-based APIs on the front end.",
          "Unit testing with Jest and React Testing Library."
        ],
        time: "July 2021 - Abril 2022",
        stack: []
      },
      {
        company: "Freelance",
        role: "Web Developer",
        description:[
          "Development of applications and websites using React, Next, JavaScript, TypeScript, HTML, CSS, CSS Modules, SASS; Tailwind, Bootstrap.",
          "Layout using BEM and Atomic Design principles. Starting from wireframes created in Figma, making them pixel perfect. Using CSS, CSS Modules, Styled Components, Tailwindcss, and Bootstrap.",
          "Development of scalable and maintainable code following Clean Code and SOLID principles.",
          "Creation of unit tests with Jest and React Testing Library. E2E tests with Cypress."
        ],
        time: "November 2017 - July 2021",
        stack: []
      },
      {
        company: "Jet Computer",
        role: "Frontend Developer",
        description:[
          "Creation and configuration of e-commerce in PrestaShop, and use CSS for layout."
        ],
        time: "January 2017 - November 2017",
        stack: []
      }
    ]
  },
  personalProjects: {
    title: "Personal Projects",
    id: "projects",
    data: [
      {
        title: "Netflix Clone",
        image: "/src/assets/images/netflix-project.png",
        description: "Project developed using TypeScript, Next.js, Node.js, and Tailwind CSS. The main objective of this project is to create a full-stack application using Node.js for building the APIs and implementing server-side rendering (SSR) for optimized loading.",
        stack: ["Next", "React", "Node", "TypeScript"],
        githubUrl: "https://github.com/Josenegrin/netflix-clone",
        projectUrl: "https://netflix-clone-sjn.vercel.app/"
      }
    ]
  },
  about: {
    title: "About me",
    id: "about",
    description: "Hi! I'm Jose Negrin. More than just programming, I love developing products that users can adore. I am a frontend developer with over 7 years of experience. At EPAM Systems, I developed OTT applications (Streaming TV applications for PC and SmartTV) using JavaScript, Angular, and React, focusing on usability and user experience. At Atos, I worked on full stack applications with Next.js and Node.js. As a freelancer, I've created innovative and scalable projects, applying Clean Code and SOLID principles, using technologies like JavaScript, TypeScript, Next.js, and React."
  }
}