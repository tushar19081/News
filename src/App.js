import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import LoadingBar from "react-top-loading-bar";

function App() {

  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);

  let pagesize = "12";
  
    return (
      <div>
        <Router>        
          <Navbar />
          <LoadingBar
            height = {3}
            color="#FA2929"
            progress={progress}
          />
          <br />
          <Switch>
            <Route exact path="/">
              <News setProgress = {setProgress}
                apiKey = {apiKey}
                key="general"
                pgsize={pagesize}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <News setProgress = {setProgress}
                apiKey = {apiKey}
                key="business"
                pgsize={pagesize}
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News setProgress = {setProgress}
                apiKey = {apiKey}
                key="entertainment"
                pgsize={pagesize}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/general">
              <News setProgress = {setProgress}
                apiKey = {apiKey}
                key="general"
                pgsize={pagesize}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/health">
              <News setProgress = {setProgress}
                apiKey = {apiKey}
                key="health"
                pgsize={pagesize}
                country="in"
                category="health"
              />
            </Route>
            <Route exact path="/science">
              <News setProgress = {setProgress}
                apiKey = {apiKey}
                key="science"
                pgsize={pagesize}
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <News setProgress = {setProgress}
                apiKey = {apiKey}
                key="sports"
                pgsize={pagesize}
                country="in"
                category="sports"
              />
            </Route>
            <Route exact path="/technology">
              <News setProgress = {setProgress}
                apiKey = {apiKey}
                key="technology"
                pgsize={pagesize}
                country="in"
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
}

export default App;
