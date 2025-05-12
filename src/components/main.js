import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import {
  indexPage,
  aboutPage,
  sportPage,
  linkPage,
  excoPage,
  honMemPage,
  faqPage,
  docPage,
  shopDiscountPage,
  welfareProductPage,
  publicationPage,
  societyProductPage,
  pastActivityPage,
  currentActivitiesPage,
  activityPage,
  notFoundPage,
} from "./pages";
import Header from "./header";

import "./main.css";

function Main() {
  return (
    <div className="main">
      <Header />
      <Switch>
        <Route exact path="/" component={indexPage} />
        <Route exact path="/home/" render={() => <Redirect to="/" />} />
        <Route exact path="/activity/" component={currentActivitiesPage} />
        <Route exact path="/activity/past" component={pastActivityPage} />
        <Route exact path="/activity/:id" component={activityPage} />
        <Route exact path="/about/exco/" component={excoPage} />
        <Route exact path="/about/document/" component={docPage} />
        <Route exact path="/about/honorary-member/" component={honMemPage} />
        <Route exact path="/about/faq/" component={faqPage} />
        <Route exact path="/about/" component={aboutPage} />
        <Route exact path="/sports/" component={sportPage} />
        <Route exact path="/welfare/" component={societyProductPage} />
        <Route
          exact
          path="/welfare/welfare-product/"
          component={welfareProductPage}
        />
        <Route
          exact
          path="/welfare/publications/"
          component={publicationPage}
        />
        <Route exact path="/welfare/shops/" component={shopDiscountPage} />
        <Route exact path="/link/" component={linkPage} />
        <Route exact path="*" component={notFoundPage} />
      </Switch>
    </div>
  );
}

export default Main;
