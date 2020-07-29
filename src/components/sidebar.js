import React from "react"
import PropTypes from "prop-types"

const Sidebar = props => <div>Sidebar</div>

Sidebar.propTypes = {
  show: PropTypes.bool,
  onClickToggle: PropTypes.func.isRequired,
}
Sidebar.defaultProps = {
  show: false,
}
export default Sidebar
