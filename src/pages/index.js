import React, { Component } from "react"
import Typewriter from "typewriter-effect"

import Layout from "../components/layout"
import Head from "../components/head"

import classes from "../styles/index.module.scss"
import { Link } from "gatsby"

class Index extends Component {
  render() {
    return (
      <Layout>
        <Head title="Home" />
        <div className={classes.Index}>
          <div className={classes.Computer}>
            <img src="computerVector.svg" alt="computerBackgroundimage" />
            <div className={classes.Screen} id="Screen">
              <Typewriter
                options={{
                  strings: [
                    "Hello, I'm Amar.<br/>I'm a Full Stack Web Developer.",
                    "I build Web Apps using Javascript & Python.",
                    "I am proficient in building both Frontend & Backend of a Web Application.",
                    "I can create Multi-Page & Single-Page Progressive Web Applications.",
                    "I can build ReST APIs using Python/Flask.",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              <Link to="/technologies/">
                Click Here to Explore My Tools & Skill Set
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Index
