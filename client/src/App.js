import React from "react";
import { ThemeProvider } from "@material-ui/core";
import GlobalStyles from "./components/GlobalStyles";
import theme from "./theme";
import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import NotFoundPage from "./pages/404/404";

import { UserProvider } from "./context/user/UserContext";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <GlobalStyles />
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="*" component={NotFoundPage} />
        </Switch>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
