import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/static/nav";
import Footer from "./components/static/footer";
import Home from "./page/home";

function App() {
  return (
    <div className="App font-popins">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about">
            <h1>about</h1>
          </Route>
          <Route exact path="/service">
            <h1>service</h1>
          </Route>
          <Route exact path="/blog">
            <h1>blog</h1>
          </Route>
          <Route exact path="/contact">
            <h1>contact</h1>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
