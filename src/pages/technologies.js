import React, { Component } from "react"

import Layout from "../components/layout"
import Head from "../components/head"

import classes from "../styles/technologies.module.scss"
class Technologies extends Component {
  state = {
    frontend: false,
    backend: false,
    devops: false,
    os: false,
  }

  onDrop = section => {
    this.setState({
      frontend: section === "frontend" && !this.state.frontend,
      backend: section === "backend" && !this.state.backend,
      devops: section === "devops" && !this.state.devops,
      os: section === "os" && !this.state.os,
    })
  }
  render() {
    let frontend = classes.Dropdown,
      backend = classes.Dropdown,
      devops = classes.Dropdown,
      os = classes.Dropdown

    const Open = classes.Dropdown + " " + classes.Open
    if (this.state.frontend) {
      frontend = Open
    }
    if (this.state.backend) {
      backend = Open
    }
    if (this.state.devops) {
      devops = Open
    }
    if (this.state.os) {
      os = Open
    }
    return (
      <Layout>
        <Head title="Technologies" />
        <div className={classes.Technologies}>
          <div className={classes.Section}>
            <div className={classes.Slider}>
              <div className={classes.SlideTrackFrontend}>
                <div className={classes.Slide}>
                  <img src="/logos/javascript.svg" alt="JavaScript" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/html5.svg" alt="HTML 5" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/css3.svg" alt="CSS3" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/sass.svg" alt="SASS" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/bootstrap.svg" alt="Bootstrap" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/semantic-ui.svg" alt="SemanticUI" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/d3.svg" alt="D3" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/react.svg" alt="ReactJS" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/redux.svg" alt="ReduxJS" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/gatsby.svg" alt="GatsbyJS" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/babel.svg" alt="Babel" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/webpack.svg" alt="Webpack" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/javascript.svg" alt="JavaScript" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/html5.svg" alt="HTML 5" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/css3.svg" alt="CSS3" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/sass.svg" alt="SASS" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/bootstrap.svg" alt="Bootstrap" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/semantic-ui.svg" alt="SemanticUI" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/d3.svg" alt="D3" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/react.svg" alt="ReactJS" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/redux.svg" alt="ReduxJS" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/gatsby.svg" alt="GatsbyJS" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/babel.svg" alt="Babel" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/webpack.svg" alt="Webpack" />
                </div>
              </div>
            </div>
            <div className={frontend}>
              <div
                className={classes.Headline}
                onClick={() => this.onDrop("frontend")}
              >
                <span>Frontend</span>
                <i className="fa fa-chevron-circle-down"></i>
              </div>
              <div className={classes.DetailView}></div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Technologies
