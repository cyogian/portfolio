import React from "react"
import Link from 'gatsby-plugin-transition-link/AniLink'

import classes from "./styles/notFound.module.scss"

const NotFound = () => {
  return (
      <div className={classes.NotFound}>
        <h1>404: Looks like the page you are looking for does not exist.<br/>What A Drag!</h1>
        <img src="/404.jpg" alt="Shikamaru Nara"/>
        <Link to="/" paintDrip duration={0.5}>Return to Homepage?</Link>
      </div>
  )
}

export default NotFound
