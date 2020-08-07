import React from "react"

import classes from "./footer.module.scss"

const Footer = () => (
  <div className={classes.Footer}>
    Copyright © {new Date().getFullYear()}{" "}
    <a href="https://linkedin.com/in/cyogian" target="__blank" rel="noreferer">
      Amar Nath Yogi
    </a>
    . All Rights Reserved
  </div>
)

export default Footer
