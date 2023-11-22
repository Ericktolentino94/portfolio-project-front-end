import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Index from "./pages/Index";
import FourOFour from "./pages/FourOFour";
import Show from "./pages/Show";
import Edit from "./pages/Edit";
import New from "./pages/New";

import NavBar from "./components/NavBar";



function App() {
 

  return (
    <div>
      <Router>
        <NavBar />
        <main className="Main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stocks" element={<Index />} />
            <Route path="/stocks/:id" element={<Show />} />
            <Route path="*" element={<FourOFour />}/>
            <Route path="/stocks/new" element={<New />} />
            <Route path="/stocks/:id/edit" element={<Edit/>} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
