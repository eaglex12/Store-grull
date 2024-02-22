import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from "./Banner";
import Ptype from "./Ptype";
import Navbar from "../Navbar/Navbar";
import { navData } from '../../Constants/data';
import Fashion from "../Products/Shoes/Fashion";

const Home = () => {

  return (
    <Router>
      <div className="Home">
        <Navbar />
        
          <div className="Home_Banner">
            {/* <Banner /> */}
          </div>
      
        <div className="Product_Routes">
          <Routes>
            <Route path="/" element={<Ptype category="Top Offers" />} />
            <Route path="/grocery" element={<Ptype category="Grocery" />} />
            <Route path="/mobile" element={<Ptype category="Mobile" />} />
            <Route path="/Fashion" element={<Fashion />} />
            <Route path="/electronics" element={<Ptype category="Electronics" />} />
            <Route path="/home" element={<Ptype category="Home" />} />
            <Route path="/appliances" element={<Ptype category="Appliances" />} />
            <Route path="/travel" element={<Ptype category="Travel" />} />
            <Route path="/toys-more" element={<Ptype category="Toys & More" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Home;
