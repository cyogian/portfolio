import React from "react"
import PropTypes from "prop-types"

import NavLinks from "./navlinks"
import Social from "./social"

import classes from "./header.module.scss"

const Header = props => (
  <div className={classes.Header}>
    <span className={classes.Logo}>Cyogian</span>
    <div className={classes.Menu}>
      <div className={classes.LeftMenu}>
        <NavLinks className={classes.NavBar} activeClassName={classes.Active} />
      </div>
      <div className={classes.RightMenu}>
        <a className={classes.Resume} href="/" download>
          <i className="fas fa-file-download"></i>
        </a>
        <div
          className={classes.Toggle}
          onClick={props.onClickToggle}
          role="button"
          tabIndex="-5"
          aria-pressed="false"
          aria-expanded={props.status}
          onKeyDown={props.onClickToggle}
        >
          <i className="fas fa-bars"></i>
        </div>

        <Social className={classes.Social} />
      </div>
    </div>
  </div>
)

Header.propTypes = {
  onClickToggle: PropTypes.func.isRequired,
  status: PropTypes.bool.isRequired,
}

export default Header
