import React from "react";
import { Grid, Typography, Tabs, Tab, Box, Button } from "@material-ui/core";
import getSprite from "../../utils/getSprite";
import PropTypes from "prop-types";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./Profile2.css";
import CustomTable from "./../../utils/CustomTable";

const _ = require("lodash");
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tbp-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {children}
      {/* {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )} */}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const token = localStorage.getItem("token");
const apiURL = "http://localhost:3001/api/users/me";
const axios = require("axios").default;
const config = {
  headers: {
    "x-token": token,
  },
};

const Profile2 = () => {
  const [rows, setRows] = React.useState([
    { World: 1, Level: 1, score: 10 },
    { World: 2, Level: 2, score: 23 },
    { World: 3, Level: 3, score: 33 },
    { World: 4, Level: 4, score: 50 },
  ]);
  const [value, setValue] = React.useState(0);
  const [user, setUser] = React.useState({
    fullName: "",
    email: "",
    userName: "",
    phoneNumber: "",
    group: "",
  });
  const [sprite, setSprite] = React.useState(parseInt(getSprite().charAt(3)));
  const [toChange, setChange] = React.useState({
    profile: false,
    sprite: false,
    password: false,
    newNumError: "",
    newPasswordError: "",
  });
  const [newNumber, setNewNumber] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const handleChange = (e, v) => {
    setValue(v);
  };

  const handleSubmit = (e) => {
    console.log(e.currentTarget.id);
    const newChange = { ...toChange };
    newChange[e.currentTarget.id] = true;
    setChange(newChange);
  };

  const saveSprite = () => {
    const data = JSON.parse(localStorage.getItem("data"));
    data.sprite = "WarriorType" + sprite;
    localStorage.setItem("data", JSON.stringify(data));
    axios
      .put(`http://localhost:3001/api/playerdata/${data.username}`, {
        spriteNumber: sprite,
      })
      .then((r) => {
        console.log(r);
      })
      .catch((res) => {
        console.log(res);
      });
    const newChange = { ...toChange };
    newChange.sprite = false;
    setChange(newChange);
  };

  const saveNumber = (e) => {
    axios
      .put(
        "http://localhost:3001/api/users",
        { phoneNumber: newNumber },
        config
      )
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        const newChange = { ...toChange };
        newChange.newNumError = err.response.data;
        setChange(newChange);
      });
  };

  const savePassword = (e) => {
    const newChange = { ...toChange };
    newChange.newPasswordError =
      "There has been an error trying to change your password. Please contact admin for support.";
    setChange(newChange);
  };

  React.useEffect(() => {
    axios
      .get(apiURL, config)
      .then((res) => {
        console.log(res);
        setUser(
          _.pick(res.data, [
            "fullName",
            "email",
            "group",
            "phoneNumber",
            "userName",
            "score",
          ])
        );
        const newRows = [];
        for (let i = 0; i < 3; i++) {
          if (i < res.data.score.length) {
            for (let j = 0; j < 3; j++) {
              if (j < res.data.score[i].levels.length) {
                let score = res.data.score[i].levels[j];
                if (!score) {
                  score = 0;
                }
                let newObj = { World: i + 1, Level: j + 1, score };
                newRows.push(newObj);
              }
            }
          }
        }
        setRows(newRows);
      })
      .catch(({ response }) => {
        console.log(response);
      });
  }, []);
  return (
    <div className="box">
      <Grid container direction="row" className="innerBox">
        <Grid className="profileInfo">
          <Tabs
            value={value}
            aria-label="simple tabs example"
            onChange={handleChange}
          >
            <Tab label="Account Information" {...a11yProps(0)} />
            <Tab label="Scores" {...a11yProps(1)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Grid container className="innerBox">
              <Grid item className="account-info">
                <Typography className="acc">
                  Name: <em>{user.fullName}</em>
                </Typography>
                <Typography className="acc">
                  Group:{" "}
                  <em>
                    {user.group === -1 ? "No Group Assigned." : user.group + 1}
                  </em>
                </Typography>
                <Typography className="acc">
                  NTU Email: <em>{user.email}</em>
                </Typography>
                <Typography className="acc">
                  Contact: <em>{user.phoneNumber}</em>
                </Typography>
              </Grid>
              <Grid item className="buttons">
                <Button
                  onClick={handleSubmit}
                  id="profile"
                  disabled={toChange.profile}
                  className="prominentButton"
                >
                  Edit Profile
                </Button>
                {toChange.sprite ? (
                  <Button
                    style={{ backgroundColor: "red" }}
                    onClick={saveSprite}
                  >
                    Save Sprite
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    id="sprite"
                    disabled={toChange.sprite}
                    className="prominentButton"
                  >
                    Change Sprite
                  </Button>
                )}
                <Button
                  onClick={handleSubmit}
                  id="password"
                  disabled={toChange.password}
                  className="prominentButton"
                >
                  Change Password
                </Button>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1} className="tableview">
            <CustomTable
              tableHeaders={["World", "Level", "score", "Share!"]}
              tableRows={rows}
              rowsPerPage={3}
            />
          </TabPanel>
        </Grid>
        <Grid className="profileImage">
          <Typography style={{ textAlign: "center" }}>
            {user.userName}
          </Typography>
          <Button
            onClick={() => {
              if (sprite - 1 == 0) {
                setSprite(4);
              } else {
                setSprite(sprite - 1);
              }
            }}
            className={toChange.sprite ? "" : "hideButton"}
          >
            <ArrowBackIosIcon />
          </Button>
          <img
            className="profileAvatar"
            width={100}
            height={100}
            src={require("../../assets/" + "Gif" + sprite + ".gif")}
          />
          <Button
            onClick={() => {
              if (sprite + 1 == 5) {
                setSprite(1);
              } else {
                setSprite(sprite + 1);
              }
            }}
            className={toChange.sprite ? "" : "hideButton"}
          >
            <ArrowForwardIosIcon />
          </Button>
        </Grid>
      </Grid>
      <Dialog
        open={toChange.profile}
        onClose={() => {
          const newChange = { ...toChange };
          newChange.profile = false;
          setChange(newChange);
        }}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Profile</DialogTitle>
        <DialogContent style={{ backgroundColor: "grey" }}>
          <DialogContentText>
            You may only change your handphone number at the moment.
          </DialogContentText>
          <form>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="(+65)"
              value={newNumber}
              onChange={(e) => {
                setNewNumber(e.target.value);
              }}
              fullWidth
            />
          </form>
          <Typography style={{ color: "orange", fontSize: "12px" }}>
            {toChange.newNumError}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={saveNumber} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={toChange.password}
        onClose={() => {
          const newChange = { ...toChange };
          newChange.password = false;
          setChange(newChange);
        }}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Change Password</DialogTitle>
        <DialogContent style={{ backgroundColor: "grey" }}>
          <DialogContentText>Enter your new password.</DialogContentText>
          <form>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Password"
              type="password"
              fullWidth
            />
          </form>
          <Typography style={{ color: "orange", fontSize: "12px" }}>
            {toChange.newPasswordError}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={savePassword} color="primary">
            Change Password
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Profile2;
