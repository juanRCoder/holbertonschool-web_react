import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notification from "../Notifications/Notifications";
import PropTypes from "prop-types";
import CourseList from "../CourseList/CourseList";
import "./App.css";

function App({ isLoggedIn }) {
  return (
    <>
      <Notification displayDrawer />
      <Header />
      {isLoggedIn ? <CourseList /> : <Login />}
      <Footer />
    </>
  );
}

App.defaultProps = {
  isLoggedIn: false,
};

export default App;
