import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import React from 'react';
import MyNav from './Components/MyNav';
import Footer from "./Components/MyFooter";
import Main from "./Components/Main";
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <MyNav/>
       <Main/>
       <Footer/>
      </header>
    </div>
  );
}

export default App;

