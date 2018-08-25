import React, {Component} from 'react';
import HomePageContainer from "./pages/home-page/HomePageContainer";
import Header from "./Header";

class App extends Component {
    render() {
        return (
            <div style={{textAlign: "center"}}>
                <Header/>

                <HomePageContainer/>
            </div>
        );
    }
}

export default App;
