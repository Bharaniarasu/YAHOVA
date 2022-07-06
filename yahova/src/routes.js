import React, { lazy, Suspense } from "react";
import { Route, withRouter, Switch } from "react-router-dom";

import { compose } from "recompact";
import Loader from "./loader";

const AboutUs = lazy(() => import("./components/pages/ourCompany/aboutUs"));
const Leadership = lazy(() =>
  import("./components/pages/ourCompany/leadership")
);
const CompanyProfile = lazy(() =>
  import("./components/pages/ourCompany/companyProfile")
);
const Fishing = lazy(() => import("./components/pages/ourBusiness/fishing"));
const Exports = lazy(() => import("./components/pages/ourBusiness/exports"));
const SuperMarket = lazy(() =>
  import("./components/pages/ourBusiness/superMarket")
);
const ContactUs = lazy(() => import("./components/pages/contactUs"));
const Routes = () => (
  <Suspense fallback={<Loader />}>
    <Switch>
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
    </Switch>
  </Suspense>
);
export default compose(withRouter)(Routes);
