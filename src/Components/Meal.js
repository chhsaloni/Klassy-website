import React from 'react'
import "./Meal.css"

const Meal = () => {
  return (
   <div className="offers">
  <div className="inner-offer">
    <div className="offer-heading">
      <h3 className="chef1" id="chef2">our Chef</h3>
      <h4 className="chef1">We offer the best 
        <br />ingredients for you </h4>
    </div>
    <ul className="meal">
      <li className="inner-meal" id="Breakfast"><img src="https://templatemo.com/templates/templatemo_558_klassy_cafe/assets/images/tab-icon-01.png" alt />Breakfast</li>
      <li className="inner-meal"><img src="https://templatemo.com/templates/templatemo_558_klassy_cafe/assets/images/tab-icon-01.png" alt />Lunch</li>
      <li className="inner-meal"><img src="https://templatemo.com/templates/templatemo_558_klassy_cafe/assets/images/tab-icon-03.png" alt />Dinner</li>
    </ul>
    <div className="offer-template">
      <div className="inner-template">
        <div className="template">
          <div>
            <img src="https://templatemo.com/templates/templatemo_558_klassy_cafe/assets/images/tab-item-01.png" alt /></div>
          <div className="template-description">
            <span className="template-name">Fresh Chicken Salad</span>
            <br />
            <span className="Tp">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, dignissimos. </span></div>
        </div>
        <div>
          <div className="price">
            $10.50
          </div>
        </div>
      </div>
      <div className="template" />
      <div className="template" />
    </div>
    <div className="inner-template">
      <div className="template" />
      <div className="template" />
      <div className="template" />
    </div>
  </div>
</div>

  )
}

export default Meal
