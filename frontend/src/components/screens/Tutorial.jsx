import React from "react";
import "./Tutorial.css";
import {
  Button,
  CssBaseline,
  makeStyles,
  Typography,
  Container,
} from "@material-ui/core";
import Box from "@material-ui/core/Box";

const Tutorial = () => {
  return (
    <div class="whole">
      <div class="title1">
        <Typography
          variant="h4"
          align="center"
          color="secondary"
          style={{ fontWeight: 90, fontFamily: "EBit" }}
        >
          Hello! Welcome to
          <mark> Super Sad Bros</mark>!
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="secondary"
          style={{ fontWeight: 90, fontFamily: "EBit" }}
        >
          Basic tutorial
        </Typography>
      </div>
      <div class="link">
        <Typography
          variant="body1"
          align="left"
          color="secondary"
          style={{ fontWeight: 90, fontFamily: "Ebit" }}
        >
          Overview:
        </Typography>
        <ul>
          <li>
            <Typography
              variant="overline"
              align="left"
              color="primary"
              style={{ fontWeight: 90, fontFamily: "Ebit" }}
            >
              <Box fontStyle="italic" color="black" display="inline">
                {" "}
                Super SAD Bros
              </Box>{" "}
              is developed for CZ3003 Software Systems Analysis and Design, as
              part of a laboratory group project assignment, undertaken by
              students of the School of Computer Science and Engineering,
              Nanyang Technological University, Singapore.
            </Typography>
          </li>
          <li>
            <Typography
              variant="overline"
              align="left"
              color="primary"
              style={{ fontWeight: 90, fontFamily: "Ebit" }}
            >
              Check out our
            </Typography>

            <a href="http://155.69.100.27/3003S12021_Refugees/index.php/Main_Page">
              <Typography
                variant="overline"
                align="left"
                color="black"
                style={{ fontWeight: 90, fontFamily: "Mario" }}
              >
                {" "}
                Wiki Page
              </Typography>
            </a>

            <Typography
              variant="overline"
              align="left"
              color="primary"
              style={{ fontWeight: 90, fontFamily: "Ebit" }}
            >
              {" "}
              for further inquiries.
            </Typography>
          </li>
        </ul>
      </div>

      <div class="general_rules">
        <Typography
          variant="body1"
          align="left"
          color="secondary"
          style={{ fontWeight: 90, fontFamily: "Ebit" }}
        >
          Page Navigation
        </Typography>
        {/* <ul>
          <Typography
            component="rule1"
            variant="body2"
            align="left"
            color="secondary"
            style={{ fontWeight: 90, fontFamily: "Ebit" }}
          >
            When you open the application, you will see the
            <Box fontStyle="italic" color="black" display="inline">
              {" "}
              HOME
            </Box>{" "}
            page.
          </Typography>
        </ul> */}
        <ul>
          <li>
            <Typography
              component="rule1"
              variant="overline"
              align="left"
              color="primary"
              style={{ fontWeight: 90, fontFamily: "Ebit" }}
            >
              You can click on the
              <Box fontStyle="italic" color="black" display="inline">
                {" "}
                PLAY
              </Box>{" "}
              button at the bottom of the page or the
              <Box fontStyle="italic" color="black" display="inline">
                {" "}
                GAME
              </Box>{" "}
              tab in the navigation bar to start playing the game. If you are
              not logged in, the system will prompt you to log in.
            </Typography>
          </li>
          <li>
            <Typography
              component="rule1"
              variant="overline"
              align="left"
              color="primary"
              style={{ fontWeight: 90, fontFamily: "Ebit" }}
            >
              The
              <Box fontStyle="italic" color="black" display="inline">
                {" "}
                LEADERBOARD
              </Box>{" "}
              tab in the navigation bar allows you to check your ranking.
            </Typography>
          </li>
          <li>
            <Typography
              component="rule1"
              variant="overline"
              align="left"
              color="primary"
              style={{ fontWeight: 90, fontFamily: "Ebit" }}
            >
              The
              <Box fontStyle="italic" color="black" display="inline">
                {" "}
                HOW TO PLAY
              </Box>{" "}
              button at the bottom is for you to check out the tutorial if you
              don’t know how to navigate the system.
            </Typography>
          </li>
          <li>
            <Typography
              component="rule1"
              variant="overline"
              align="left"
              color="primary"
              style={{ fontWeight: 90, fontFamily: "Ebit" }}
            >
              On the top left corner, there is a
              <Box fontStyle="italic" color="black" display="inline">
                {" "}
                MENU
              </Box>{" "}
              which can direct you to your
              <Box fontStyle="italic" color="black" display="inline">
                {" "}
                PROFILE
              </Box>{" "}
              page and the
              <Box fontStyle="italic" color="black" display="inline">
                {" "}
                TUTORIAL
              </Box>{" "}
              page and allow you to
              <Box fontStyle="italic" color="black" display="inline">
                {" "}
                LOG OUT
              </Box>
              .
            </Typography>
          </li>
          <li>
            <Typography
              component="rule1"
              variant="overline"
              align="left"
              color="primary"
              style={{ fontWeight: 90, fontFamily: "Ebit" }}
            >
              If you are logged in as a teacher, there will be an additional
              <Box fontStyle="italic" color="black" display="inline">
                {" "}
                MY CLASSES
              </Box>{" "}
              option in the
              <Box fontStyle="italic" color="black" display="inline">
                {" "}
                MENU
              </Box>{" "}
              which allows you to add and remove students from your group.
            </Typography>
          </li>
        </ul>

        <div class="home">
          <img src={require("../../assets/home2.png")} />
        </div>
      </div>

      <div class="rules">
        <Typography
          variant="body1"
          align="left"
          color="secondary"
          style={{ fontWeight: 90, fontFamily: "Ebit" }}
        >
          Basic Controls
        </Typography>
        <ul>
          <li>
            <Typography
              component="rule1"
              variant="overline"
              align="left"
              color="primary"
              style={{ fontWeight: 90, fontFamily: "Ebit" }}
            >
              Press the
              <mark class="blue">
                <Box fontStyle="italic" color="black" display="inline">
                  {" "}
                  SPACE BAR
                </Box>
              </mark>{" "}
              to make your character jump and use the
              <mark class="blue">
                <Box fontStyle="italic" color="black" display="inline">
                  {" "}
                  LEFT
                </Box>
              </mark>{" "}
              or
              <mark class="blue">
                <Box fontStyle="italic" color="black" display="inline">
                  {" "}
                  RIGHT
                </Box>
              </mark>{" "}
              keys to control your character’s directions.
            </Typography>
          </li>
          <li>
            <Typography
              component="rule1"
              variant="overline"
              align="left"
              color="primary"
              style={{ fontWeight: 90, fontFamily: "Ebit" }}
            >
              Occasionally, you may encounter a software engineering related
              question. Simply answer the question to continue playing the game!
            </Typography>
          </li>
        </ul>

        <div class="arrow_img">
          <img src={require("../../assets/key_arrows.png")} />
        </div>

        <div class="space_img">
          <img src={require("../../assets/space.png")} />
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
