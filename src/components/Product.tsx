import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { Component } from "react";
import { connect } from "react-redux";
import { RootState } from "../redux/Reducers";
import { Dispatch } from "redux";
import { ADD } from "../redux/Actions/Action";
import { ProductType } from "../types/product.type";

type S = {
  addedToCart: boolean;
};
class Product extends Component<
  {
    id: number;
    title: string;
    image: string;
    price: number;
    category: string;
    rating: { rate: number; count: number };
    dispatch: Dispatch<any>;
    cart: ProductType[] | [];
  },
  S
> {
  state = {
    addedToCart: false,
  };
  render() {
    const { id, title, image, price, category, rating } = this.props;
    return (
      <Box sx={{ display: "flex" }} justifyContent="center" alignItems="center">
        <Card className="card" sx={{ maxWidth: 350 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="100"
            sx={{
              objectFit: "contain",
            }}
            image={image}
          />
          <Divider sx={{ mt: 2 }} />
          <CardContent>
            <Typography
              gutterBottom
              variant="subtitle1"
              sx={{
                width: 200,
                whiteSpace: "nowrap",
                overflow: "hidden",
                display: "inlineBlock",
                textOverflow: "ellipsis",
              }}
            >
              {title}
            </Typography>
          </CardContent>
          <Divider />
          <CardActions>
            <Stack direction="row" spacing={2}>
              <Typography variant="subtitle1"> ${price} </Typography>
              <Typography> {category}</Typography>
            </Stack>
          </CardActions>
          <CardActions>
            <Typography> Rating: {rating.rate}</Typography>
            <Typography> Reviews: {rating.count}</Typography>
          </CardActions>
          <CardActions>
            <Button
              size="small"
              variant="outlined"
              disabled={this.state.addedToCart}
              onClick={() => {
                this.setState({
                  addedToCart: !this.state.addedToCart,
                });
                this.props.dispatch(
                  ADD({ id, title, category, image, price, rating, qty: 1 })
                );
              }}
            >
              {this.state.addedToCart ? "Added To Cart" : "Add To Cart"}
            </Button>
          </CardActions>
        </Card>
      </Box>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  cart: state.cartReducer.items,
});

export default connect(mapStateToProps)(Product);
