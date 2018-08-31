import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomePageContainer from "./pages/home-page/HomePageContainer";

export default () => {
    return (
        <Router>
            <div>
                <Route exact path="/" component={HomePageContainer}/>
                <Route path="/about" component={() => <div>About Page</div>}/>
            </div>
        </Router>
    );
}