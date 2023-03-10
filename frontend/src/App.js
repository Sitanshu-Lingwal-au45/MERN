import "./App.css"
import Header from "./component/layout/Header/Header.js"
import {BrowserRouter as Router, Route} from "react-router-dom";
import webFont from "webfontloader"
import React from "react";
import Footer from "./component/layout/Footer/Footer.js"
import Home from "./component/Home/Home.js"

function App() {
  React.useEffect(()=>{
    webFont.load({
      google:{
        families: ["Roboto","Droid Sans","Chilanka"]
      }
    })
  },[]) 
  
  return (
    <div>
    <Router>
    <Header/>
          <Route exact path="/" component={Home}/>
      
    <Footer/>
    </Router>
    </div>
);
}

export default App;
