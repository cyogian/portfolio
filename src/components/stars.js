import React from "react"

import classes from "./stars.module.scss"

const Stars = () => (
  <div className={classes.Backdrop}>
    <div className={classes.Stars}></div>
    <div className={classes.Twinkling}></div>
    <div className={classes.Clouds}></div>
  </div>
)

export default Stars
