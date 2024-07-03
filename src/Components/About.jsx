import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/Macbook-unsplash.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am a full-stack developer specializing in the MERN stack (MongoDB, Express.js, React, and Node.js). I have experience in building scalable web applications, working on both the front-end and back-end to create seamless user experiences. My skill set includes designing and implementing databases, developing server-side logic, and creating dynamic, responsive user interfaces.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */

const skillsList = [
  "React.js",
  "JavaScipt vanilla",
  "Tailwindcss",
  "Bootstrap",
  "Html",
  "CSS (with responsive design)",
];
const backendList = [
  "Express.js",
  "MonggoseDB",
  "Node.js",
  "RESTful API",
  "JWT for authentication",
];

const Frontend = ["Front-end-skill"];
const Backend = ["Back-end-skill"];
/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */

const detailOrQuote =
  "I really get a kick out of fixing things in novel and innovative ways. Utilizing The MERN Stack To Further My Craft I have created and will continue to create opportunities with the MERN stack, solving problems through workarounds.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <h2>{Frontend}</h2>
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <div>
          <h2>{Backend}</h2>
          <ul
            style={{
              textAlign: "left",
              columns: 2,
              fontSize: "1.25rem",
              margin: "2rem 3rem",
              gap: "3rem",
            }}
          >
            {backendList.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
