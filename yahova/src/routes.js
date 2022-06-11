import React, { lazy, Suspense } from "react";
// import { Switch } from "react-router-dom";
import { Route, withRouter, Switch } from "react-router-dom";
// import { withRouter } from "react-router-dom";

import { compose } from "recompact";
import Loader from "./loader";

const Home = lazy(() => import("./components/home"));
const AboutUs = lazy(() => import("./components/ourCompany/aboutUs"));
const Leadership = lazy(() => import("./components/ourCompany/leadership"));
const CompanyProfile = lazy(() =>
  import("./components/ourCompany/companyProfile")
);
const Fishing = lazy(() => import("./components/ourBusiness/fishing"));
const Exports = lazy(() => import("./components/ourBusiness/exports"));
const SuperMarket = lazy(() => import("./components/ourBusiness/superMarket"));
const ContactUs = lazy(() => import("./components/contactUs/contact-us"));
// const ContactContent = lazy(() => import("./components/contactUs/content"));
const Routes = () => (
  <Suspense fallback={<Loader />}>
    <Switch>
      {/* <Route exact path="/" component={Home} /> */}
      <Route exact path="/our-company/about-us" component={AboutUs} />
      <Route exact path="/our-company/leadership" component={Leadership} />
      <Route
        exact
        path="/our-company/company-profile"
        component={CompanyProfile}
      />
      <Route exact path="/our-business/fishing" component={Fishing} />
      <Route exact path="/our-business/exports" component={Exports} />
      <Route exact path="/our-business/super-market" component={SuperMarket} />
      <Route exact path="/contact-us" component={ContactUs} />
      {/* <Route exact path="/contact-us" component={ContactContent} /> */}

      {/* <RoutePath /> */}
    </Switch>
  </Suspense>
);
export default compose(withRouter)(Routes);
