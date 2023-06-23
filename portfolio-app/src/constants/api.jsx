import theme from "../theme/theme";


const projects = [
  {
    id: 1,
    title: "Project Exam 2 / Social Media App",
    description: "The brief for the exam: An existing Social Media company has approached you to create a brand new front end for their application. While they have a list of required features, the design and user experience has not been specified. Working with the official API documentation, plan, design and build a modern front end social media application.",
    color: `${theme.boxFirstColor}`,
    images: [
      {
        id: 1,
        src: `${process.env.PUBLIC_URL}/images/hwu/HWU_1.jpg`,
        alt: "screenshot of app when running",
      },
      {
        id: 2,
        src: `${process.env.PUBLIC_URL}/images/hwu/HWU_2.jpg`,
        alt: "screenshot of app when running",
      },
      {
        id: 3,
        src: `${process.env.PUBLIC_URL}/images/hwu/HWU_3.jpg`,
        alt: "screenshot of app when running",
      },
    ],
  },
  {
    id: 2,
    title: "Semester Project 2 / E-Commerce Website",
    description: "",
    color: `${theme.boxSecondColor}`,
    images: [
      {
        id: 1,
        src: `${process.env.PUBLIC_URL}/images/runz/RUNZ_1.jpg`,
        alt: "screenshot of app when running",
      },
      {
        id: 2,
        src: `${process.env.PUBLIC_URL}/images/runz/RUNZ_2.jpg`,
        alt: "screenshot of app when running",
      },
      {
        id: 3,
        src: `${process.env.PUBLIC_URL}/images/runz/RUNZ_3.jpg`,
        alt: "screenshot of app when running",
      },
    ],
  },
  {
    id: 3,
    title: "JavaScript Frameworks Course Assignment",
    description: "",
    color: `${theme.boxThirdColor}`,
    images: [
      {
        id: 1,
        src: `${process.env.PUBLIC_URL}/images/jsfca/JSFCA_1.jpg`,
        alt: "screenshot of app when running",
      },
      {
        id: 2,
        src: `${process.env.PUBLIC_URL}/images/jsfca/JSFCA_2.jpg`,
        alt: "screenshot of app when running",
      },
    ],
  },
];

export default projects;