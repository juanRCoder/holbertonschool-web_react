import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notification from "../Notifications/Notifications";
import './App.css';

function App() {
  return (
    <>
      <Notification />
      <Header />
      <Login />
      <Footer />
    </>
  );
}

export default App;
