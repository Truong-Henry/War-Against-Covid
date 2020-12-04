import React from "react";

const Card = ({ title, text }) => {
  return (
    <div className="card">
      <div className="card-title">{title}</div>
      <div className="card-text">{text}</div>
    </div>
  );
};

export default Card;
