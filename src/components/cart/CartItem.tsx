import {
  Box,
  Button,
  Divider,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React, { Component } from "react";
import { CartType, ProductType } from "../../types/product.type";
import { connect } from "react-redux";
import { DECREMENT, DELETE, INCREMENT } from "../../redux/Actions/Action";
import { Dispatch } from "redux";
import { RootState } from "../../redux/Reducers";
type CartItemProp = {
  cart: CartType;
  items: CartType[];
  increment: (id: number) => any;
  decrement: (id: number) => any;
  delete: (id: number) => any;
};

export class CartItem extends Component<CartItemProp> {
  increment() {
    return this.props.increment(this.props.cart.id);
  }

  componentDidUpdate(
    prevProps: Readonly<CartItemProp>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): void {
    if (this.props.cart.qty == 0) {
      this.props.delete(this.props.cart.id);
    }
  }

  render() {
    return (
      <React.Fragment>
        <ListItem>
          <img
            loading="lazy"
            alt={this.props.cart.title}
            height={90}
            style={{ objectFit: "contain" }}
            width={80}
            src={this.props.cart.image}
          />
          <ListItemText
            primary={
              <div>
                <Typography variant="h6">{this.props.cart.title}</Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  X {this.props.cart.qty}
                </Typography>
              </div>
            }
            sx={{ ml: 10 }}
            secondary={"$" + this.props.cart.price}
          />
          <Stack direction="column">
            <Stack direction="row">
              <Button
                variant="outlined"
                onClick={() => {
                  this.props.decrement(this.props.cart.id);
                }}
                size="small"
              >
                -
              </Button>
              <Typography sx={{ mx: 2 }}>{this.props.cart.qty}</Typography>
              <Button
                variant="outlined"
                onClick={() => {
                  this.props.increment(this.props.cart.id);
                }}
                size="small"
              >
                +
              </Button>
            </Stack>
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle2">
                {" "}
                SubTotal: $
                <strong>{this.props.cart.price * this.props.cart.qty}</strong>
              </Typography>
            </Box>
          </Stack>
        </ListItem>

        <Divider />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  items: state.cartReducer.items,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  increment: (payload: number) => dispatch(INCREMENT(payload)),
  decrement: (payload: number) => dispatch(DECREMENT(payload)),
  delete: (payload: number) => dispatch(DELETE(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
