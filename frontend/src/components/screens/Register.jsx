import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import PermIdentitySharpIcon from "@material-ui/icons/PermIdentitySharp";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import { Checkbox, FormControlLabel } from "@material-ui/core";

const axios = require("axios").default;
const apiURL = "http://localhost:3001/api/users";

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
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Register() {
  const history = useHistory();

  const [account, setAccount] = useState({
    userName: "",
    password: "",
    repeatPassword: "",
    fullName: "",
    email: "",
    phoneNumber: "",
    isTeacher: false,
    verified: true,
  });

  const [error, setErrors] = useState({
    userName: null,
    password: null,
    repeatPassword: null,
    fullName: null,
    email: null,
    phoneNumber: null,
  });

  const handleChange = (e) => {
    if (e.target.id === "repeatPassword" || e.target.id === "password") {
      if (e.target.value !== account.password) {
        let error_dup = { ...error };
        error_dup.repeatPassword = "Passwords do not match!";
        setErrors(error_dup);
      } else {
        let error_dup = { ...error };
        error_dup.repeatPassword = null;
        setErrors(error_dup);
      }
    }
    let account_dup = { ...account };
    if (e.target.id === "isTeacher") {
      account_dup["isTeacher"] = !account["isTeacher"];
      account_dup["verified"] = !account["verified"];
    } else {
      account_dup[e.target.id] = e.target.value;
    }
    setAccount(account_dup);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (account.password !== account.repeatPassword) {
      return;
    }
    let account_dup = { ...account };
    account_dup.email = account_dup.email.trim();
    account_dup.fullName = account_dup.fullName.trim();
    account_dup.userName = account_dup.userName.trim();
    account_dup.phoneNumber = parseInt(account_dup.phoneNumber, 10);
    console.log(account_dup);
    //servercall
    axios
      .post(apiURL, account_dup)
      .then((res) => {
        setErrors({
          userName: null,
          password: null,
          email: null,
          fullName: null,
          repeatPassword: null,
          phoneNumber: null,
        });
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
        history.push("/");
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
          <PermIdentitySharpIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} id="form-id">
          <TextField
            InputLabelProps={{ classes: { root: classes.label } }}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="fullName"
            label="Full Name (as in Matriculation Card)"
            name="fullName"
            error={error.fullName != null}
            helperText={!error.fullName ? "" : error.fullName}
            value={account.fullName}
            autoFocus
            onChange={handleChange}
          />
          <TextField
            InputLabelProps={{ classes: { root: classes.label } }}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="email"
            label="NTU Email Address"
            type="email"
            id="email"
            value={account.email}
            error={error.email != null}
            helperText={!error.email ? "" : error.email}
            onChange={handleChange}
          />
          <TextField
            InputLabelProps={{ classes: { root: classes.label } }}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="userName"
            label="Username"
            id="userName"
            value={account.userName}
            error={error.userName != null}
            helperText={!error.userName ? "" : error.userName}
            onChange={handleChange}
          />
          <TextField
            InputLabelProps={{ classes: { root: classes.label } }}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="phoneNumber"
            label="Phone"
            placeholder="e.g. 81234567"
            name="phoneNumber"
            error={error.phoneNumber != null}
            helperText={!error.phoneNumber ? "" : error.phoneNumber}
            value={account.phoneNumber}
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
          <TextField
            InputLabelProps={{ classes: { root: classes.label } }}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="repeatPassword"
            label="Re-enter your password"
            type="password"
            id="repeatPassword"
            value={account.repeatPassword}
            error={error.repeatPassword != null}
            helperText={!error.repeatPassword ? "" : error.repeatPassword}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={account.isTeacher}
                id={"isTeacher"}
                onChange={handleChange}
                color="secondary"
                style={{ color: "black" }}
              />
            }
            label="Tick if you are a teacher"
          ></FormControlLabel>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Register
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/login" variant="body2">
                {"Already have an account?"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box style={{ margin: 10 }} mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
