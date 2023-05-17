import React from 'react';
import { Header } from './component/headers';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'boxicons';
import Paginas from "./component/paginas";
import { Productolista } from './component/product/producto';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        
        <Routes>
          <Route path="*" element={<Paginas />} />
          <Route path="/Productolista" element={<Productolista />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
