import { Router, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/navbar/navbar";
import Routes from "./routes";

import Home from "./components/home";
import { Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { useEffect } from "react";
import Main from "./components/main";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function App() {
  const browserHistory = createBrowserHistory();
  useEffect(() => {
    document.title = "Yahova Traders";
  }, []);
  return (
    <Router history={browserHistory}>
      {/* <Navbar /> */}
      {/* <OurBusiness /> */}
      {/* <OurCompany /> */}
      {/* <Banner /> */}

      <Switch>
        <Main>
          <Route exact path="/" component={Home} />

          <Routes />
        </Main>
      </Switch>
    </Router>
  );
}

/* <Route path="/our-company/about-us" element={AboutUs} />
        <Route path="/our-company/leadership" element={<Leadership />} />
        <Route
          path="/our-company/company-profile"
          element={<CompanyProfile />}
        />
        <Route path="/our-business/fishing" element={<Fishing />} />
        <Route path="/our-business/exports" element={<Exports />} />
        <Route path="/our-business/super-market" element={<SuperMarket />} />
        <Route path="/contact-us" element={<ContactUs />} /> */

export default App;
