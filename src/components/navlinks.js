import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const NavLinks = props => (
  <nav className={props.className}>
    <Link to="/" tabIndex="2" activeClassName={props.activeClassName}>
      Home
    </Link>
    <Link
      to="/technologies/"
      tabIndex="3"
      activeClassName={props.activeClassName}
    >
      Technologies
    </Link>
    <Link to="/projects/" tabIndex="4" activeClassName={props.activeClassName}>
      Projects
    </Link>
    <Link
      to="/blog/"
      tabIndex="5"
      activeClassName={props.activeClassName}
      partiallyActive
    >
      Blog
    </Link>
  </nav>
)

NavLinks.propTypes = {
  activeClassName: PropTypes.string,
  className: PropTypes.string,
}
NavLinks.defaultProps = {
  activeClassName: "",
  className: "",
}

export default NavLinks
