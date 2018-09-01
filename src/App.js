import React, {Component} from "react";
import Header from "./Header";
import PropTypes from "prop-types";

export default class App extends Component {
    render() {
        return (
            <div style={{textAlign: "center"}}>
                <Header/>

                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.element,
};
