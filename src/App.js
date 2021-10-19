import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {

  apiKey = process.env.REACT_APP_NEWS_API;

  state = {
    progress : 0
  }

  setProgress = (progress)=>{
      this.setState({progress: progress});
  }

  pagesize = "12";
  render() {
    return (
      <div>
        <Router>        
          <Navbar />
          <LoadingBar
            height = {3}
            color="#FA2929"
            progress={this.state.progress}
          />
          <br />
          <Switch>
            <Route exact path="/">
              <News setProgress = {this.setProgress}
                apiKey = {this.apiKey}
                key="general"
                pgsize={this.pagesize}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <News setProgress = {this.setProgress}
                apiKey = {this.apiKey}
                key="business"
                pgsize={this.pagesize}
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News setProgress = {this.setProgress}
                apiKey = {this.apiKey}
                key="entertainment"
                pgsize={this.pagesize}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/general">
              <News setProgress = {this.setProgress}
                apiKey = {this.apiKey}
                key="general"
                pgsize={this.pagesize}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/health">
              <News setProgress = {this.setProgress}
                apiKey = {this.apiKey}
                key="health"
                pgsize={this.pagesize}
                country="in"
                category="health"
              />
            </Route>
            <Route exact path="/science">
              <News setProgress = {this.setProgress}
                apiKey = {this.apiKey}
                key="science"
                pgsize={this.pagesize}
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <News setProgress = {this.setProgress}
                apiKey = {this.apiKey}
                key="sports"
                pgsize={this.pagesize}
                country="in"
                category="sports"
              />
            </Route>
            <Route exact path="/technology">
              <News setProgress = {this.setProgress}
                apiKey = {this.apiKey}
                key="technology"
                pgsize={this.pagesize}
                country="in"
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
