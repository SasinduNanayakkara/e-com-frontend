import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "../pages/AddProduct/AddProduct";
import EditProduct from "../pages/EditProduct/EditProduct";
import FavoriteProduct from "../pages/FavoriteProducts/FavoriteProduct";
import Home from "../pages/home/Home";
import Test from "../pages/home/Test";
import SearchProduct from "../pages/SearchProduct/SearchProduct";

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
          <Route path="/search/:name" element={<SearchProduct/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
