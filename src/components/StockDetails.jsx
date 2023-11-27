import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./StockDetails.css"

const API = import.meta.env.VITE_API_URL;

function StockDetails(){
    const [stock, setStock] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${API}/stocks/${id}`)
        .then((response) => response.json())
        .then((resonseJSON) => {
            setStock(resonseJSON);
        })
        .catch((error) => console.log(error));
    }, [id, API]);

    const handleDelete = () => {
        deleteStock();
    };

    const deleteStock = () => {
        const httpOptions = { method: "Delete"};
        fetch(`${API}/stocks/${id}`, httpOptions)
        .then(() => navigate(`/stocks`))
        .catch((error) => console.log(error));
    };

    return (
        <div className="details">
            <img className="imageDetails" src={stock.image} height="200px"></img>
            <p>{stock.name}</p>
            <p>Price: ${stock.price}</p>
          <p>Quantity: {stock.quantity}</p>
          <p>Purchase Date: {stock.purchasedate}</p>
          <p>Option Type: {stock.optiontype}</p>
          <p>Expiry Date: {stock.expirydate}</p>
          <p className="buttons">
          <Link
  to={`/stocks/${stock.id}/edit`}
  className="edit-link btn btn-primary"
>
  ✏️ Edit
</Link>
        <button className="btn btn-danger" onClick={handleDelete}>
          🗑️ Delete
        </button>
        </p>
        </div>
    )
}

export default StockDetails