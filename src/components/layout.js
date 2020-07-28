import React, {Component} from "react"
import Header from "./header"
import Footer from "./footer"
class Layout extends Component {
    state = {
        showSidebar: false
    }
    onSidebarToggle = () => this.setState({
        showSidebar: !this.state.showSidebar
    })
    render() {
        return <div>
            <Header onClickToggle={this.onSidebarToggle}/>
            <div>
                {this.props.children}
            </div>
            <Footer/>
        </div>
    }
}

export default Layout