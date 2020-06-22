/* eslint-disable no-param-reassign */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "85vh",
    backgroundColor: "#70BCD1",
  },

  model: {
    width: "100%",
    height: "100%",
  },
});

const Helmet = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <model-viewer
        class={classes.model}
        ar
        camera-orbit="-20deg 75deg 2m"
        camera-controls
        src="/images/DamagedHelmet/DamagedHelmet.gltf"
        shadow-intensity="1"
        alt="A 3D model of a helmet"
      />
    </div>
  );
};

export default Helmet;
