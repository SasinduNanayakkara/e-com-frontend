import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { addProductReducer, deleteProductReducer, favoriteProductReducer, getOneProductReducer, getProductsReducer, updateProductReducer } from "../reducers/productReduces";

const reducer = combineReducers({
    addProduct: addProductReducer,
    updateProduct: updateProductReducer,
    getOneProduct: getOneProductReducer,
    allProductsDetails: getProductsReducer,
    deleteProduct: deleteProductReducer,
    getFavoriteProducts: favoriteProductReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;