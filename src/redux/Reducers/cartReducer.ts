import { CartType } from "./../../types/product.type";

interface INIT_STATE {
  items: CartType[] | [];
}

const INIT_CART_STATE: INIT_STATE = {
  items: [] as CartType[],
};

export const cartReducer = (
  state = INIT_CART_STATE,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "ADD_CART":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "INC_CART_ITEM_QTY":
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              qty: item.qty + 1,
            };
          }
          return item;
        }),
      };
    case "DEC_CART_ITEM_QTY":
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              qty: item.qty - 1,
            };
          }
          return item;
        }),
      };
    case "DEL_CART_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
