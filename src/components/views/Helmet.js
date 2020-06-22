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
        camera-controls
        src="/images/DamagedHelmet/DamagedHelmet.gltf"
        environment-image="/images/studio_small_07_1k.hdr"
        shadow-intensity="1"
        stage-light-intensity="3"
        environment-intensity="2"
        alt="A 3D model of a helmet"
        backgroundColor="#FF6F59"
      />
    </div>
  );
};

export default Helmet;
