import React from "react"
import PropTypes from "prop-types"

import Social from "./social"
import NavLinks from "./navlinks"
import classes from "./sidebar.module.scss"

const Sidebar = props => {
  let { Sidebar } = classes
  if (props.show) {
    Sidebar = `${Sidebar} ${classes.Open}`
  }
  return (
    <div className={Sidebar}>
      <NavLinks className={classes.NavBar} activeClassName={classes.Active} />
      <Social className={classes.Social} />
    </div>
  )
}

Sidebar.propTypes = {
  show: PropTypes.bool,
  onClickToggle: PropTypes.func.isRequired,
}
Sidebar.defaultProps = {
  show: false,
}
export default Sidebar
