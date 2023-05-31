import { cartReducer } from "./cartReducer";
import { combineReducers } from "@reduxjs/toolkit";
import { productReducer } from "./productReducer";

export const rootReducer = combineReducers({ cartReducer, productReducer });

export type RootState = ReturnType<typeof rootReducer>;
