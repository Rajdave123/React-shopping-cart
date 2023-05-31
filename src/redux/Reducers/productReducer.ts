import { ProductType } from "../../types/product.type";

interface INIT_STATE {
  products: ProductType[] | [];
}

const INIT_PRODUCT_STATE: INIT_STATE = {
  products: [],
};

export const productReducer = (
  state = INIT_PRODUCT_STATE,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
};
