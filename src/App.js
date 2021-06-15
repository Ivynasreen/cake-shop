import React from 'react';
import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Dropdown from './Components/Dropdown';
import Footer from './Components/Content';
import Home from './pages/home';
import About from './pages/about';
import Menu from './pages/menu';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Navbar toggle = {toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Switch>
        <Route path = "/home">
          <Home />
        </Route>
        <Route path = "/about">
          <About />
        </Route>
        <Route path = "/menu">
          <Menu/>
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
