import './App.css';
import Header from "./component/layout/Header.js"
import {BrowserRouter as Router} from "react-router-dom"
import webfont from "webfontloader"
import React from 'react';

React.useEffect(())
function App() {
  return ( 
        <Router>
         <Header />
        </Router>
     );
}

export default App;
