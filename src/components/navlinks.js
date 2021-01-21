import React from "react"
import Link from 'gatsby-plugin-transition-link/AniLink'

import PropTypes from "prop-types"

const NavLinks = props => (
  <nav className={props.className}>
    <Link swipe left="entry" to="/" tabIndex="0" activeClassName={props.activeClassName} entryOffset={80}>
      Home
    </Link>
    <Link
      to="/technologies/"
      tabIndex="0"
      activeClassName={props.activeClassName}
      swipe left="entry"
      entryOffset={80}
    >
      Technologies
    </Link>
    <Link to="/projects/" tabIndex="0" activeClassName={props.activeClassName} swipe left="entry" entryOffset={80}>
      Projects
    </Link>
    <a href="https://blog.cyogian.dev/" target="_blank" rel="noreferrer noopener">Blog <i className="fas fa-external-link-alt"></i></a>  
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
