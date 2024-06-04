import React from 'react';
import '../App.css';
import Header from '../containers/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../containers/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
