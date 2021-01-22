import React, { Component } from "react"
import Typewriter from "typewriter-effect"

// import Layout from "../components/layout"
import Head from "../components/head"

import classes from "../styles/index.module.scss"
import Link from 'gatsby-plugin-transition-link/AniLink'

class Index extends Component {
  render() {
    return (
      <>
        <Head title="Home" />
        <div className={classes.Index}>
          <div className={classes.Computer}>
            <img src="computerVector.svg" alt="computerBackgroundimage" />
            <div className={classes.Screen} id="Screen">
              <Typewriter
                options={{
                  strings: [
                    "Hello, I'm Amar.<br/>I'm a Full Stack Web Developer.",
                    "I build Web Applications using HTML, CSS, Javascript & Python.",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
          <div className={classes.About}>
              <img src="/pp.jpeg" alt="Profile Pic"/>
              <div className={classes.Content}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
          </div>
          <div className={classes.Button}><Link to="/technologies/" paintDrip duration={0.5} hex="#02ec02">Technologies <i className="fas fa-arrow-circle-right"></i></Link></div>
        </div>
      </>
    )
  }
}

export default Index
