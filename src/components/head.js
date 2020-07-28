import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const Head = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  let title = data.site.siteMetadata.title
  if (props.title) {
    title = props.title + " | " + title
  }
  return <Helmet title={title} />
}

export default Head