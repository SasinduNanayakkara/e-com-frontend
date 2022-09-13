import axios from "axios";
import {
  baseURL,
  PRODUCTS_LIST_FAIL,
  PRODUCTS_LIST_REQUEST,
  PRODUCTS_LIST_SUCCESS,
  PRODUCT_ADD_FAIL,
  PRODUCT_ADD_REQUEST,
  PRODUCT_ADD_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_FAVORITE_FAIL,
  PRODUCT_FAVORITE_REQUEST,
  PRODUCT_FAVORITE_SUCCESS,
  PRODUCT_ONE_FAIL,
  PRODUCT_ONE_REQUEST,
  PRODUCT_ONE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  SEARCH_PRODUCT_FAIL,
  SEARCH_PRODUCT_REQUEST,
  SEARCH_PRODUCT_SUCCESS,
} from "../constance/productConstance";

export const addProduct =
  (name, price, description, image, sku, quantity) => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_ADD_REQUEST });
      const { data } = await axios.post(`${baseURL}/add`, {
        name,
        price,
        description,
        image,
        sku,
        quantity,
      });
      dispatch({ type: PRODUCT_ADD_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: PRODUCT_ADD_FAIL, payload: error.message });
    }
  };

export const updateProduct =
  (id, name, price, description, image, sku, quantity, isFavorite) =>
  async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_UPDATE_REQUEST });
      const { data } = await axios.put(`${baseURL}/update/${id}`, {
        name,
        price,
        description,
        image,
        sku,
        quantity,
        isFavorite,
      });
      dispatch({ type: PRODUCT_UPDATE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: PRODUCT_UPDATE_FAIL, payload: error.message });
    }
  };

export const getOneProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_ONE_REQUEST });
    const { data } = await axios.get(`${baseURL}/${id}`);
    dispatch({ type: PRODUCT_ONE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_ONE_FAIL, payload: error.message });
  }
};

export const getAllProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCTS_LIST_REQUEST });
    const { data } = await axios.get(`${baseURL}/`);
    dispatch({ type: PRODUCTS_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCTS_LIST_FAIL, payload: error.message });
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DELETE_REQUEST });
    await axios.delete(`${baseURL}/${id}`);
    dispatch({ type: PRODUCT_DELETE_SUCCESS });
  } catch (error) {
    dispatch({ type: PRODUCT_DELETE_FAIL, payload: error.message });
  }
};

export const getFavoriteProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_FAVORITE_REQUEST });
    const { data } = await axios.get(`${baseURL}/fav`);
    dispatch({ type: PRODUCT_FAVORITE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_FAVORITE_FAIL, payload: error.message });
  }
};

export const getSearchProducts = (name) => async (dispatch) => {
  try {
    console.log("name", name);
    dispatch({ type: SEARCH_PRODUCT_REQUEST });
    const { data } = await axios.get(`${baseURL}/search?name=${name}`);
    dispatch({ type: SEARCH_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SEARCH_PRODUCT_FAIL, payload: error.message });
  }
}