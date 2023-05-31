import React from "react";
import { Box, Grid, IconButton, Menu, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/Reducers";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { Link, useNavigate } from "react-router-dom";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
const Header = () => {
  const { items } = useSelector((state: RootState) => state.cartReducer);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  const handleCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (items.length) {
      navigate("/cart");
    } else {
      setAnchorEl(event.currentTarget);
    }
  };
  return (
    <Box sx={{ mb: 10 }}>
      <Box
        sx={{
          backgroundColor: "lightskyblue",
          boxShadow: "0px 0px 10px",
          position: "fixed",
          right: 0,
          top: 0,
          width: "100%",
        }}
      >
        <Grid
          container
          className="header"
          alignItems="center"
          justifyContent="space-around"
        >
          <Link to="/products" style={{textDecoration:"none"}}>
            <Typography variant="h4">Shopping Mall</Typography>
          </Link>
          <IconButton
            aria-label="cart"
            sx={{ mt: 1 }}
            onClick={(e) => handleCart(e)}
          >
            <Badge badgeContent={items.length} color="primary">
              <ShoppingCartIcon
                sx={{ fontSize: 40 }}
                color={items.length ? "primary" : "secondary"}
              />
            </Badge>
          </IconButton>
          {!items.length && (
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <CloseRoundedIcon
                onClick={handleClose}
                sx={{
                  cursor: "pointer",
                  padding: "0 0 0 5px",
                  outline: "none",
                }}
              />
              <div
                style={{
                  width: "21rem",
                  padding: 1,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography style={{ fontSize: 22 }}>
                  Your cart is empty
                </Typography>
                <img
                  src="./cart.gif"
                  alt=""
                  className="emptycart_img"
                  style={{ width: "3rem", padding: 5 }}
                />
              </div>
            </Menu>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default Header;
