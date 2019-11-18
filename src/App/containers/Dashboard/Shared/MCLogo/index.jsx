import React from "react";
import Icon from "@material-ui/core/Icon";
import { withStyles } from "@material-ui/core/styles";
import logo from "./mc_symbol.svg";

const styles = (theme) => ({
  // icon: {
  //   position: "absolute",
  //   top: 8,
  //   right: 8,
  //   width: 32
  // }
});

export const MCIcon = withStyles(styles)((
  // { classes, ...props }
) => {
  return (
    <Icon>
      <img width="32px" src={logo} alt="mastercard"/>
    </Icon>
  );
});
