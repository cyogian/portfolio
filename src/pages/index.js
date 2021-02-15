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
            <img src="/pp.jpeg" alt="Profile Pic" />
            <div className={classes.Content}>
              I am a Computer Science & Engineering Graduate, currently residing in my Home Town Nagda, Madhya Pradesh, India.<br /><br />Quite skilled in developing progressive Web Apps using Javascript & React(such as this site which is developed using JamStack), Backend Server using Python & Flask/Django.<br /><br />Currently learning Node & Express to become a MERN Stack Developer.<br /><br />Apart from Web Development, I am also interested in Mobile Development, Data Science, Machine Learning, Deep Learning & DevOps.<br /><br />I am a quick learner & fluent communicator always ready to learn new technologies that are needed & are useful in my profession.<br /><br />As hobbies, I love to sing, play music, perform in open mics, debate on politics & activism and am also passionate about Poetry in English & Hindi.<br /><br />I love watching Anime and watching videos & reading about Current Affairs.<br /><br />You can contact me through email or one of the social accounts mentioned in the footer or the navigation panel of this site.
              <div className={classes.Username}>
                Explicating My Username . . .
                <img src="/cyogianExplained.png" alt="Cyogian Explained" />
              </div>
            </div>
          </div>
          <div className={classes.Button}><Link to="/technologies/" paintDrip duration={0.5} hex="#02ec02">Technologies <i className="fas fa-arrow-circle-right"></i></Link></div>
        </div>
      </>
    )
  }
}

export default Index
