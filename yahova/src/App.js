import { Router, Route } from "react-router-dom";
import "./App.scss";
import Routes from "./routes";
import Home from "./components/pages/home";
import { Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { useEffect } from "react";
import Main from "./components/main";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const browserHistory = createBrowserHistory();
  useEffect(() => {
    document.title = "Yahova Traders";
    AOS.init({
      // Global settings:
      debounceDelay: 3, // the delay on debounce used while resizing window (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      once: false, // whether animation should happen only once - while scrolling down
      mirror: true,
    });

    AOS.refresh();
  }, []);
  return (
    <Router history={browserHistory}>
      <Switch>
        <Main>
          <Route exact path="/" component={Home} />

          <Routes />
        </Main>
      </Switch>
    </Router>
  );
}

export default App;
