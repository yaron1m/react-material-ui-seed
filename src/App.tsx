import React, {Component} from "react";
import Header from "./header/Header";

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