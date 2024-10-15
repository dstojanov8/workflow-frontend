import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="global-container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
