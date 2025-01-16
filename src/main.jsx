import React from 'react';
import { createRoot } from 'react-dom/client'; // Use 'createRoot' from 'react-dom/client'
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root')); // Create root using createRoot
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
