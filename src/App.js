import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import ServicesData from "./components/ServicesData/ServicesData";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/aboutus">
            <AboutUs />
          </Route>
          <Route path="/servicesData">
            <ServicesData />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
