import React, { Dispatch, useState, SetStateAction } from "react";
import Nav from "./Nav";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import GiftPage from "./GiftPage";
import RewardsPage from "./RewardsPage";
import {BrowserRouter, Route, Switch, Link, Redirect} from "react-router-dom";
import ConfirmationDialog from "./ConfirmationDialog";


interface Props {}

const App: React.FC<Props> = (props) => {


    return(
        <div className="font-sans">
          
          <BrowserRouter>
            <Nav />
            <Header />
            <Switch>
              <Redirect from="/" to="/rewards" exact />
              <Route path="/rewards">
                <RewardsPage />
              </Route>
              <Route path="/gift">
                <GiftPage />
              </Route>
            </Switch>
            
          </BrowserRouter>
        </div>
    );
};

App.defaultProps = {};

export default App;