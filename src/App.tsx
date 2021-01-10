import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import LayoutDefault from './pages/layouts/default';


function App() {
  return (
    <BrowserRouter>
      <LayoutDefault />
    </BrowserRouter>
  );
}

export default App;
