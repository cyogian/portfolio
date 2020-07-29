import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const NavLinks = props => (
  <nav>
    <Link to="/home" activeClassName={props.activeClassName}>
      Home
    </Link>
    <Link to="/technologies" activeClassName={props.activeClassName}>
      Technologies
    </Link>
    <Link to="/projects" activeClassName={props.activeClassName}>
      Projects
    </Link>
    <Link to="/blog" activeClassName={props.activeClassName} partiallyActive>
      Blog
    </Link>
  </nav>
)

NavLinks.propTypes = {
  activeClassName: PropTypes.string,
}
NavLinks.defaultProps = {
  activeClassName: "",
}

export default NavLinks
