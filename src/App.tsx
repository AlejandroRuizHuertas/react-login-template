import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './components/Login';
import { PrivateRoute } from './routers/PrivateRoute';
import { AppRouter } from './routers/AppRouter';
import { PublicRoute } from './routers/PublicRoute';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={
          <PrivateRoute>
            <AppRouter />
          </PrivateRoute>
        } />
        <Route path="/" element={
        <PublicRoute>
          <Login />
        </PublicRoute>} />
      </Routes>

    </Router>
  );
}

