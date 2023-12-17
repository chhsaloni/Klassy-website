import React from 'react'
import "./OurChef.css"

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
          <div className="chefs">
            <div className="chef-image">
              <div className="overlay" />
              <ul className="overlay-icons">
                <li className="social-icon">
                  <i className="fab fa-facebook-f" />
                </li>
                <li className=" social-icon">
                  <i className="fab fa-instagram" />
                </li>
                <li className="social-icon">
                  <i className="fab fa-twitter" />
                </li>
              </ul>
              <img
                src="https://templatemo.com/templates/templatemo_558_klassy_cafe/assets/images/chefs-01.jpg"
                alt
              />
            </div>
            <div className="chef-name">
              <h5 className="chef-name1">Randy Walker</h5>
              <span>Pastry Chef</span>
            </div>
          </div>
          <div className="chefs">
            <div className="chef-image">
              <div className="overlay" />
              <ul className="overlay-icons">
                <li className="social-icon">
                  <i className="fab fa-facebook-f" />
                </li>
                <li className=" social-icon">
                  <i className="fab fa-instagram" />
                </li>
                <li className="social-icon">
                  <i className="fab fa-twitter" />
                </li>
              </ul>
              <img
                src="https://templatemo.com/templates/templatemo_558_klassy_cafe/assets/images/chefs-02.jpg"
                alt
              />
            </div>
            <div className="chef-name">
              <h5 className="chef-name1">David Martin</h5>
              <span>Cookie Chef</span>
            </div>
          </div>
          <div className="chefs">
            <div className="chef-image">
              <div className="overlay" />
              <ul className="overlay-icons">
                <li className="social-icon">
                  <i className="fab fa-facebook-f" />
                </li>
                <li className=" social-icon">
                  <i className="fab fa-instagram" />
                </li>
                <li className="social-icon">
                  <i className="fab fa-twitter" />
                </li>
              </ul>
              <img
                src="https://templatemo.com/templates/templatemo_558_klassy_cafe/assets/images/chefs-03.jpg"
                alt
              />
            </div>
            <div className="chef-name">
              <h5 className="chef-name1">Peter Perkson</h5>
              <span>Pancake Chef</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurChef
