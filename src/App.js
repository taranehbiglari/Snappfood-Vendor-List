import './assets/styles/main.scss';
import VendorList from "./pages/VendorList";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div><Routes>
    <Route path="/vendor-list" element={<VendorList />} />
    <Route path="/home" element={<Home />} />
  </Routes></div>
  );
}

export default App;
