import React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"

const NotFound = () => {
  return (
    <Layout>
      <div style={{ padding: "1rem" }}>
        <h1>404: Oops, the page you are looking for does not exist!</h1>
        <Link to="/">Return to Homepage?</Link>
      </div>
    </Layout>
  )
}

export default NotFound
