import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import arrowImage from "../../Assets/arrow.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../actions/productActions";
import { storage } from "../../firebase";
import { ref, uploadBytes, listAll, getDownloadURL, uploadBytesResumable } from "firebase/storage";
const AddProduct = () => {
  const [sku, setSKU] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageUpload, setImageUpload] = useState(null);
  const [quantity, setQuantity] = useState("");

  const dispatch = useDispatch();

  const productRegister = useSelector((state) => state.productAdd);
  const { loading, error, productAdd } = productRegister;
  const navigate = useNavigate();

  const imageListRef = ref(storage, "images/");

  useEffect(() => {
    if (productAdd) {
      navigate("/");
    }
  });

  const handleSubmit = async (e) => {
    const image = [];
    e.preventDefault();
    listAll(imageListRef).then((res) => {
      res.items.forEach((itemRef) => {
        getDownloadURL(itemRef).then((url) => {
          image.push(url);
        });
      });
    });
    if (!imageUpload) {
      return;
    }
    const imageRef = ref(storage, `images/${imageUpload.name + Date.now()}`);
    const uploadTask = uploadBytesResumable(imageRef, imageUpload);
    uploadTask.on("state_changed", (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
        default:
          break;
      }
    },
    (error) => {
      console.log(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);
        dispatch(addProduct(name, price, description, downloadURL, sku, quantity));

      });
    }
    )
  };

  return (
    <div>
      <Header />
      <div className="mt-10 mx-[118px] flex">
        <h1 className="text-4xl font-bold p-5 pl-16">PRODUCTS</h1>
        <img src={arrowImage} alt="arrow" />
        <h3 className="mt-8 pl-3 text-blue font-bold">Add new Product</h3>
      </div>
      <div className="mt-4 pl-16 mx-[118px]">
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <div>
              <label htmlFor="SKU" className="pt-1 font-bold">
                SKU
              </label>
              <input
                type="text"
                className="bg-offWhite w-64 rounded-md ml-10 focus:outline-none pl-2 p-1"
                name="SKU"
                onChange={(e) => setSKU(e.target.value)}
              />
            </div>
            <div className="ml-96">
              <label htmlFor="Price" className="pt-1 font-bold">
                Price
              </label>
              <input
                type="text"
                className="bg-offWhite w-64 rounded-md ml-10 focus:outline-none pl-2 p-1"
                name="Price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
          <div className="flex mt-10">
            <div>
              <label htmlFor="Name" className="pt-1 font-bold">
                Name
              </label>
              <input
                type="text"
                className="bg-offWhite w-64 rounded-md ml-8 focus:outline-none pl-2 p-1"
                name="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="ml-96">
              <label htmlFor="Price" className="pt-1 font-bold">
                QTY
              </label>
              <input
                type="text"
                className="bg-offWhite w-64 rounded-md ml-10 focus:outline-none pl-2 p-1"
                name="Price"
                onChange={(e) => setQuantity(e.target.value)}
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
              className="bg-offWhite mt-4 w-96 rounded-md focus:outline-none pl-2 p-1"
              rows="5"
              onChange={(e) => setDescription(e.target.value)}
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
                className="bg-offWhite w-96 rounded-md ml-10 focus:outline-none pl-2 p-1"
                name="Image"
                onChange={(e) => setImageUpload(e.target.files[0])}
              />
            </div>
          </div>
          <div className="mt-8 ">
            <button
              type="submit"
              className="bg-blue text-white rounded-md px-10 py-2"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
