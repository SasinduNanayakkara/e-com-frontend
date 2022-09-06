import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/header/Header";
import { getAllProducts, deleteProduct, updateProduct } from "../../actions/productActions";
import editIcon from "../../Assets/edit-icon.svg";
import deleteIcon from "../../Assets/delete-icon.svg";
import starIcon from "../../Assets/star.svg";
import staredIcon from "../../Assets/starred.svg";
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

const Home = () => {

  const dispatch = useDispatch();
  const allProductsDetails = useSelector((state) => state.allProductsDetails);
  const { loading, error, allProducts } = allProductsDetails;

  const productDelete = useSelector((state) => state.deleteProduct);
  const { Dleteloading, DeleteError, success } = productDelete;



  const navigation = useNavigate();
  const handleUpdate = (
    id,
    name,
    price,
    description,
    image,
    sku,
    quantity,
    isFavorite
  ) => {
    navigation(`/edit/${id}`, {
      state: { id, name, price, description, image, sku, quantity, isFavorite },
    });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteProduct(id));
      if (success) {
        console.log("ok");
        navigation("/");
        window.location.reload();
      }
    }
  };

  const handleFavorite = (id, name, price, description, image, sku, quantity, isFavorite) => {
    if (isFavorite) {
      isFavorite = false;
    } else {
      isFavorite = true;
    }
    console.log(isFavorite);
    dispatch(updateProduct(id, name, price, description, image, sku, quantity, isFavorite));
    if (allProducts) {
      navigation("/");
      window.location.reload();
    }
  }

  const handleProductAdd = () => {
    navigation("/add");
    console.log("ok");
  }

  const GotoFavorites = () => {
    navigation("/fav");
  }

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <div className="mt-10">
        <h1 className="text-5xl font-bold pt-5 pl-20">PRODUCTS</h1>
      </div>
      <div className="px-20 mt-8 flex justify-between">
        <div className="relative">
          <form action="">
          <input
              type="text"
              placeholder="Search the products"
                className="bg-offWhite w-96 rounded-3xl focus:outline-none pl-4 py-3"
                name="SKU"
          />
            <button className="bg-blue text-white px-4 py-3 rounded-3xl absolute left-[280px]"><span className="flex"><SearchIcon/>Search</span></button>
          </form>
        </div>
        <div className="flex mr-10">
          <button className="bg-blue text-white rounded-md px-10 py-2" onClick={handleProductAdd}>New Product</button>
          <button className="bg-white outline rounded-md px-2 ml-5 outline-blue" onClick={GotoFavorites}><img src={staredIcon} alt="star"/></button>
        </div>
      </div>
      <div className="px-28">
        <table className="w-full mt-8">
          <thead className="">
            <tr>
              <th className="p-3 font-bold text-blue">SKU</th>
              <th className="p-3 font-bold text-blue">IMAGE</th>
              <th className="p-3 font-bold text-blue">NAME</th>
              <th className="p-3 font-bold text-blue">PRICE</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allProducts?.data.map((product) => (
              <tr className="" key={product._id}>
                <td className="">
                  <div className="pl-20">{product.sku}</div>
                </td>
                <td>
                  <div>{product.image}</div>
                </td>
                <td>
                  <div>{product.name}</div>
                </td>
                <td>
                  <div>{product.price}</div>
                </td>
                <td>
                  <div className="flex gap-5 py-8">
                    <img
                      src={editIcon}
                      alt="edit"
                      onClick={(e) =>
                        handleUpdate(
                          product._id,
                          product.name,
                          product.price,
                          product.description,
                          product.image,
                          product.sku,
                          product.quantity,
                          product.isFavorite
                        )
                      }
                    />
                    <img
                      src={deleteIcon}
                      alt="delete"
                      onClick={(e) => handleDelete(product._id)}
                    />
                    {product.isFavorite ? (
                      <img src={staredIcon} alt="star" onClick={(e) => handleFavorite(product._id,
                        product.name,
                        product.price,
                        product.description,
                        product.image,
                        product.sku,
                        product.quantity,
                        product.isFavorite)} />
                    ) : (
                    <img src={starIcon} alt="star" onClick={(e) => handleFavorite(product._id,
                          product.name,
                          product.price,
                          product.description,
                          product.image,
                          product.sku,
                          product.quantity,
                          product.isFavorite)} />
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
