// import React, { Component } from "react";
// import { v4 as uuidv4 } from "uuid";
// import ContactList from "./components/ContactList/ContactList";
// import Filter from "./components/Filter/Filter";
// import ContactForm from "./components/ContactForm/ContactForm";
import Container from "./components/Container/Container";
// import contactsOperations from "./redux/contacts/contactsOperations";
// import contactsSelectors from "./redux/contacts/contactsSelectors";
import { Switch, Route, Redirect } from "react-router-dom";
import routes from "./routes";
import AppBar from "./components/AppBar/AppBar";
import Loader from "./components/Loader/Loader";
import { useEffect, Suspense, lazy } from "react";
import { connect } from "react-redux";

import authOperations from "./redux/auth/authOperations";

import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

const HomePage = lazy(() =>
  import("./pageViews/HomePage" /* webpackChunkName: "homePage" */)
);

const RegisterPage = lazy(() =>
  import("./pageViews/RegisterPage" /* webpackChunkName: "registerPage" */)
);
const LoginPage = lazy(() =>
  import("./pageViews/LoginPage" /* webpackChunkName: "loginPage" */)
);
const ContactsPage = lazy(() =>
  import("./pageViews/ContactsPage" /* webpackChunkName: "contactsPage" */)
);

const App = ({ onGetCurrentUser }) => {
  useEffect(() => {
    onGetCurrentUser();
  }, []);

  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <PublicRoute
            path={routes.register}
            restricted
            component={RegisterPage}
            redirectTo={routes.contacts}
          />
          <PublicRoute
            path={routes.login}
            restricted
            component={LoginPage}
            redirectTo={routes.contacts}
          />
          <PrivateRoute
            path={routes.contacts}
            component={ContactsPage}
            redirectTo={routes.login}
          />
          <Redirect to={routes.home} />
        </Switch>
      </Suspense>
    </Container>
  );
};

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
