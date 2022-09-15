import React from 'react';
import './App.css';
import Header from './Components/Header';
import MainCart from './Components/MainCart';


function App() {

  return (
    <>
      <div className="container-fluid">
        <div className="row">
        <Header />
        <MainCart />
      </div>
    </div>
    </>
  );
}

export default App;

