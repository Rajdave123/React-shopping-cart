import React, { Component } from "react";
import { RootState } from "../../redux/Reducers";
import { connect } from "react-redux";
import { CartType } from "../../types/product.type";
import {
  Box,
  Grid,
  List,
  ListSubheader,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import CartItem from "./CartItem";
interface CartProps {
  cart: CartType[];
}

export class Cart extends Component<CartProps> {
  render() {
    return (
      <Paper elevation={4} sx={{ mx: 5 }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              {!this.props.cart.length ? (
                <Paper sx={{p:3}}>
                  <Typography>
                    Your cart is empty, please add some product to the cart.
                  </Typography>
                </Paper>
              ) : (
                <List
                  sx={{
                    width: "100%",
                    bgcolor: "background.paper",
                  }}
                  aria-labelledby="nested-list-subheader"
                  subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                      Cart Items
                    </ListSubheader>
                  }
                >
                  {this.props.cart.map((item) => (
                    <CartItem cart={item} key={item.id} />
                  ))}
                </List>
              )}

              <Stack
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                spacing={1}
                mr={2}
              >
                {this.props.cart.length > 0 && (
                  <Typography variant="subtitle1" gutterBottom>
                    Total Amount:{" "}
                    <strong>
                      $
                      {this.props.cart
                        .reduce((total: number, item: CartType) => {
                          total = total + item.qty * item.price;
                          return total;
                        }, 0)
                        .toFixed(2)}
                    </strong>
                  </Typography>
                )}
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  cart: state.cartReducer.items,
});

export default connect(mapStateToProps)(Cart);
