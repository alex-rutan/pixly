import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import ImageDetails from "./ImageDetails";
import AddImageForm from "./AddImageForm";
import EditImageForm from "./EditImageForm";

/** Site-wide routes.
 *
 * Visiting a non-existant route redirects to the homepage.
 */

function Routes({loading}) {

  return (
    <div className="Routes">
      <Switch>
        <Route exact path="/">
          <Home loading={loading} />
        </Route>

        <Route exact path="/add-image">
          <AddImageForm />
        </Route>

        <Route exact path="/:id">
          <ImageDetails />
        </Route>

        <Route exact path="/:id/edit">
          <EditImageForm />
        </Route>

        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default Routes;