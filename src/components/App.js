import { Route, Routes } from "react-router-dom";
import Layaout from "./Layaout";
import AboutUs from "./AboutUs";
import FormLogin from "./FormLogin";
import Home from "./Home";
import Products from "./Products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layaout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="products" element={<Products />} />
        <Route path="admin" element={<FormLogin />} />
      </Route>
    </Routes>
  );
}

export default App;
