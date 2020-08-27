import React from "react"
import PropTypes from "prop-types"

import NavLinks from "./navlinks"
import Social from "./social"

import classes from "./header.module.scss"
import { Link } from "gatsby"

const Header = props => {
  let { Toggle } = classes
  if (props.status) {
    Toggle = `${classes.Toggle} ${classes.Open}`
  }
  return (
    <div className={classes.Header}>
      <Link className={classes.Logo} to="/">
        <img src="/logo.svg" alt="Logo" />
        <span>cyogian</span>
      </Link>
      <div className={classes.Menu}>
        <div className={classes.LeftMenu}>
          <NavLinks
            className={classes.NavBar}
            activeClassName={classes.Active}
          />
        </div>
        <div className={classes.RightMenu}>
          <a className={classes.Resume} href="/" download tabIndex="0">
            {/* <img src="amarprofile.jpeg" alt="Profile Pic" /> */}
            <i className="fas fa-file-download"></i>
          </a>
          <div style={{ width: "2rem" }}>
            <div className={Toggle}>
              <i
                onClick={props.onClickToggle}
                role="button"
                tabIndex="0"
                aria-pressed="false"
                aria-expanded={props.status}
                onKeyDown={props.onClickToggle}
                className={props.status ? "fas fa-times" : "fas fa-bars"}
              ></i>
            </div>
          </div>
          <Social className={classes.Social} />
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  onClickToggle: PropTypes.func.isRequired,
  status: PropTypes.bool.isRequired,
}

export default Header
