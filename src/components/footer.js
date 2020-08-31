import React from "react"

import classes from "./footer.module.scss"

const Footer = () => (
  <div className={classes.Footer}>
    <div className={classes.Copyright}>
      Copyright © {new Date().getFullYear()}{" "}
      <a
        href="https://linkedin.com/in/cyogian"
        target="__blank"
        rel="noreferer"
      >
        Amar Nath Yogi
      </a>
      . All Rights Reserved
    </div>
  </div>
)

export default Footer
