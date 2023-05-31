import { Grid, Skeleton } from "@mui/material";
import React, { Component } from "react";

export class Placeholder extends Component {
  render() {
    return (
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        spacing={3}
      >
        {Array.from(new Array(12)).map((_, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={4}
            md={3}
            lg={2}
            alignItems="center"
            justifyContent="center"
          >
            <Skeleton
              variant="rectangular"
              width={200}
              height={200}
              sx={{ my: 1 }}
            />
            <Skeleton
              variant="rounded"
              width={200}
              height={50}
              sx={{ my: 1 }}
            />
            <Skeleton
              variant="rounded"
              width={200}
              height={50}
              sx={{ my: 1 }}
            />
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default Placeholder;
