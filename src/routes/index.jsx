import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "../pages/AddProduct/AddProduct";
import EditProduct from "../pages/EditProduct/EditProduct";
import FavoriteProduct from "../pages/FavoriteProducts/FavoriteProduct";
import Home from "../pages/home/Home";
import Test from "../pages/home/Test";

export const PageRoute = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/edit/:id" element={<EditProduct />} />
          <Route path="/fav" element={<FavoriteProduct />} />
          <Route path="/test" element={<Test/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
