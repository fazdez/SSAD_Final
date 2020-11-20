import React from "react";
import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";
const axios = require("axios").default;
const apiURL = "http://localhost:3001/api/groups/";
const useStyles = makeStyles((theme) => ({
  root: {
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
      backgroundColor: theme.palette.primary.main,
    },
    display: "flex",
    paddingLeft: 16,
    paddingTop: 5,
    // border: "5px solid",
    // backgroundColor: theme.palette.primary.main
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    marginLeft: 14,
  },
}));

const TitleCard = (props) => {
  const { group } = props;
  const [size, setSize] = React.useState(0);
  React.useEffect(() => {
    Promise.all([
      axios.post(apiURL + group + "/statistics", { type: "getCompletionRate" }),
    ]).then((val) => {
      setSize(val[0].data.numStudents);
    });
  });
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.container}>
          <img
            src={require("./../../assets/link_walk.gif")}
            height={40}
            width={35}
            style={{ paddingRight: 10 }}
          />
          <div className={classes.textContainer}>
            <Typography variant="h5" style={{ fontWeight: 800 }}>
              GroupID: {group + 1}
            </Typography>
            <Typography variant="caption" align="center">
              Size: {size}
            </Typography>
          </div>
        </div>
        {/* <Typography variant="body1">
                    You are the top <b>11%</b> of users. Good job!
                </Typography> */}
      </CardContent>
    </Card>
  );
};

export default TitleCard;
