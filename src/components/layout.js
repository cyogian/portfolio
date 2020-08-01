import React, { Component } from "react"

import Header from "./header"
import Footer from "./footer"
import Sidebar from "./sidebar"

import classes from "./layout.module.scss"

class Layout extends Component {
  state = {
    showSidebar: false,
  }
  onSidebarToggle = () =>
    this.setState({
      showSidebar: !this.state.showSidebar,
    })
  render() {
    return (
      <div className={classes.Layout}>
        <Header onClickToggle={this.onSidebarToggle} />
        <Sidebar
          show={this.state.showSidebar}
          onClickToggle={this.onSidebarToggle}
        />
        <div className={classes.Main}>{this.props.children}</div>
        <Footer />
      </div>
    )
  }
}

export default Layout
