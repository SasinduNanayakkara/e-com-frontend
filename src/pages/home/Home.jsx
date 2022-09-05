import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/header/Header";
import { getAllProducts, deleteProduct } from "../../actions/productActions";
import editIcon from "../../Assets/edit-icon.svg";
import deleteIcon from "../../Assets/delete-icon.svg";
import starIcon from "../../Assets/star.svg";
import staredIcon from "../../Assets/starred.svg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const allProductsDetails = useSelector((state) => state.allProductsDetails);
  const { loading, error, allProducts } = allProductsDetails;

  const delete_Product = useSelector((state) => state.deleteProduct);
  const { Dleteloading, DeleteError, success } = delete_Product;

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
    }
  };

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {}, [allProductsDetails]);
  return (
    <div>
      <Header />
      <div className="mt-10">
        <h1 className="text-5xl font-bold p-5">Products</h1>
      </div>
      <div>
        <table className="w-full pt-4">
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
                  <div>{product.name}</div>
                </td>
                <td>
                  <div>{product.image}</div>
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
                    <img src={starIcon} alt="star" />
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
