import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Stock.css"

const API = import.meta.env.VITE_API_URL;

const Stock = ({ stock, index }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    const httpOptions = { method: "DELETE" };

    fetch(`${API}/stocks/${stock.id}`, httpOptions)
      .then((res) => {
        console.log(res);
        alert(`${stock.name} deleted`);

        navigate("/stocks");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="stock-container card">

        <Link to={`/stocks/${stock.id}`} className="stock-link card-title">
          <img src={stock.image}></img>
          </Link>
          
        

    </div>
  );
};

export default Stock;