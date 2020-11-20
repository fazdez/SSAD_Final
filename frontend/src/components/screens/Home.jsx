import { useHistory } from "react-router-dom";
import {
  Button,
  CssBaseline,
  makeStyles,
  Typography,
  Container,
} from "@material-ui/core";
import getCurrentUser from "./../../utils/getCurrentUser";
import React from "react";

const useStyles = makeStyles((theme) => ({
  header: {
    fontSize: 40,
    fontWeight: 600,
    textColor: "white",
  },
  root: {
    width: "70%",
    display: "flex",
    justifyContent: "center",
  },
  container1: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    // alignItems: 'flex-end',
    flexDirection: "column",
  },
  container2: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    // alignItems: 'center',
    flexDirection: "column",
    paddingTop: 100,
    // paddingLeft: 50
  },
  screenContainer: {
    height: "90vh",
    display: "flex",
  },
  screenContainer2: {
    height: "50vh",
    display: "flex",
  },
  title: {
    fontWeight: 900,
    fontSize: 30,
    color: theme.palette.text.primary,
  },
  title2: {
    fontWeight: 900,
    fontSize: 80,
    color: "blue",
    paddingBottom: 10,
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    paddingTop: 30,
  },
  text: {
    fontSize: 20,
    color: theme.palette.secondary.main,
  },
}));

const Home = () => {
  const classes = useStyles();
  let history = useHistory();
  const user = getCurrentUser();

  return (
    <Container maxWidth="lg">
      <CssBaseline />
      <div className={classes.screenContainer}>
        <div className={classes.container1}>
          {/* <Typography variant="h6" align="left" style={{ fontWeight: 900, width: '40%' }}>Welcome to Refugee Code Games.</Typography> */}
          {user ? <div className={classes.title}>Hi {user.userName}!</div> : ""}
          <div className={classes.title}>Welcome to </div>
          <Typography
            variant="h1"
            align="left"
            color="primary"
            style={{ fontWeight: 90, fontFamily: "EBit" }}
          >
            SUPER SAD BROS
          </Typography>

          {/* <div className={classes.title2}>Refugee Code Games.</div> */}
          <Typography variant="subtitle1" color="textPrimary">
            The ultimate software engineering quiz game.
          </Typography>
          <div className={classes.buttonContainer}>
            <Button
              variant="contained"
              color="primary"
              style={{ marginRight: 15 }}
              onClick={() => history.push("/game")}
            >
              <b>Play</b>
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => history.push("/tutorial")}
            >
              How to play
            </Button>
          </div>
        </div>
        <div className={classes.container2}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div>
              <img
                src={require("../../assets/beep.gif")}
                height={80}
                width={80}
              />
              <img
                src={require("../../assets/pinkbeep.gif")}
                height={80}
                width={80}
              />
            </div>
            <div>
              <img src={require("../../assets/Grass.png")} />
              <img src={require("../../assets/Grass.png")} />
              <img src={require("../../assets/Grass.png")} />
              <img src={require("../../assets/Grass.png")} />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.screenContainer2}>
        <div className={classes.container1}>
          <Typography
            variant="h4"
            upper
            style={{ fontFamily: "EBit" }}
            color="secondary"
          >
            It's me, Mario!
          </Typography>
          <p>
            We're bringing 2D platform gaming to software engineering! Learn
            software engineering concepts in a fun and exciting way!
          </p>
        </div>
        <img
          style={{
            margin: "auto",
            borderRadius: "10px",
            marginBottom: "10px",
          }}
          src={require("../../assets/game.jpg")}
          height={300}
          width={400}
        />
      </div>
      <div className={classes.screenContainer2}>
        <div className={classes.container1}>
          <img
            style={{
              margin: "auto",
              borderRadius: "10px",
              marginBottom: "10px",
            }}
            src={require("../../assets/leaderboard.JPG")}
            height={300}
            width={600}
          />
        </div>
        <div className={classes.container2}>
          <Typography
            variant="h4"
            upper
            style={{ fontFamily: "EBit", float: "right" }}
            color="secondary"
            align="right"
          >
            Catch me if you can!
          </Typography>
          <p style={{ textAlign: "right" }}>
            The race is on! Outdo your friends on the leaderboards for different
            topics.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Home;
