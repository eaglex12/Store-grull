import { Typography, Box, styled } from '@mui/material'; 
import { Link } from 'react-router-dom';
import { navData } from '../../Constants/data';

import './Ptype.css';


const Productcategory = ({ to, imgSrc, alt, heading }) => (
    <Link to={to} className="Product-box">
      <img src={imgSrc} alt={alt} />
      <h3>{heading}</h3>
      <hr />
    </Link>
  );
  

const Ptype = () => {

    const chunkednav=[];


    for(let i=0;i<navData.length;i+=3)
    {
        chunkednav.push(navData.slice(i,i+3));
    }
    
    
    return (
        <div className='Ptype'>
            {chunkednav.map((row,index)=>(

                <div key={index} className='P_row'>

                    {row.map((item)=>(

                        <Productcategory

                        key={item.text}
                        to={`/${item.text.toLowerCase().replace(/\s/g, '')}`}
                        imgSrc={item.url}
                        heading={item.text}

                        
                        />
                    ))}

                </div>



            ))}




        </div>
       
    );
};

export default Ptype;
