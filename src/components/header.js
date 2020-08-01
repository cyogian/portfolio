import React from "react"
import PropTypes from "prop-types"

import NavLinks from "./navlinks"

import classes from "./header.module.scss"

const Header = props => (
  <div className={classes.Header}>
    <NavLinks className={classes.NavBar} activeClassName={classes.Active} />
  </div>
)

Header.propTypes = {
  onClickToggle: PropTypes.func.isRequired,
}

export default Header
