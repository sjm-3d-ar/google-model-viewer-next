/* eslint-disable no-param-reassign */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import styles from "./styles";

const useStyles = makeStyles(styles);

const Model = () => {
  const classes = useStyles();
  return (
    <model-viewer
      className={classes.model_viewer}
      src="/images/Astronaut.glb"
      alt="A 3D model of an astronaut"
    />
  );
};

export default Model;
