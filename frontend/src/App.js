import "./App.css";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import React from "react";
import { blue, grey, lightBlue, cyan } from "@material-ui/core/colors";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import SignIn from "./components/screens/signIn";
import Register from "./components/screens/Register";
import Game from "./components/screens/Game";
import NavRoute from "./utils/NavRoute";
import Profile2 from "./components/screens/Profile2";
import MyClasses from "./components/screens/MyClasses";
import Home from "./components/screens/Home";
import Verify from "./components/screens/Verify";
import Tutorial from "./components/screens/Tutorial";
import Leaderboard from "./components/screens/Leaderboard";
import UserAnalytics from "./components/screens/UserAnalytics";
import QuestionBank from "./components/screens/QuestionBank";
import AdminPage from "./components/screens/AdminPage";
import ManageGroups from "./components/screens/ManageGroups";

const useStyles = makeStyles(() => ({
  app: {
    // background: `linear-gradient(45deg, ${lightBlue[50]} 10%, ${lightBlue[100]} 70%)`,
    background: "#F1FAEE",
    // background: '#ade8f4',
    // background: 'rgb(236,236,255)',
    // background: 'linear-gradient(40deg, rgba(234,234,242,1) 2%, rgba(160,237,255,1) 46%, rgba(0,212,255,1) 100%)',
    // background: 'linear-gradient(to right, #b2fefa, #0ed2f7)',
    width: "100%",
    height: "100vh",
    margin: 0,
    position: "fixed",
    overflowY: "scroll",
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#A8DADC",
      // main: '#023047',
    },
    secondary: {
      main: "#457B9D",
    },
    text: {
      primary: "#1D3557",
      secondary: "#F1FAEE",
    },
    error: {
      main: "#E63946",
    },
  },
  overrides: { MuiAppBar: { colorPrimary: { backgroundColor: grey[50] } } },
  typography: {
    fontFamily: [
      "Mario",
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

export default function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.app}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <NavRoute path="/game" component={Game} />
            <NavRoute path="/login" component={SignIn} />
            <NavRoute path="/register" component={Register} />
            <NavRoute path="/home" component={Home} />
            <NavRoute path="/profile" component={Profile2} />
            <NavRoute path="/tutorial" component={Tutorial} />
            <NavRoute path="/myclasses" component={MyClasses} />
            {/* <NavRoute path="/analytics" component={UserAnalytics} /> */}
            <NavRoute path="/leaderboard" component={Leaderboard} />
            <NavRoute path="/myclass" component={UserAnalytics} />
            <Route path="/admin" component={AdminPage} />
            <Route path="/questionbank" component={QuestionBank} />
            <Route path="/verifyTeacher" component={Verify} />
            <Route path="/manageGroups" component={ManageGroups} />
          </Switch>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}
