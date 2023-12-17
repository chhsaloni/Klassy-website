import React from 'react'

const CardComponents = ({id ,price,dishname,description,imageUrl}) => {
  return (
    <div className="innercard" id={id}>
      <div className="price">{price}</div>
      <img src={imageUrl}/>
      <div className="info">
        <h5>{dishname}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default CardComponents
