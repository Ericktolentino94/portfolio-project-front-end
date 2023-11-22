import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API = import.meta.env.VITE_API_URL;

function StockEditForm({ stock }) {
  const navigate = useNavigate();

  const updateStock = () => {
    fetch(`${API}/stocks/${stock.id}`, {
      method: 'PUT',
      body: JSON.stringify(stock),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        alert(`${stock.name} updated`);
        navigate(`/stocks`);
      })
      .catch((error) => console.error('catch', error));
  };

  const handleTextChange = (event) => {
    setStock({ ...stock, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateStock();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Stock Name:</label>
          <input
            id="name"
            value={stock.name}
            type="text"
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
            value={stock.price}
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
            value={stock.quantity}
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
            value={stock.purchaseDate}
            onChange={handleTextChange}
            placeholder="Select purchase date"
            required
          />
        </div>
        <div>
          <label htmlFor="optionType">Option Type:</label>
          <select
            id="optionType"
            value={stock.optionType}
            onChange={handleTextChange}
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
            value={stock.expiryDate}
            onChange={handleTextChange}
            placeholder="Select expiry date"
          />
        </div>
        <button type="submit">Update Stock</button>
      </form>
    </div>
  );
}

export default StockEditForm;