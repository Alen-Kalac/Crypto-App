import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<AppContextProvider>
<React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</React.StrictMode>
</AppContextProvider>
);

