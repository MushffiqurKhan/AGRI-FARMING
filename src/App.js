import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Crops from './Component/Crop/Crops';
import About from './Component/About/About';
import Mainslider from './Component/Main slider/Mainslider';
import Fresh from './Component/Fresh/Fresh';
import Cards from './Component/Cards/Cards';
import Vedio from './Component/Vedio/Vedio';
import Ourb from './Component/Our benefits/Ourb';
import Footer from './Component/Footer/Footer';
import Rabi from './Component/Page/Rabi';
import Kharif from './Component/Page/Kharif';
import Zaid from './Component/Page/Zaid';
import Machine from './Component/Machines/Machines';
import Plantation from './Component/Page/Plantation';
import Cultivation from './Component/Page/Cultivation';
import Aboutin from './Component/About/Aboutin';
import Horiculture from './Component/Page/Horiculture';
import Field from './Component/Page/Field';
import AlluvialClay from './Component/Page/Alluvialclay';
import BlackSoil from './Component/Page/BlackSoil';
import RedYellowSoil from './Component/Page/Redyellowsoil';

// ✅ You were missing this function wrapper
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Mainslider />
                <About />
                <Cards />
                <Fresh />
                <Vedio />
              </>
            }
          />
          <Route path="/Crops" element={<Crops />} />
          <Route path="/About" element={<About />} />
          <Route path="/Fresh" element={<Fresh />} />
          <Route path="/Cards" element={<Cards />} />
          <Route path="/Vedio" element={<Vedio />} />
          <Route path="/Ourb" element={<Ourb />} />
          <Route path="/Rabi" element={<Rabi />} />
          <Route path="/Kharif" element={<Kharif />} />
          <Route path="/Zaid" element={<Zaid />} />
          <Route path="/Machines" element={<Machine />} />
          <Route path="/Plantation" element={<Plantation />} />
          <Route path="/Horiculture" element={<Horiculture />} />
          <Route path="/Field" element={<Field />} />
          <Route path="/Alluvialclay" element={<AlluvialClay />} />
          <Route path="/Cultivation" element={<Cultivation />} />
          <Route path="/BlackSoil" element={<BlackSoil />} />
          <Route path="/Redyellowsoil" element={<RedYellowSoil />} />
          <Route path="/Aboutin" element={<Aboutin />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
