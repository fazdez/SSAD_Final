import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import getCurrentUser from "./../../utils/getCurrentUser";

const axios = require("axios").default;
const apiURL = "http://localhost:3001/api/logins";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        SSADProject
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  label: {
    color: "grey",
    fontSize: 11,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const history = useHistory();

  let data = localStorage.getItem("data");
  if (data) {
    history.push("/");
  }
  const [account, setAccount] = useState({
    userName: "",
    password: "",
  });
  const [error, setErrors] = useState({ userName: null, password: null });

  const handleChange = (e) => {
    let account_dup = { ...account };
    account_dup[e.target.id] = e.target.value;
    setAccount(account_dup);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //servercall
    axios
      .post(apiURL, account)
      .then((res) => {
        console.log(res);
        setErrors({ userName: null, password: null });
        localStorage.setItem("data", JSON.stringify(res.data));
        localStorage.setItem("token", res.headers["x-token"]);
        localStorage.setItem(
          "GDJS_player",
          JSON.stringify({
            playerName: { str: `${res.data.username}` },
            lastLevel: { value: res.data.level },
            lastWorld: { value: res.data.world },
            lastSprite: { str: res.data.sprite },
          })
        );
        let user = {};
        if (account.userName === "admin" || account.userName === "teacher") {
          user = account;
        } else {
          user = getCurrentUser();
        }
        // let user = getCurrentUser();

        console.log(user);
        if (user.isAdmin) {
          history.push("/admin");
        } else {
          history.push("/");
        }
      })
      .catch(({ response }) => {
        if (response) {
          setErrors(response.data);
        }
      });
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} id="form-id">
          <TextField
            InputLabelProps={{ classes: { root: classes.label } }}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="userName"
            label="Username"
            name="userName"
            error={error.userName != null}
            helperText={!error.userName ? "" : error.userName}
            value={account.userName}
            autoFocus
            onChange={handleChange}
          />
          <TextField
            InputLabelProps={{ classes: { root: classes.label } }}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={account.password}
            error={error.password != null}
            helperText={!error.password ? "" : error.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
