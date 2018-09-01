import React from "react";
import {HashRouter as Router, Route} from "react-router-dom";
import HomePageContainer from "./pages/home-page/HomePageContainer";
import App from "./App";

export default function Routes() {
    return (
        <Router>
            <App>
                <Route exact path="/" component={HomePageContainer}/>
                <Route path="/about" component={() => <div>About Page</div>}/>
            </App>
        </Router>
    );
}