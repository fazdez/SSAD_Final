import { Typography } from "@material-ui/core";
import { CssBaseline, Container, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import isAuth from "../../utils/isAuth";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
  },
  button: {
    border: "1px solid black",
  },
  radar: {},
}));

const AdminPage = () => {
  const isAuthenticated = isAuth();
  const classes = useStyles();
  const history = useHistory();
  return !isAuthenticated ? (
    <React.Fragment>
      <Redirect to="/home" />
    </React.Fragment>
  ) : (
    <div style={{ margin: "30px 100px" }}>
      <Typography>
        Welcome, admin. Please select the buttons below to continue.
      </Typography>
      <Container className={classes.root}>
        <Grid container spacing={3}>
          <Grid item container xs={12} spacing={2}>
            <Grid item className={classes.card} xs={3}>
              <Button
                className={classes.button}
                onClick={() => {
                  history.push("/verifyTeacher");
                }}
              >
                Verify Teachers
              </Button>
            </Grid>
            <Grid item className={classes.card} xs={3}>
              <Button
                onClick={() => {
                  history.push("/questionbank");
                }}
                className={classes.button}
              >
                Question Bank
              </Button>
            </Grid>
            <Grid item className={classes.card} xs={3}>
              <Button
                onClick={() => {
                  history.push("/managegroups");
                }}
                className={classes.button}
              >
                Manage Groups
              </Button>
            </Grid>
            <Grid item className={classes.card} xs={3}>
              <Button
                onClick={() => {
                  localStorage.clear();
                  history.push("/");
                }}
                className={classes.button}
              >
                Log out
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AdminPage;
