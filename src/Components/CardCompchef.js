import React from 'react'

const CardCompchef = ({id,imageUrl,chefname,cakes}) => {
  return (
   




<div className="chefs">
    <div className="chef-image">
      <div className="overlay" />
      <ul className="overlay-icons">
        <li className="social-icon">
          <i className="fab fa-facebook-f" /></li>
        <li className=" social-icon">
          <i className="fab fa-instagram" /></li>
        <li className="social-icon">
          <i className="fab fa-twitter" /></li>
      </ul>
      <img src={imageUrl} alt />
    </div>
    <div className="chef-name">
      <h5 className="chef-name1">{chefname}</h5>
      <span>{cakes}</span>
    </div>
  </div>



  )
}

export default CardCompchef
