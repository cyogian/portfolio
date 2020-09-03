import React, { Component } from "react"

import Layout from "../components/layout"
import Head from "../components/head"

import classes from "../styles/projects.module.scss"

class Projects extends Component {
  render() {
    return (
      <Layout>
        <Head title="Projects" />
        <div className={classes.Projects}></div>
      </Layout>
    )
  }
}

export default Projects
