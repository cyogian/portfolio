import React from "react"

import classes from "./footer.module.scss"

const Footer = () => (
  <div className={classes.Footer}>
    Copyright © {new Date().getFullYear()} Amar Nath Yogi. All Rights Reserved
  </div>
)

export default Footer
