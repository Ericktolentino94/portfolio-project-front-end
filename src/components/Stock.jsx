import React from "react"
import { Link } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

const Stock = ({ stock, index }) => {
    
    const handleDelete = () => {
        const httpOptions = {method: `DELETE`};

        fetch(`${API}/stocks/${index}`, httpOptions)
        .then((res) => {
            console.log(res);
            alert('The Trade was deleted.');

            window.location.reload();
        });
    };

    return (
        <div>
            <Link to={`/stocks/${index}`} className ="stocks">
                <h2>{stock.name}</h2>
            </Link>
        </div>
    )

};

export default Stock;