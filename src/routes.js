import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthPage from "./pages/AuthPage/AuthPage";
import MainPage from "./pages/MainPage/MainPage";
import Profile from "./components/Profile/Profile";
import ProductPage from "./pages/ProductPage/ProductPage";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        {/*
        <Route path="/user/:id">
          <UserPage />
        </Route>*/}
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/auth" exact>
          <AuthPage />
				</Route>
				<Route path="/profile" exact>
              <Profile />
          </Route>
        <Route path="/" exact>
          <MainPage />
        </Route>
          <Route path="/profile" exact>
              <Profile />
          </Route>
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/product/:id" component={ProductPage} />
      <Route path="/auth" exact>
        <AuthPage />
			</Route>
			<Route path="/profile" exact>
              <Profile />
          </Route>
      <Route path="/" exact>
        <MainPage />
      </Route>
        <Route path="/profile" exact>
            <Profile />
        </Route>
      <Redirect to="/" />
    </Switch>
  );
};
