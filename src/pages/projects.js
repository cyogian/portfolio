import React from "react"
import { graphql, useStaticQuery } from "gatsby"

// import Layout from "../components/layout"
import Head from "../components/head"

import classes from "../styles/projects.module.scss"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject(sort: { fields: order, order: DESC }) {
        edges {
          node {
            title
            description {
              description
            }
            preview {
              description
              file {
                url
              }
            }
            type
            liveDemo
            post
            sourceCode
            stack
          }
        }
      }
    }
  `)
  const edges = data.allContentfulProject.edges
  const renderedList = edges.map((project, index) => {
    const {
      title,
      description,
      preview,
      liveDemo,
      sourceCode,
      stack,
      post,
    } = project.node
    const stackList = stack.map((item, i) => (<li key={i}>{item}</li>))
    return (
      <li className={index % 2 === 0 ? classes.Left : classes.Right} key={index}>
        <div className={classes.Project}>
          <div className={classes.Preview}>
            <img src={preview.file.url} alt={preview.description} />
          </div>
          <div className={classes.Content}>
            <h2>{title}</h2>
            <div className={classes.Description}>{description.description}</div>
            <ul className={classes.Stack}>{stackList}</ul>
            <div className={classes.DemoSource}>
              {sourceCode ? <a href={sourceCode} target="_blank" rel="noreferrer"><i className="fas fa-code"></i>  Source Code</a> : ""}
              {liveDemo ? <a href={liveDemo} target="_blank" rel="noreferrer"><i className="fab fa-chrome"></i> Live Demo</a> : ""}
            </div>
            { post ? <a className={classes.Post} href={post} target="_blank" rel="noreferrer"><i className="fas fa-feather-alt"></i> Blog Post</a> : "" }
          </div>
        </div>
      </li>
    )
  })
  return (
    // <Layout>
    <>
      <Head title="Projects" />
      <div className={classes.Projects}>
        <div className={classes.Header}>
          <h1>Projects.</h1>
          <div>Some of the personal & work related projects that I've worked on.</div>
        </div>
        <ul className={classes.ProjectList}>{renderedList}</ul>
        <div className={classes.Button}><a href="https://blog.cyogian.dev/" target="_blank" rel="noreferrer noopener">Blog <i className="fas fa-external-link-alt"></i></a></div>
      </div>
      </>
    // </Layout>
  )
}

export default Projects
