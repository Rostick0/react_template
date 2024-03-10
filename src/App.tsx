import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './app/router';
import './app/styles/index.scss'

function App() {
  return (
    <BrowserRouter>
      <AppRouter></AppRouter>
    </BrowserRouter>
  );
}

export default App;
