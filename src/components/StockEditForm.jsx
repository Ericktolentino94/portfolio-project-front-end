import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import "./StockEditForm.css"

const API = import.meta.env.VITE_API_URL;

function StockEditForm() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [updatedStock, setUpdatedStock] = useState({
    name: "",
    price: 0,
    quantity: 0,
    purchaseDate: "",
    optionType: "",
    expiryDate: "",
    image: '',
  });

  const handleTextChange = (event) => {
    const { id, value } = event.target;
    setUpdatedStock({ ...updatedStock, [id]: value });
  };

  const updateStock = () => {
    fetch(`${API}/stocks/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedStock),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(() => {
        alert(`${updatedStock.name} updated`);
        navigate('/stocks');
      })
      .catch((error) => console.error('catch', error));
  };

  useEffect(() => {
    fetch(`${API}/stocks/${id}`)
      .then((response) => response.json())
      .then((responseJSON) => {
        setUpdatedStock(responseJSON);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateStock();
  };

  return (
    <div className="stockEditForm">
      <form className="editForm" onSubmit={handleSubmit}>
        <h2>Edit Stock</h2>
        {updatedStock.name ? (
          <>
            <div>
              <label htmlFor="name">Stock Name:</label>
              <input
                id="name"
                type="text"
                value={updatedStock.name}
                onChange={handleTextChange}
                placeholder="Enter stock name"
                required
              />
            </div>

            <div>
              <label htmlFor="price">Price:</label>
              <input
                id="price"
                type="number"
                value={updatedStock.price}
                onChange={handleTextChange}
                placeholder="Enter stock price"
                required
              />
            </div>

            <div>
              <label htmlFor="quantity">Quantity:</label>
              <input
                id="quantity"
                type="number"
                value={updatedStock.quantity}
                onChange={handleTextChange}
                placeholder="Enter stock quantity"
                required
              />
            </div>

            <div>
              <label htmlFor="purchaseDate">Purchase Date:</label>
              <input
                id="purchaseDate"
                type="date"
                value={updatedStock.purchaseDate}
                onChange={handleTextChange}
                placeholder="Select purchase date"
                required
              />
            </div>

            <div>
              <label htmlFor="optionType">Option Type:</label>
              <select
                id="optionType"
                value={updatedStock.optionType}
                onChange={handleTextChange}
                required
              >
                <option value="">Select option type</option>
                <option value="Call">Call</option>
                <option value="Put">Put</option>
              </select>
            </div>

            <div>
              <label htmlFor="expiryDate">Expiry Date:</label>
              <input
                id="expiryDate"
                type="date"
                value={updatedStock.expiryDate}
                onChange={handleTextChange}
                placeholder="Select expiry date"
              />
            </div>

            <div>
              <label htmlFor="image">Image URL:</label>
              <input
                id="image"
                type="text"
                value={updatedStock.image}
                onChange={handleTextChange}
                placeholder="Enter image URL"
              />
            </div>

            <input type="submit" />
            <Link to="/stocks">
              <button>Return to Stocks Page</button>
            </Link>
          </>
        ) : (
          <p>Loading data...</p>
        )}
      </form>
    </div>
  );
}

export default StockEditForm;
