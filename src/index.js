// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Assuming App.jsx is in the same directory
import './index.css'; // Your global CSS styles
import { BrowserRouter } from 'react-router-dom';
import StoreContextProvider from './components/context/StoreContext.jsx'; // Adjust the path if necessary

// Create a root element and render the app
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>
);
