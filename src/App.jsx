import React from 'react';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import Body from './components/body/body';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </>
  );
}

export default App;