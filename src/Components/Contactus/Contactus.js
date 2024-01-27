import React from "react";
import "./Contactus.css";
import { useState } from "react";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "number-guests",
    date: "",
    time: "time",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can add further logic here, such as sending the form data to a server.
  };
  return (
    <div className="contact">
      <div className="inner-contact">
        <div className="contact-description">
          <h3 className="h3">CONTACT US</h3>
          <h4 className="h4">
            Here You Can Make A Reservation Or Just walkin to our cafe
          </h4>
          <span>
            Donec pretium est orci, non vulputate arcu hendrerit a. Fusce a
            eleifend riqsie, namei sollicitudin urna diam, sed commodo purus
            porta ut.
          </span>
          <div className="inner-description">
            <div className="phone">
              <i className="fa fa-phone phone-logo" />
              <h5 className="chef-name1" id="p1">
                Phone Numbers
              </h5>
              <p>
                9664488033
                <br /> 080-090-0880
              </p>
            </div>
            <div className="phone">
              <i className="fa fa-envelope phone-logo" />
              <h5 className="chef-name1" id="p1">
                Emails
              </h5>
              <p>
                anilpatwa9664@gmail.com
                <br /> info@company.com
              </p>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit} className="form">
            <div className="f4">Table Reservation</div>
            <div className="f1">
              <input
                type="text"
                placeholder="Your Name*"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="f1">
              <input
                type="text"
                placeholder="Your Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="f1">
              <input
                type="text"
                placeholder="Phone Number*"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="f1">
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
              >
                <option value="number-guests">Number Of Guests</option>
                <option value="number-guests">Number Of Guests</option>
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
              </select>
            </div>

            <div className="f1">
              <input
                type="date"
                placeholder="dd/mm/yyyy"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="f1">
              <select name="time" value={formData.time} onChange={handleChange}>
                <option value="time">Time</option>
                <option value="08:00 PM">08:00 PM</option>
                <option value="09:00 PM">12:00 PM</option>
                <option value="10:00 PM">03:00 PM</option>
                <option value="11:00 PM">08:00 PM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="07:00 PM">03:00 PM</option>
              </select>
            </div>
            <div className="f2">
              <input
                type="text"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div className="f3">
              <input
                type="submit"
                value="Make A Reservation"
                className="f31"
                style={{ color: "white", backgroundColor: "#fb5849" }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
