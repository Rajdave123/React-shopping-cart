export type ProductType = {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type QTY = {
  qty: number;
};

export type CartType = ProductType & QTY;
export type ProductState = {
  productList: Array<ProductType> | [];
};
