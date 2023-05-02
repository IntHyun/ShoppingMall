import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Notfound from "./pages/NotFound/NotFound";
import PayMent from "./pages/Payment/Payment";
import SellerCenter from "./pages/SellerCenter/SellerCenter";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import ProductUpload from "./pages/ProductUpload/ProductUpload";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="productdetail/:id" element={<ProductDetails />} />

        <Route path="/cart" element={<ShoppingCart />} />

        <Route path="/payment" element={<PayMent />} />

        <Route path="/seller" element={<SellerCenter />} />

        <Route path="/upload" element={<ProductUpload />} />

        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
