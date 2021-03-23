import * as React from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import ContactInfo from "./features/contact-info/component";
import AddressBook from "./features/address-book/component";

export default () => (
  <div className="App">
    <h1>Address book</h1>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={AddressBook} />
        <Route exact path="/contact-info/:id" component={ContactInfo} />
      </Switch>
    </BrowserRouter>
  </div>
);
