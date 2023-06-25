import theme from "../theme/theme";

const projects = [
  {
    id: 1,
    title: "Social Media App",
    subTitle: "Project Exam 2",
    color: `${theme.boxSecondColor}`,
    description:
      "The brief for the exam: An existing Social Media company has approached you to create a brand new front end for their application. While they have a list of required features, the design and user experience has not been specified. Working with the official API documentation, plan, design and build a modern front end social media application.",
    tech: "HTML  |  CSS  |  JavaScript  |  REACT ",
    images: [
      {
        id: 1,
        key: 10,
        src: `${process.env.PUBLIC_URL}/images/hwu/HWU_1.jpg`,
        alt: "screenshot of app when running",
        mobile: false,
      },
      {
        id: 2,
        key: 20,
        src: `${process.env.PUBLIC_URL}/images/hwu/HWU_2.jpg`,
        alt: "screenshot of app when running",
        mobile: true,
      },
      {
        id: 3,
        key: 30,
        src: `${process.env.PUBLIC_URL}/images/hwu/HWU_3.jpg`,
        alt: "screenshot of app when running",
        mobile: true,
      },
    ],
    github_url: "https://github.com/vildehalvorsen/project-exam-2/",
    website_url: "https://hwuapp.netlify.app/",
  },
  {
    id: 2,
    title: "E-Commerce Website",
    subTitle: "Semester Project",
    color: `${theme.boxSecondColor}`,
    description:
      "The semester project assignment was to make an e-commerce website and build a customer frontend with home, product list, product detail and cart pages, and an admin frontend with functionality to create, update and delete products. I used a school Strapi installation to populate the website.",
    tech: "HTML  |  CSS  |  JavaScript  |  SASS ",
    images: [
      {
        id: 1,
        key: 40,
        src: `${process.env.PUBLIC_URL}/images/runz/RUNZ_1.jpg`,
        alt: "screenshot of app when running",
        mobile: false,
      },
      {
        id: 2,
        key: 50,
        src: `${process.env.PUBLIC_URL}/images/runz/RUNZ_2.jpg`,
        alt: "screenshot of app when running",
        mobile: false,
      },
      {
        id: 3,
        key: 60,
        src: `${process.env.PUBLIC_URL}/images/runz/RUNZ_3.jpg`,
        alt: "screenshot of app when running",
        mobile: false,
      },
    ],
    github_url: "https://github.com/vildehalvorsen/semester-project-2",
    website_url: "",
  },
  {
    id: 3,
    title: "REACT APP",
    subTitle: "JS Frameworks Course Assignment",
    color: `${theme.boxSecondColor}`,
    description:
      "The course assignment was to create a simple React app with login functionality and fetching data using REST api.",
    tech: "HTML  |  CSS  |  JavaScript  |  REACT ",
    images: [
      {
        id: 1,
        key: 70,
        src: `${process.env.PUBLIC_URL}/images/jsfca/JSFCA_1.jpg`,
        alt: "screenshot of app when running",
        mobile: false,
      },
      {
        id: 2,
        key: 80,
        src: `${process.env.PUBLIC_URL}/images/jsfca/JSFCA_2.jpg`,
        alt: "screenshot of app when running",
        mobile: true,
      },
    ],
    github_url: "https://github.com/vildehalvorsen/js-frameworks-ca",
    website_url: "",
  },
];

export default projects;
