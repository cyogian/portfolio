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
          <div className={classes.Header}>
            <h1>Technologies.</h1>
            <div>
              The technologies that I'm skilled in working with & the tools that
              I've used in my previous projects.
            </div>
          </div>
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
                  <img src="/logos/jQuery.svg" alt="jQuery" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/node.svg" alt="NodeJS" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/npm.svg" alt="npm" />
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
                  <img src="/logos/jQuery.svg" alt="jQuery" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/node.svg" alt="NodeJS" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/npm.svg" alt="npm" />
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
                role="button"
                tabIndex="-6"
                onKeyDown={() => this.onDrop("frontend")}
              >
                <span>Frontend Technologies</span>
                <i className="fa fa-chevron-circle-down"></i>
              </div>
              <div className={classes.DetailView}>
                <div className={classes.Grid}>
                  <div className={classes.Card}>
                    <span className={classes.Image}>
                      <img
                        src="/logos/javascript.svg"
                        alt="JavaScript"
                        height="60"
                        className={classes.Image4}
                      />
                    </span>
                    <span className={classes.Description}>
                      <h3>JavaScript.</h3>I have an extensive experience with
                      Javascript, building Interactive Websites & applications
                      with sufficent knowledge of jQuery, ECMA 2015, ES6
                      features & modern tooling such as Node, Webpack, Babel as
                      well as the NPM package manager.
                    </span>
                  </div>
                  <div className={classes.Card}>
                    <span className={classes.Image}>
                      <img
                        src="/logos/html5.png"
                        alt="HTML5"
                        className={classes.Image1}
                        height="70"
                      />
                      <img
                        src="/logos/css3.png"
                        alt="CSS3"
                        className={classes.Image2}
                        height="70"
                      />
                    </span>
                    <span className={classes.Description}>
                      <h3>HTML & CSS.</h3>I am accomplished in using HTML & CSS
                      to create User-Friendly Responsive Pages focused on
                      accessibility, performance & engaging design. I have
                      practical knowledge of HTML5, SASS preprocessor and CSS3
                      features such as Flexbox, Grid. I also have a beginner
                      level knowledge about CSS animations & transitions, which
                      you can witness in this portfolio site.
                    </span>
                  </div>
                  <div className={classes.Card}>
                    <span className={classes.Image}>
                      <img
                        src="/logos/react.svg"
                        alt="React"
                        height="45"
                        className={classes.Image1}
                      />
                      <img
                        src="/logos/redux.svg"
                        alt="Redux"
                        height="45"
                        className={classes.Image2}
                      />
                    </span>
                    <span className={classes.Description}>
                      <h3>React & Redux.</h3>I have 7 Months experience with
                      React, building web applications and reusable components.
                      I've used Redux for client-side state management and
                      created medium sized Single Page applications. I am also
                      skilled in utilizing React Router & React Testing Library.
                    </span>
                  </div>
                  <div className={classes.Card}>
                    <span className={classes.Image}>
                      <img
                        src="/logos/bootstrap.svg"
                        alt="Bootstrap"
                        height="50"
                        className={classes.Image1}
                      />
                      <img
                        src="/logos/semantic-ui.svg"
                        alt="Semantic UI"
                        height="50"
                        className={classes.Image2}
                      />
                    </span>
                    <span className={classes.Description}>
                      <h3>Bootstrap & Semantic UI.</h3>I am capable of
                      leveraging CSS Frameworks & UI Component Libraries such as
                      Bootstrap & Semantic UI for faster development of
                      responsive mobile-first web apps.
                    </span>
                  </div>
                  <div className={classes.Card}>
                    <span className={classes.Image}>
                      <img
                        src="/logos/gatsby.svg"
                        alt="GatsbyJS"
                        height="50"
                        className={classes.Image3}
                      />
                    </span>
                    <span className={classes.Description}>
                      <h3>JAMstack.</h3>I have experience of creating headless
                      front-ends, and working with the JAMstack. This website is
                      built with Gatsby a static site framework based on React.
                    </span>
                  </div>
                  <div className={classes.Card}>
                    <span className={classes.Image}>
                      <img
                        src="/logos/d3.svg"
                        alt="D3"
                        height="50"
                        className={classes.Image4}
                      />
                    </span>
                    <span className={classes.Description}>
                      <h3>Data Visualization</h3>I have beginner level knowledge
                      of using d3.js for Data Visualization. You can explore my{" "}
                      <a
                        href="https://vizhub.com/cyogian"
                        target="__blank"
                        rel="noopener noreferrer"
                      >
                        VizHub Profile
                      </a>{" "}
                      & my{" "}
                      <a
                        href="https://codepen.io/collection/nMMBNN"
                        target="__blank"
                        rel="noopener noreferrer"
                      >
                        Codepen Collection
                      </a>{" "}
                      to see my Data Visualization Projects.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Technologies
