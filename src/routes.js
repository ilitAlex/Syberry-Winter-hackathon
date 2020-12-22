import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthPage from "./pages/AuthPage/AuthPage";
import MainPage from "./components/MainPage/MainPage";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        {/* <Route path="/product/:id" component={ProductPage} />
        <Route path="/user/:id">
          <UserPage />
        </Route>*/}
        <Route path="/auth" exact>
          <AuthPage />
        </Route>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/auth" exact>
        <AuthPage />
      </Route>
      <Route path="/" exact>
        <MainPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
