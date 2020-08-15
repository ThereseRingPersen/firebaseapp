import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "pages/HomePage";
import ServicesPage from "pages/ServicesPage";
import FaqPage from "pages/FaqPage";
import ProfilePage from "pages/ProfilePage";
import Sidebar from "components/Sidebar";
import Navbar from "components/Navbar";
import RegisterPage from "pages/RegisterPage";
import LoginPage from "pages/LoginPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Navbar id={"navbar-clone"} />
      <Sidebar />
      <Switch>
        <Route path="/services">
          <ServicesPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
        <Route path="/faq">
          <FaqPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
