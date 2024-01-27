import React from 'react'
import "./OurChef.css"
import CardCompchef from './../CardCompchef';
import Data from "../../Utils/Data";

const OurChef = () => {
  return (
    <div className="chef">
      <div className="inner-chef">
        <h3 className="chef1" id="chef2">
          our Chef
        </h3>
        <h4 className="chef1">
          We offer the best
          <br />
          ingredients for you{" "}
        </h4>
        <div className="chef-content">
        
              {Data.slice(5,9).map((item, index) => (
              <CardCompchef
                key={index}
              
                imageUrl={item.imageUrl}
                chefname={item.chefname}
                cakes={item.cakes}
                />
            ))}
            </div>
          </div>
        </div>

      
  );
}

export default OurChef
