import React from "react"

import classes from "./footer.module.scss"

const Footer = () => {
  const certificates = [
    {
      text: "freeCodeCamp Responsive Web Design",
      icon: "fab fa-free-code-camp",
      url: "https://www.freecodecamp.org/certification/cyogian/responsive-web-design"
    },
    {
      text: "freeCodeCamp Javascript Algorithms & Data Structures",
      icon: "fab fa-free-code-camp",
      url: "https://www.freecodecamp.org/certification/cyogian/javascript-algorithms-and-data-structures"
    },
    {
      text: "freeCodeCamp Front-End Libraries",
      icon: "fab fa-free-code-camp",
      url: "https://www.freecodecamp.org/certification/cyogian/front-end-libraries"
    },
    {
      text: "freeCodeCamp D3 Data Visualization",
      icon: "fab fa-free-code-camp",
      url: "https://www.freecodecamp.org/certification/cyogian/data-visualization"
    },
    {
      text: "freeCodeCamp APIs and Microservices",
      icon: "fab fa-free-code-camp",
      url: "https://www.freecodecamp.org/certification/cyogian/apis-and-microservices"
    },
    {
      text: "freeCodeCamp Scientific Computing with Python",
      icon: "fab fa-free-code-camp",
      url: "https://www.freecodecamp.org/certification/cyogian/scientific-computing-with-python-v7"
    },
    {
      text: "Udemy Modern React with Redux",
      url: "https://www.udemy.com/certificate/UC-JEQS5ETY/",
      logo: "/logos/udemy.png"
    },
    {
      text: "Udemy Python Bootcamp",
      url: "https://www.udemy.com/certificate/UC-XFX0JW5W/",
      logo: "/logos/udemy.png"
    }
  ]
  const social = [
    {
      text: "LinkedIn",
      icon: "fab fa-linkedin-in",
      url: "https://linkedin.com/in/cyogian"
    },
    {
      text: "GitHub",
      icon: "fab fa-github",
      url: "https://github.com/cyogian"
    },
    {
      text: "freeCodeCamp",      
      icon: "fab fa-free-code-camp",
      url: "https://freeCodeCamp.org/cyogian"
    },
    {
      text: "CodePen",
      icon: "fab fa-codepen",
      url: "https://codepen.io/cyogian"
    },
    {
      text: "Twitter",
      icon: "fab fa-twitter",
      url: "https://twitter.com/cyogian"
    },
    {
      text: "Kaggle",
      icon: "fab fa-kaggle",
      url: "https://kaggle.com/cyogian"
    },
    {
      text: "HackerEarth",
      url: "http://www.hackerearth.com/@cyogian",
      logo: "/logos/hackerearth.svg"
    },
    {
      text: "HackerRank",
      url: "https://hackerrank.com/cyogian",
      icon: "fab fa-hackerrank",
    },
    {
      text: "Hashnode",
      url: "https://hashnode.com/@cyogian",
      logo: "/logos/hashnode.svg"
    }
  ]
  const socialList = social.map((item, index) => {
    return <li key={index}><a href={item.url} target="_blank" rel="noreferrer noopener">{ item.logo ? <img src={item.logo} alt="logo"></img> : ""}{ item.icon ? <i className={item.icon}></i> : ""}{item.text}</a></li>
  })
  const certificateList = certificates.map((item, index) => {
    return <li key={index}><a href={item.url} target="_blank" rel="noreferrer noopener">{ item.logo ? <img src={item.logo} alt="logo"></img> : ""}{ item.icon ? <i className={item.icon}></i> : ""}{item.text}</a></li>
  })
  return (
    <div className={classes.Footer}>
      <div className={classes.Section}>
        <h3>Social</h3>
        <ul>
          {socialList}
        </ul>
      </div>
      <div className={classes.Section}>
        <h3>Certifications</h3>
        <ul>
          {certificateList}
        </ul>
      </div>
      <div className={classes.Copyright}>
        Copyright © {new Date().getFullYear()}{" "}
        <a
          href="https://linkedin.com/in/cyogian"
          target="__blank"
          rel="noreferer"
        >
          Amar Nath Yogi
        </a>
        . All Rights Reserved
      </div>
    </div>
  )
}

export default Footer
