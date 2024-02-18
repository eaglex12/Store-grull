import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from "@mui/material";
import './Navbar.css';

const Navbar =()=>{


    return(

        <div className="Navbar">

            <span className="Navbar_logo">Grull Store</span>




            <div className="Navbar_search">
                <input className="Navbar_search_input" type="text"/>
                <SearchIcon className="Navbar_search_icon"/>
            </div>
            <div className="Navbar_icon">

            <div className="Navbar_icons">
            <Button  style={{

                    color:'#cd9042'
                  }}>Login</Button>
          </div>
        

        
          <div className="Navbar_icons">
            <Button style={{

                 color:'#cd9042'
                }}>

                Return & Orders
            </Button>
          </div>
        
        

       

        
          <div style={{ display:'flex', alignItems:'center',color:'white'}}>
            <ShoppingCartIcon />
            <span style={{marginLeft:'10px', marginRight:'10px'}}>
              0
            </span>
          </div>


            </div>



        </div>


    );
}

export default Navbar;