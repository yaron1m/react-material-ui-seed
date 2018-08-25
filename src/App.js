import React, {Component} from 'react';
import './App.css';
import HomePageContainer from "./pages/home-page/HomePageContainer";

class App extends Component {
    render() {
        return (
            <div className="App">
                <HomePageContainer/>
            </div>
        );
    }
}

export default App;
