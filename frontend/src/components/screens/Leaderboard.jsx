import React from "react";
import Entry from "../leaderboard/Entry";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
const axios = require("axios").default;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: 20,
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: 1100,
    height: 100,
    margin: 10,
  },
}));

const worldMapping = {
  1: "General Software Engineering Knowledge",
  2: "UML Knowledge",
  3: "Software Architecture Knowledge",
};

const Leaderboard = (props) => {
  const apiURL = "http://localhost:3001/api/scores/";
  const classes = useStyles();
  const [world, setWorld] = React.useState(1);
  const [scores, setScores] = React.useState([
    { username: "Andy", score: 55 },
    { username: "Barbara", score: 53 },
    { username: "Charlie", score: 25 },
  ]);

  React.useEffect(() => {
    axios
      .get(apiURL + world + "/leaderboard")
      .then((val) => {
        setScores(val.data);
      })
      .catch(({ response }) => {
        console.log(response);
      });
  });
  return (
    <div className={classes.root}>
      <Card className={classes.container}>
        <Button
          disabled={world === 1}
          onClick={() => {
            setWorld(world - 1);
          }}
        >
          <ArrowBackIosIcon />
        </Button>
        <CardContent>
          <Typography
            style={{ textAlign: "center" }}
          >{`World ${world}`}</Typography>
          <Typography>{worldMapping[world]}</Typography>
        </CardContent>
        <Button
          disabled={world == 3}
          onClick={() => {
            setWorld(world + 1);
          }}
        >
          <ArrowForwardIosIcon />
        </Button>
      </Card>
      {scores.map((score, index) => {
        let pos = index + 1;
        if (pos < 10) pos = `0${pos}`;
        else pos = pos.toString();
        return (
          <Entry
            id={index}
            position={pos}
            name={score.username}
            score={score.score}
          />
        );
      })}
    </div>
  );
};

export default Leaderboard;
