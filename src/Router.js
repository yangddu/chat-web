import React from 'react';
import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Footer from './components/Navigation/Footer';
import SideNav from './components/Navigation/SideNav';
import TopNav from './components/Navigation/TopNav';
import Login from './pages/Login/Login';
import LoginForm from './pages/LoginForm/LoginForm';

import Messenger from './pages/Messenger/Messenger';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth/login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
