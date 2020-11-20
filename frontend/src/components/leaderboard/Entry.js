import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Card } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    width: 1000,
    height: 100,
    margin: 10,
    paddingLeft: 15,
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  img: {
    marginLeft: 50,
    marginRight: 50,
  },
  name: {
    marginRight: 575,
  },
}));

const Entry = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <h1>{props.position}</h1>
      <img
        src={require(`../../assets/users/Avatars Set Flat Style-${props.position}.png`)}
        width={40}
        height={40}
        className={classes.img}
      />
      <Typography className={classes.name}>{props.name}</Typography>
      <div
        style={{
          backgroundColor: "red",
          color: "white",
          padding: 10,
          borderRadius: 4,
          marginLeft: "auto",
          marginRight: 40,
        }}
      >
        <b>{props.score}</b>
      </div>
    </Card>
  );
};

export default Entry;
