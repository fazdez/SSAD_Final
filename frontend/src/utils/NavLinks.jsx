import React from "react";
import { Button, Link, Typography } from "@material-ui/core";
const NavLink = (props) => {
  return (
    <Link
      className="MuiLink-button"
      underline="none"
      color="inherit"
      onClick={props.handleClick}
      id={props.name}
    >
      <Button className={props.classes} disabled={props.disabled}>
        <Typography variant="h6">{props.name}</Typography>
      </Button>
    </Link>
  );
};

export default NavLink;
