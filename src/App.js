import React from 'react';
import { Header } from './component/headers';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'boxicons';
import Paginas from "./component/paginas";
import { Productolista } from './component/product/producto';
import {DataProvider} from "./contex/Dataprovider";
function App() {
  return ( 
    <DataProvider>
    <div className="App">
      <Router>
        <Header />

        <Paginas />
        <Routes> 
          <Route path="/Productolista" element={<Productolista />} />
        </Routes>
      </Router>
    </div>
    </DataProvider>
  );
}

export default App;
