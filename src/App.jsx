import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { AuthLayout } from './layouts/AuthLayout';
import { Dashboard } from './pages/Dashboard';
import { Home } from './pages/Home';

function App() {

  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />

        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />

        </Route>
      </Routes>
    </>
  );
}

export default App
