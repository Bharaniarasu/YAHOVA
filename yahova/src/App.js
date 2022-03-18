import { Router, Route } from "react-router-dom";
import "./App.css";
// import Banner from "./components/banner";
import Navbar from "./components/navbar/navbar";
import Routes from "./routes";
import ContactUs from "./components/pages/contactUs";
import OurBusiness from "./components/pages/ourBusiness";
import OurCompany from "./components/pages/ourCompany";
import AboutUs from "./components/ourCompany/aboutUs";
import Leadership from "./components/ourCompany/leadership";
import CompanyProfile from "./components/ourCompany/companyProfile";
import Fishing from "./components/ourBusiness/fishing";
import Exports from "./components/ourBusiness/exports";
import SuperMarket from "./components/ourBusiness/supermarket";
import Home from "./components/home";
import { Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
// import Navbar from './components/navbar';
// import NavMenu from "./components/navbar/navMenu";

function App() {
  const browserHistory = createBrowserHistory();
  return (
    <Router history={browserHistory}>
      {/* <Navbar /> */}
      {/* <OurBusiness /> */}
      {/* <OurCompany /> */}
      {/* <Banner /> */}

      <Switch>
        <Navbar>
          <Route exact path="/" component={Home} />
          {/* <Home /> */}

          <Routes />
        </Navbar>
        {/* <Home /> */}
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
