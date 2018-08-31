import React, {Component} from 'react';
import Header from "./Header";
import Routes from "./Routes";

class App extends Component {
    render() {
        return (
            <div style={{textAlign: "center"}}>
                <Header/>

                <Routes/>
            </div>
        );
    }
}

export default App;
