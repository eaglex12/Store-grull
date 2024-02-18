import React from "react";
import './Home.css';
import Banner from "./Banner";
import Ptype from "./Ptype";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { navData } from '../../Constants/data';






const Home=()=>{


    return(

        <Router>


            <div className="Home">

                                        
            <div className="Home_Banner">
            <Banner/>
            </div>

            <div className="Product_Routes">

            <Routes>
            {navData.map((item) => (
              <Route
                key={item.text}
                path={`/${item.text.toLowerCase().replace(/\s/g, '')}`}
                element={<Ptype />}
              />
            ))}
          </Routes>

            </div>

    <Ptype/>





</div>
        </Router>





                   
        

        


    );
}

export default Home;