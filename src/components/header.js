import React, { Component } from "react"
import PropTypes from "prop-types"
class Header extends Component {
    render() {
        return <div>Header</div>
    }
}

Header.propTypes = {
    onClickToggle: PropTypes.func
}
Header.defaultProps = {
    onClickToggle: () => ()
}
export default Header