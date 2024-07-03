/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/ian-schneider-unsplash.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Interior-Design-webapp in React",
    description:
      "Interior-Design-webapp is a React-based application tailored for interior design enthusiasts and professionals. It offers intuitive tools for visualizing spaces, experimenting with layouts, and selecting decor elements.",
    url: "https://interior-design-web-app-rose.vercel.app/",
  },
  {
    title: "HTML , Css & Javascript vanilla Portfolio",
    description:
      "HTML, CSS & Vanilla JavaScript Portfolio showcases my skills in front-end web development. It features , elegant CSS styling, and interactive elements powered by pure JavaScript.t.",
    url: "https://krishdevcrafting.github.io/portfolio/#mid",
  },
  {
    title: "Clone the Figma Template",
    description:
      "This project utilizes React.js for its front-end development, leveraging its component-based architecture and virtual DOM for efficient rendering and seamless user interactions.",
    url: "https://responsive-app-landing-page-neon.vercel.app/",
  },
  {
    title: "Responsive-website",
    description:
      "Responsive Website: A versatile design that adapts fluidly across devices, ensuring a seamless user experience on desktops, tablets, and mobile phones.",
    url: "https://krishdevcrafting.github.io/Static-Website-Responsive/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
