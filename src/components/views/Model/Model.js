/* eslint-disable no-param-reassign */
import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { ToastButton } from "_common";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
  },
}));

const Model = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h1" gutterBottom>
        Model
      </Typography>
      <ToastButton />
    </div>
  );
};

export default Model;
