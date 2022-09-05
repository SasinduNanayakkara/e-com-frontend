import {
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
} from "../constance/productConstance";

export const addProductReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_ADD_REQUEST:
      return { loading: true };
    case PRODUCT_ADD_SUCCESS:
      return { loading: true, productAdd: action.payload };
    case PRODUCT_ADD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updateProductReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_UPDATE_REQUEST:
      return { loading: true };
    case PRODUCT_UPDATE_SUCCESS:
      return { loading: true, productUpdate: action.payload };
    case PRODUCT_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getOneProductReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_ONE_REQUEST:
      return { loading: true };
    case PRODUCT_ONE_SUCCESS:
      return { loading: true, product: action.payload };
    case PRODUCT_ONE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getProductsReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCTS_LIST_REQUEST:
      return { loading: true };
    case PRODUCTS_LIST_SUCCESS:
      return { loading: true, allProducts: action.payload };
    case PRODUCTS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteProductReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      return { loading: true };
    case PRODUCT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const favoriteProductReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_FAVORITE_REQUEST:
      return { loading: true };
    case PRODUCT_FAVORITE_SUCCESS:
      return { loading: true, productFavorite: action.payload };
    case PRODUCT_FAVORITE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
