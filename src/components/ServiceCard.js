import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ name, description }) => {
  return (
    <div className="card">
      <div className="image">
        <img
          alt="service"
          src="https://www.delfield.com/getattachment/5ab7c000-f6bc-4602-a805-b48a78924ecd/image.jpg.aspx?sitename=Delfield"
        />
      </div>
      <div className="content">
        <Link className="header" to="/checkout">
          {name}
        </Link>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default ServiceCard;
