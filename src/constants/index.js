import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import ztriko_box from "../assets/ztriko_box.png";
import pythonicon from "../assets/tech/pythonicon.png";
import melt_figma from "../assets/melt_figma.png";
import r_logo from "../assets/tech/r_logo.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Analyst",
    icon: mobile,
  },
  {
    title: "Front-End Development Apprentice",
    icon: html,
  },
  {
    title: "Backend Developer Apprentice",
    icon: reactjs,
  },
];

const technologies = [
  {
    name: "Python",
    icon: pythonicon,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "R",
    icon: r_logo,
  }

];

const experiences = [
  {
    title: "Strategic Data Analyst Intern",
    company_name: "QW Capital LLP",
    icon: backend,
    iconBg: "#383E56",
    date: "January 2022 - June 2022",
    points: [
      "As a Data Analytics Intern at QW Capital LLP, I led a pioneering project to decode, filter, and repurpose data from Betfair's real-time API into a comprehensive database. This initiative was crucial for conducting advanced statistical analyses, particularly around Premier League events, to decode the dynamics of lay and back bets. My efforts were central to designing a statistical algorithm aimed at automating betting strategies, showcasing my proficiency in API management, data interpretation, and analytics. This challenging yet fulfilling project not only honed my analytical skills but also deepened my understanding of data's impact on decision-making in dynamic environments.",
    ],
  },
  {
    title: "Data Analytics Intern",
    company_name: "PKF Attest",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "June 2023 - July 2023",
    points: [
      "In my role as a Data Analysis Intern at PKF Attest, I was instrumental in developing and enhancing Power BI reports and SQL database implementations. I excelled in analyzing extensive datasets to extract actionable insights, contributing significantly to data-driven decision-making processes. My expertise in Microsoft's suite of data analysis tools, notably Power BI and SQL Server, was pivotal in optimizing data models and dashboards for performance and multidimensional analysis. Through meticulous data cleaning and transformation processes, I adeptly identified trends and executed statistical models for predictive analytics. My work underscored a commitment to leveraging data for strategic advantage, embodying my problem-solving skills and meticulous attention to detail.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Ztriko",
    description:
      'As a co-founder and lead developer of Lemon Delight Cakes, I innovated our e-commerce platform, integrating personalized QR codes for custom packaging messages, automated order management with calendar syncing for precise deliveries, and targeted email marketing campaigns. My role was crucial in blending tech with traditional baking, enhancing customer experience through automation and personal touches, and ensuring operational efficiency. This venture showcases my ability to merge culinary art with digital innovation seamlessly.',
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "AWS S3 Bucket",
        color: "pink-text-gradient",
      },
    ],
    image: ztriko_box,
    source_code_link: "https://ztriko.com/",
  },
  {
    name: "Melt | e-commerce platform",
    description:
      "I developed the e-commerce platform for Sensual Delights, a brand specializing in sexual chocolates. Leveraging Figma for design and HTML, CSS, and JavaScript for the front end, I created an engaging online experience. The integration with Shopify's Liquid language enabled a seamless e-commerce operation, highlighting my ability to merge creative design with technical execution, enhancing user engagement and satisfaction in a unique niche market.",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
      {
        name: "liquid",
        color: "blue-text-gradient",
      },
    ],
    image: melt_figma,
    source_code_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
