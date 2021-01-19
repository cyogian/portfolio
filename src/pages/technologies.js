import React, { Component } from "react"
import { Link } from "gatsby"
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
              <div style={{ fontFamily: "Open Sans, sans-serif", fontWeight: "bold", color: "yellow", padding: "1rem", paddingBottom: 0 }}>Click on the Arrow to open a Section & read further details.</div>
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
                tabIndex="0"
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
                      <h3>Data Visualization.</h3>I have beginner level
                      knowledge of using d3.js for Data Visualization. You can
                      explore my{" "}
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
          <div className={classes.Section}>
            <div className={classes.Slider}>
              <div className={classes.SlideTrackBackend}>
                <div className={classes.Slide}>
                  <img src="/logos/python.svg" alt="Python" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/flask.svg" alt="Flask" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/django.svg" alt="Django" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/jinja.png" alt="Jinja" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/sqlAlchemy.png" alt="SQL Alchemy" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/mysql.svg" alt="MySQL" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/mongoDB.svg" alt="MongoDB" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/firestore.svg" alt="Firestore" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/node.svg" alt="NodeJS" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/express.svg" alt="NodeJS" />
                </div>

                <div className={classes.Slide}>
                  <img src="/logos/python.svg" alt="Python" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/flask.svg" alt="Flask" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/django.svg" alt="Django" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/jinja.png" alt="Jinja" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/sqlAlchemy.png" alt="SQL Alchemy" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/mysql.svg" alt="MySQL" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/mongoDB.svg" alt="MongoDB" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/firestore.svg" alt="Firestore" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/node.svg" alt="NodeJS" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/express.svg" alt="NodeJS" />
                </div>
              </div>
            </div>
            <div className={backend}>
              <div
                className={classes.Headline}
                onClick={() => this.onDrop("backend")}
                role="button"
                tabIndex="0"
                onKeyDown={() => this.onDrop("backend")}
              >
                <span>Backend Technologies</span>
                <i className="fa fa-chevron-circle-down"></i>
              </div>
              <div className={classes.DetailView}>
                <div className={classes.Grid}>
                  <div className={classes.Card}>
                    <span className={classes.Image}>
                      <img
                        src="/logos/python.svg"
                        alt="Python"
                        height="45"
                        className={classes.Image4}
                      />
                    </span>
                    <span className={classes.Description}>
                      <h3>Python.</h3>I am proficient in using Python Language,
                      creating backend for web applications using Flask/Django,
                      using os & sys modules for automating regular tasks on my
                      linux system, interacting with filesystem using python.
                      Also have beginner level knowledge in using the NumPy,
                      SciPy, Pandas modules for statistical data analysis &
                      visualization.
                    </span>
                  </div>
                  <div className={classes.Card}>
                    <span className={classes.Image}>
                      <img
                        src="/logos/flask.svg"
                        alt="Flask"
                        height="57"
                        className={classes.Image1}
                      />
                      <img
                        src="/logos/django1.svg"
                        alt="Django"
                        height="57"
                        className={classes.Image2}
                      />
                    </span>
                    <span className={classes.Description}>
                      <h3>Flask & Django.</h3>I am skilled in creating
                      Multi-Page Web Applications & ReST APIs using Flask or
                      Django, creating class based data models using SQLAlchemy
                      or DjangoORM, or using NoSQL Database such as MongoDb,
                      working with Forms, File Uploads & Auth models both custom
                      made & Open Standards such as OAuth, using WebSockets for
                      apps requiring reliable connection and using Templating
                      Engines such as Django Templating Engine & Jinja2.
                    </span>
                  </div>
                  <div className={classes.Card}>
                    <span className={classes.Image}>
                      <img
                        src="/logos/mysql.svg"
                        alt="MySQL"
                        height="45"
                        className={classes.Image1}
                      />
                      <img
                        src="/logos/mongodB.svg"
                        alt="MongoDB"
                        height="45"
                        className={classes.Image2}
                      />
                    </span>
                    <span className={classes.Description}>
                      <h3>MySQL & MongoDB.</h3>I have beginner level experience
                      with SQL, writing queries, using simple joints, etc. and
                      using MySQL as relational database. I am also skilled in
                      using MongoDB, performing different CRUD operations &
                      writing advanced queries making use of filters &
                      projections.
                    </span>
                  </div>
                  <div className={classes.Card}>
                    <span className={classes.Image}>
                      <img
                        src="/logos/contentful.svg"
                        alt="Contentful"
                        height="50"
                        className={classes.Image4}
                      />
                    </span>
                    <span className={classes.Description}>
                      <h3>Contenful.</h3>I prefer using Contentful CMS for
                      managing content for my various static frontend websites
                      such as my blog.
                    </span>
                  </div>

                  <div className={classes.Card}>
                    <span className={classes.Image}>
                      <img
                        src="/logos/firestore.svg"
                        alt="Firestore"
                        height="50"
                        className={classes.Image4}
                      />
                    </span>

                    <span className={classes.Description}>
                      <h3>Firebase & Firestore.</h3>I have used Firestore &
                      other Firebase features such as authentication, uploads,
                      etc. for creating & deploying simple Serverless
                      applications.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.Section}>
            <div className={classes.Slider} style={{ maxWidth: "1080px" }}>
              <div className={classes.SlideTrackDevops}>
                <div className={classes.Slide}>
                  <img src="/logos/git.svg" alt="Git" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/github.png" alt="GitHub" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/docker.svg" alt="Docker" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/heroku.svg" alt="Heroku" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/netlify.svg" alt="Netlify" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/pa.svg" alt="Python Anywhere" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/git.svg" alt="Git" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/github.png" alt="GitHub" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/docker.svg" alt="Docker" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/heroku.svg" alt="Heroku" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/netlify.svg" alt="Netlify" />
                </div>
                <div className={classes.Slide}>
                  <img src="/logos/pa.svg" alt="Python Anywhere" />
                </div>
              </div>
            </div>
            <div className={devops}>
              <div
                className={classes.Headline}
                onClick={() => this.onDrop("devops")}
                role="button"
                tabIndex="0"
                onKeyDown={() => this.onDrop("devops")}
              >
                <span>DevOps & Deployment Tools</span>
                <i className="fa fa-chevron-circle-down"></i>
              </div>
              <div className={classes.DetailView}>
                <div className={classes.Grid}>
                  <div className={classes.Card}>
                    <span className={classes.Image}>
                      <img
                        src="/logos/git.svg"
                        alt="Git"
                        height="30"
                        className={classes.Image1}
                      />
                      <img
                        src="/logos/github.png"
                        alt="GitHub"
                        height="25"
                        className={classes.Image2}
                      />
                    </span>
                    <span className={classes.Description}>
                      <h3>Git & GitHub.</h3>I am efficient in using Git concepts
                      such as branching, merging rebasing for version control. I
                      am also familiar with GitHub workflow and features like
                      project management, actions, etc.
                    </span>
                  </div>
                  <div className={classes.Card}>
                    <span className={classes.Image}>
                      <img
                        src="/logos/docker.svg"
                        alt="Docker"
                        height="60"
                        className={classes.Image4}
                      />
                    </span>
                    <span className={classes.Description}>
                      <h3>Docker.</h3>I have beginner level knowledge about
                      using docker for building & managing linux containers,
                      deploying isolated applications, creating, reusing &
                      sharing custom container images, and configuring
                      containers to access local network.
                    </span>
                  </div>
                  <div className={classes.Card}>
                    <span
                      className={classes.Image}
                      style={{ minWidth: "72px" }}
                    >
                      <img
                        src="/logos/heroku.svg"
                        alt="Heroku"
                        height="50"
                        className={classes.Image1}
                      />
                      <img
                        src="/logos/netlify.svg"
                        alt="Neltify"
                        height="50"
                        className={classes.Image2}
                        style={{ left: "1rem" }}
                      />
                    </span>
                    <span className={classes.Description}>
                      <h3>Heroku, Netlify & PythonAnywhere.</h3>PythonAnywhere &
                      Heroku are my primary choice for deploying Backend Server
                      Applications based on Python such as. Flask or Django Apps
                      & ReST APIs. I prefer using Netlify for deploying Frontend
                      Applications. I love Netlify's support for JAMStack & it's
                      continuous integration & continuous deployment with Github
                      Repo features. This porfolio site is deployed on Netlify.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.Section}>
            <div className={classes.Plate}>
              <img
                src="/logos/windows.svg"
                alt="Windows"
                className={classes.Windows}
              />
              <img
                src="/logos/linux.svg"
                alt="Linux"
                className={classes.Linux}
              />
            </div>
            <div className={os}>
              <div
                className={classes.Headline}
                onClick={() => this.onDrop("os")}
                role="button"
                tabIndex="0"
                onKeyDown={() => this.onDrop("os")}
              >
                <span>Operating Systems</span>
                <i className="fa fa-chevron-circle-down"></i>
              </div>
              <div className={classes.DetailView}>
                <div className={classes.Grid}>
                  <div className={classes.Card}>
                    <span className={classes.Image}>
                      <img
                        src="/logos/linux.svg"
                        alt="Linux"
                        height="60"
                        className={classes.Image4}
                      />
                    </span>
                    <span className={classes.Description}>
                      <h3>Linux.</h3>Linux is my preferred Operating System and
                      I'm a fan of the Do It Yourself philosophy. I have been
                      using linux for 5+ years. I have worked on both debian &
                      redhat based distros. Fedora is my favorite distro. I am
                      well versed with basics of system administration, working
                      with CLI, vim editor, grep, regex, cryptography, disk
                      management, creating and managing users, groups, etc,
                      configuring SELinux policies, file permissions, mail
                      server, web server etc.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.Button}><Link to="/projects/">Projects <i className="fas fa-arrow-circle-right"></i></Link></div>
        </div>
      </Layout>
    )
  }
}

export default Technologies
