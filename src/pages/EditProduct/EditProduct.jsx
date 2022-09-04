import React, { useState } from "react";
import { useDispatch } from "react-redux";
import arrowImage from "../../Assets/arrow.svg";
import Header from "../../components/header/Header";

const EditProduct = () => {

    const [sku, setSKU] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(["test"]);
    const [quantity, setQuantity] = useState("");
    const [isFavorite, setIsFavorite] = useState(false);

    const dispatch = useDispatch();

  return (
    <div>
      <Header />
      <div className="mt-10 mx-[118px] flex">
        <h1 className="text-4xl font-bold p-5 pl-16">PRODUCTS</h1>
        <img src={arrowImage} alt="arrow" />
        <h3 className="mt-8 pl-3 text-blue font-bold">Edit Product</h3>
      </div>
      <div className="mt-4 pl-16 mx-[118px]">
        <form action="">
          <div className="flex">
            <label htmlFor="SKU" className="pt-1 font-bold">
              SKU
            </label>
            <input
              type="text"
              name="SKU"
              className="bg-offWhite w-64 rounded-md ml-10 focus:outline-none pl-2 p-1"
            />
          </div>
          <div className="flex mt-10">
            <div>
              <label htmlFor="Name" className="pt-1 font-bold">
                Name
              </label>
              <input
                type="text"
                name="Name"
                className="bg-offWhite w-64 rounded-md ml-8 focus:outline-none pl-2 p-1"
              />
            </div>
            <div className="ml-96">
              <label htmlFor="Price" className="pt-1 font-bold">
                QTY
              </label>
              <input
                type="text"
                name="Price"
                className="bg-offWhite w-64 rounded-md ml-10 focus:outline-none pl-2 p-1"
              />
            </div>
          </div>
          <div className="mt-10">
            <label htmlFor="Description" className="pt-1 font-bold">
              Product Description
            </label>
            <h6 className="text-xs pt-2">A small product about the product</h6>
            <textarea
              name="Description"
              id=""
              cols="50"
              rows="5"
              className="bg-offWhite mt-4 w-96 rounded-md focus:outline-none pl-2 p-1"
            ></textarea>
          </div>
          <div className="mt-5 flex">
            <div>
              <label htmlFor="Image" className="pt-1 font-bold">
                Product Image
              </label>
              <h6 className="text-xs pt-2">JPEG, PNG, SVG or GIF</h6>
              <h6 className="text-xs">(Maximum file size 50MB)</h6>
            </div>
            <div>
              <input
                type="file"
                name="Image"
                className="bg-offWhite w-96 rounded-md ml-10 focus:outline-none pl-2 p-1"
              />
            </div>
          </div>
          <div className="mt-8 ">
            <button className="bg-blue text-white rounded-md px-10 py-2">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
