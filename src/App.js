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
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle` 
  ${reset}
  
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    input, textarea { 
      -moz-user-select: auto;
      -webkit-user-select: auto;
      -ms-user-select: auto;
      user-select: auto;
    }
    input:focus {
      outline: none;
    }

    button {
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
    }
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/productdetail/:id" element={<ProductDetails />} />

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
