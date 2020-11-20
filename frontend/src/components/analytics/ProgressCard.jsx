import React from "react";
import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const axios = require("axios").default;
const apiURL = "http://localhost:3001/api/groups/";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 398,
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
      backgroundColor: theme.palette.primary.main,
    },
    padding: 5,
    paddingLeft: 15,
    display: "flex",
  },
  title: {
    fontSize: 26,
    fontWeight: 800,
    textTransform: "uppercase",
    fontFamily: "EBit",
    paddingBottom: 10,
  },
  barContainer: {
    width: 125,
    height: 125,
    paddingLeft: 15,
    paddingTop: 10,
    marginRight: 15,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "80%",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 20,
  },
}));

const ProgressCard = ({ group }) => {
  const classes = useStyles();

  const [percentage, setPercent] = React.useState({
    completionRate: 66.6,
    numStudents: 100,
    completedStudents: 66,
  });

  React.useEffect(() => {
    Promise.all([
      axios.post(apiURL + group + "/statistics", { type: "getCompletionRate" }),
    ]).then((val) => {
      let newRate = { ...percentage };
      newRate = val[0].data;
      setPercent(newRate);
    });
  }, []);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="overline">Class</Typography>
        <div className={classes.title}>Completion Rate</div>
        <div className={classes.container}>
          <div className={classes.barContainer}>
            <CircularProgressbar
              value={percentage.completionRate}
              text={`${percentage.completionRate}%`}
              // styles={buildStyles({ pathColor: "red" })}
              strokeWidth={5}
            />
          </div>
          <div className={classes.textContainer}>
            <Typography variant="subtitle1">
              <b>Total Number of students: </b>
              {percentage.numStudents}
            </Typography>
            <Typography variant="subtitle1">
              <b>No. of Students fully completed: </b>
              {percentage.completedStudents}
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressCard;
