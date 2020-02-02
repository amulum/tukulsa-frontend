import React, { Fragment } from "react";
// EXPORT DEFAULT
import { withRouter } from "react-router-dom";

// IMPORT MUI ELEMENT
import { Grid, Paper, Typography } from "@material-ui/core";
// IMPORT MUI ICONS

const Exercise = props => {
  return (
    <Fragment>
      <Grid
        container
        spacing={2}
        direction={"row"}
        justify={"center"}
        alignItems={"center"}
      >
        <Grid item sm>
          <Paper>
            <Typography align={"center"}>paper</Typography>
          </Paper>
        </Grid>
        <Grid item sm={6}>
          <Paper>
            <Typography align={"center"}>paper</Typography>
          </Paper>
        </Grid>
        <Grid item sm>
          <Paper>
            <Typography align={"center"}>paper</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default withRouter(Exercise);
