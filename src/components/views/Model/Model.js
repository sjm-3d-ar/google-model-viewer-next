/* eslint-disable no-param-reassign */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import styles from "./styles";

const useStyles = makeStyles(styles);

// ! NOTE: for the model-viewer element, must use 'class' attribute to assign a style class
// ! Must be a React issue.

const Model = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <model-viewer
        class={classes.model}
        auto-rotate
        camera-controls
        src="/images/Astronaut/Astronaut.glb"
        alt="A 3D model of an astronaut"
      />
    </div>
  );
};

export default Model;
