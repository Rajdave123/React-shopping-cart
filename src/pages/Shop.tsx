import React from "react";
import Product from "../components/Product";
import { Grid } from "@mui/material";
import Placeholder from "../components/Placeholder";
type ProductType = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};
type ProductState = {
  productList: Array<ProductType> | [];
  loading: boolean;
};

type ShopProps = {
  empty?: boolean;
};

class Shop extends React.Component<ShopProps, ProductState> {
  state = {
    productList: [] as ProductType[],
    loading: true,
  };

  componentDidMount(): void {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((productList) => {
        document.body.style.overflow = "scroll";
        this.setState({ loading: false });
        this.props?.empty
          ? this.setState({ productList: [] })
          : this.setState({ productList });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
  }

  render() {
    return !this.state.loading ? (
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        {this.state.productList.length > 0 ? (
          this.state.productList.map((product: ProductType) => (
            <Grid
              key={product.id}
              item
              xs={12}
              sm={4}
              md={3}
              lg={2}
              alignItems="center"
              justifyContent="center"
            >
              <Product {...product} />
            </Grid>
          ))
        ) : (
          <p style={{ margin: "0 auto", marginTop: 10 }}>No Products Found</p>
        )}
      </Grid>
    ) : (
      <Placeholder />
    );
  }
}

export default Shop;
