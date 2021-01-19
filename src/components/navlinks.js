import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const NavLinks = props => (
  <nav className={props.className}>
    <Link to="/" tabIndex="0" activeClassName={props.activeClassName}>
      Home
    </Link>
    <Link
      to="/technologies/"
      tabIndex="0"
      activeClassName={props.activeClassName}
    >
      Technologies
    </Link>
    <Link to="/projects/" tabIndex="0" activeClassName={props.activeClassName}>
      Projects
    </Link>
    <a href="https://blog.cyogian.dev/" target="_blank" rel="noreferrer noopener">Blog</a>  
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
