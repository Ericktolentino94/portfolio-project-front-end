import React from "react";
import { Link } from "react-router-dom";
import "./Stock.css";

const Stock = ({ stock, index }) => {
  return (
    <div className="stock-container card">
      <Link to={`/stocks/${stock.id}`} className="stock-link card-title">
        <img src={stock.image} alt={stock.name} />
      </Link>
    </div>
  );
};

export default Stock;
