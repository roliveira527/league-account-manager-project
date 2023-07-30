import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import Dashboard from './Bashboard/Dashboard';
import Login from './Login/Login';

import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Dashboard/>}/>
            <Route exact path="/login" element={<Login/>}/>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes