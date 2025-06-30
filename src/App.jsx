import React from 'react';
import Home from './pages/Home';
import About from './pages/about';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Skills from './pages/Skills';
import Portfoloi from './pages/portfoloi';
import Conatct from './pages/conatct';
import Sidebar from './component/navbar';


const App = () => {
  return (
    
<>
<div>
        <Sidebar />
<Routes>
  
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/skills" element={<Skills />} />
  <Route path="/portfolio" element={<Portfoloi />} />
  <Route path="/contact" element={<Conatct />} />
  
</Routes>

</div>
</>    
  );
};

export default App;