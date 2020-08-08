import React from "react"
import PropTypes from "prop-types"

const Social = props => {
  return (
    <div className={props.className}>
      <a
        href="https://github.com/cyogian"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
      >
        <i className="fab fa-github"></i>
      </a>
      <a
        href="https://codepen.io/cyogian"
        target="_blank"
        rel="noopener noreferrer"
        title="Codepen"
      >
        <i className="fab fa-codepen"></i>
      </a>
      <a
        href="https://linkedin.com/in/cyogian"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
      >
        <i className="fab fa-linkedin"></i>
      </a>
      <a
        href="https://twitter.com/cyogian"
        target="_blank"
        rel="noopener noreferrer"
        title="Twitter"
      >
        <i className="fab fa-twitter"></i>
      </a>
      <a
        href="mailto: nathyogiamar@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        title="Email"
      >
        <i className="fas fa-at"></i>
      </a>
    </div>
  )
}

Social.propTypes = {
  className: PropTypes.string,
}

Social.defaultProps = {
  className: "",
}

export default Social
