import {useState, useEffect} from "react"
import Stock from "./Stock";
import "./Stocks.css"

const API = import.meta.env.VITE_API_URL;

function Stocks() {
    const[stocks, setStocks] = useState([]);
    useEffect(() => {
        fetch(`${API}/stocks`)
        .then(response => response.json())
        .then((responseJSON) => {
            console.log(responseJSON);
            setStocks(responseJSON.data.payload);
        })
        .catch((err) => {
            console.log(err)
        });
    }, []);
    
    return (
        <div>
            <div className="Stocks">
                {stocks.map((stock) => {
                    return <Stock key={stock.id} stock={stock} index={stock.id} />
                })}
            </div>
        </div>
    );
} 

export default Stocks;