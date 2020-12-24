import React from "react";
import { HashRouter } from "react-router-dom";
import { useRoutes } from "./routes";
import { useAuth } from "./hooks/auth.hook";
import { AuthContext } from "./context/AuthContext";
import Header from "./components/Header/Header";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./App.css";

const App = () => {
  const { login, logout, token, userId, ready } = useAuth();
  const isAuthenticated = false; // !!token;
  const routes = useRoutes(isAuthenticated);

  if (!ready) {
    return <CircularProgress />;
  }

  return (
    <AuthContext.Provider
      value={{ login, logout, token, userId, isAuthenticated }}
    >
      <HashRouter>
        <div className="app-wrapper">
          <Header />
          <div className="app-wrapper-content">{routes}</div>
        </div>
      </HashRouter>
    </AuthContext.Provider>
  );
};

export default App;
