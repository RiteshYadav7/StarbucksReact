import React, { Dispatch, useState, SetStateAction } from "react";
import Nav from "./Nav";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import GiftPage from "./GiftPage";
import RewardsPage from "./RewardsPage";
import {BrowserRouter, Route, Switch} from "react-router-dom";


interface Props {}

const App: React.FC<Props> = (props) => {

    return(
        <div className="font-sans">
          <BrowserRouter>
            <Nav />
            <Header />
            <Switch>
              <Route path="/rewards">
                <RewardsPage />
              </Route>
              <Route path="/gift">
                <GiftPage />
              </Route>
            </Switch>

            <HeroSection />
            
            <Footer />
          </BrowserRouter>
        </div>
    );
};

App.defaultProps = {};

export default React.memo(App);