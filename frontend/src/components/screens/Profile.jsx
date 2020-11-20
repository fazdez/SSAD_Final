import "./Profile.css";
import React from "react";
import { Redirect } from "react-router-dom";
import getCurrentUser from "./../../utils/getCurrentUser";
import { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

var numGroups = 3;

/*
Add to script later
<script>
									for(var i = 0; i < 10; i++) {
										document.body.innerHTML += '<li>Placeholder Group</li>'
									}
								</script>
*/

/*const theme = createMuiTheme({
	typography: {
		fontFamily: [
			"Helvetica",
			"Arial",
			"sans-serif",
		].join(","),
	},
});*/

const Profile = () => {
  const user = getCurrentUser();

  return (
    <Fragment>
      {user ? <div></div> : <Redirect to="/login" />}
      <div class="wrapper">
        <div class="wrap_top">
          <div class="top">
            <img src={require("../../assets/profile_ph.png")} />
            <Typography variant="h2" align="center" color="textPrimary">
              Welcome!
            </Typography>
            <Typography variant="h3" align="center" color="textPrimary">
              {user.userName}
            </Typography>
          </div>
          <div class="bot_left">
            <Typography
              variant="h3"
              align="left"
              display="block"
              paragraph="true"
              fontFamily="EBIT"
              color="textPrimary"
            >
              {" "}
              Account Information
            </Typography>
            <Divider variant="middle" />
            <Typography
              variant="h5"
              align="left"
              display="block"
              paragraph="true"
              color="textPrimary"
            >
              Your name: Placeholder fullname
            </Typography>
            <Divider variant="middle" />
            <Typography
              variant="h5"
              align="left"
              display="block"
              paragraph="true"
              color="textPrimary"
            >
              Your email: Placeholder email
            </Typography>
            <Divider variant="middle" />
            <Typography
              variant="h5"
              align="left"
              display="block"
              paragraph="true"
              color="textPrimary"
            >
              Account type: Student
            </Typography>
            <Divider variant="middle" />
            <button
              class="button"
              type="submit"
              formaction="http://localhost:3000/register?"
            >
              <Typography variant="h6" align="left">
                Log out
              </Typography>
            </button>
          </div>
          <div class="bot_right">
            <Typography
              variant="h3"
              align="left"
              fontFamily="EBIT"
              display="block"
              paragraph="true"
              color="textPrimary"
            >
              Your Groups
            </Typography>
            <Divider variant="middle" />
            <ul class="groupList">
              <Typography
                variant="h5"
                align="left"
                display="block"
                paragraph="true"
                color="textPrimary"
              >
                Group Placeholder
              </Typography>
              <Divider variant="middle" />
            </ul>
          </div>
          <div class="bot_right2">
            <Typography
              variant="h3"
              align="left"
              display="block"
              paragraph="true"
              color="textPrimary"
            >
              Your Statistics
            </Typography>
            <img src={require("../../assets/pie-chart.png")} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
