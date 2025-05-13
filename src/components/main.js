import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

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
      <Routes>
        <Route exact path="/" Component={indexPage} />
        <Route exact path="/home/" render={() => <Navigate to="/" />} />
        <Route exact path="/activity/" Component={currentActivitiesPage} />
        <Route exact path="/activity/past" Component={pastActivityPage} />
        <Route exact path="/activity/:id" Component={activityPage} />
        <Route exact path="/about/exco/" Component={excoPage} />
        <Route exact path="/about/document/" Component={docPage} />
        <Route exact path="/about/honorary-member/" Component={honMemPage} />
        <Route exact path="/about/faq/" Component={faqPage} />
        <Route exact path="/about/" Component={aboutPage} />
        <Route exact path="/sports/" Component={sportPage} />
        <Route exact path="/welfare/" Component={societyProductPage} />
        <Route
          exact
          path="/welfare/welfare-product/"
          Component={welfareProductPage}
        />
        <Route
          exact
          path="/welfare/publications/"
          Component={publicationPage}
        />
        <Route exact path="/welfare/shops/" Component={shopDiscountPage} />
        <Route exact path="/link/" Component={linkPage} />
        <Route exact path="*" Component={notFoundPage} />
      </Routes>
    </div>
  );
}

export default Main;
