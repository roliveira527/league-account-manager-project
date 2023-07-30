import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <AnimatedRoutes/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

{/*
return (
  <div className="wrapper">
    <h1>Application</h1>
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/preferences">
          <Preferences />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
); */}