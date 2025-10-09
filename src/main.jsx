import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './App.css';

import { LabTestsProvider } from './Context/LabTestsContext';
import { CartProvider } from './Context/CartContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <LabTestsProvider>
        <App />
      </LabTestsProvider>
    </CartProvider>
  </React.StrictMode>
);
