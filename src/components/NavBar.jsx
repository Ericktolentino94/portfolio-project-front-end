import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div>
            <nav className="Nav">
                <h1>
                    <Link to="/">Trimphant Trading : Equity Commander</Link>
                </h1>
                <h1>
                    <Link to="/stocks">Stocks</Link>
                </h1>
                <button>
                    <Link to="/stocks/new">New Trade</Link>
                </button>
            </nav>
        </div>
    );
}