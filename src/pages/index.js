import React, { Component } from "react"

import Layout from "../components/layout"
import Head from "../components/head"

import classes from "../styles/index.module.scss"

class Index extends Component {
  render() {
    return (
      <Layout>
        <Head title="Home" />
        <div className={classes.Index}>
          <div className={classes.Computer}>
            <img src="computerVector.svg" alt="computerBackgroundimage" />
            <div className={classes.Screen}>
              Hello, I'm Amar Nath Yogi.<span>|</span>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Index
