import React, { Component } from "react"
import Typewriter from "typewriter-effect"

// import Layout from "../components/layout"
import Head from "../components/head"

import classes from "../styles/index.module.scss"
import Link from 'gatsby-plugin-transition-link/AniLink'

class Index extends Component {
  render() {
    return (
      // <Layout>
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
          <div className={classes.Button}><Link to="/technologies/" paintDrip duration={0.5}>Technologies <i className="fas fa-arrow-circle-right"></i></Link></div>
        </div>
        </>
      // </Layout>
    )
  }
}

export default Index
