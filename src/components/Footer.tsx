import { Divider, Grid, Typography } from "@mui/material";
const Footer = () => {
  return (
    <>
      <Divider sx={{ my: 2, boxShadow: "1px 0px 1px" }} />
      <Grid container alignItems="center" justifyContent="center">
        <Typography variant="h6">
          Copy right {new Date().getFullYear()}
        </Typography>
      </Grid>
    </>
  );
};

export default Footer;
