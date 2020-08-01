import React from "react"
import PropTypes from "prop-types"

import classes from "./sidebar.module.scss"

const Sidebar = props => <div className={classes.Sidebar}>Sidebar</div>

Sidebar.propTypes = {
  show: PropTypes.bool,
  onClickToggle: PropTypes.func.isRequired,
}
Sidebar.defaultProps = {
  show: false,
}
export default Sidebar
