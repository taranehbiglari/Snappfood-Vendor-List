import "./assets/styles/main.scss";
import VendorList from "./pages/VendorList";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vendor-list" element={<VendorList />} />
      </Routes>
    </div>
  );
}

export default App;
