import { combineReducers } from "redux";
import changeTheNumber from "./productReducer";
import { productsReducer, selectedProductsReducer } from "./productReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  changeTheNumber,
});

export default reducers;
