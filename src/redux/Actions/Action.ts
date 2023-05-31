import { CartType, ProductType } from "../../types/product.type";

export const ADD = (item: CartType) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};
export const INCREMENT = (data: ProductType["id"]) => {
  return {
    type: "INC_CART_ITEM_QTY",
    payload: data,
  };
};
export const DECREMENT = (data: ProductType["id"]) => {
  return {
    type: "DEC_CART_ITEM_QTY",
    payload: data,
  };
};

export const DELETE = (data: ProductType["id"]) => {
  return {
    type: "DEL_CART_ITEM",
    payload: data,
  };
};

const fetchProductsRequest = () => {
  return {
    type: "FETCH_PRODUCTS_REQUEST",
  };
};

const fetchProductsSuccess = (data: ProductType[]) => {
  return {
    type: "FETCH_PRODUCTS_SUCCESS",
    payload: data,
  };
};

const fetchProductsFailure = (error: any) => {
  return {
    type: "FETCH_PRODUCTS_FAILURE",
    payload: error,
  };
};
