import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Navigation/Footer';
import SideNav from './components/Navigation/SideNav';
import TopNav from './components/Navigation/TopNav';

import Messenger from './pages/Messenger/Messenger';

function Router() {
  return (
    <BrowserRouter>
      <div>
        <TopNav />
        <div style={{ display: 'flex' }}>
          <SideNav />
          <Routes>
            <Route path="/" element={<Messenger />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Router;
