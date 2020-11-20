import React from "react";
import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";
import TimeIcon from "../../assets/time.png";
import ScoreIcon from "../../assets/score.png";
import ImproveIcon from "../../assets/improve.png";
import LanguageIcon from "../../assets/language.png";

const axios = require("axios").default;

const t = {
  minutes: {
    title: "average minutes spent",
    text: "77.3",
    icon: TimeIcon,
  },
  score: {
    title: "average score (across all worlds)",
    text: "89.2",
    icon: ScoreIcon,
  },
  improvement: {
    title: "improvement rate",
    text: "34.3%",
    icon: ImproveIcon,
  },
  perfect: {
    title: "perfect scores",
    text: "32",
    icon: LanguageIcon,
  },
};

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

const DataCard = (props) => {
  const classes = useStyles();
  const apiURL =
    "http://localhost:3001/api/groups/" + props.group + "/statistics";

  const [types, setTypes] = React.useState(t);
  const details = types[props.title];

  React.useEffect(() => {
    Promise.all([
      axios.post(apiURL, { type: "getAverageMinutes" }),
      axios.post(apiURL, { type: "getAverageScore" }),
      axios.post(apiURL, { type: "getCompletionRate" }),
    ]).then((val) => {
      const newTypes = { ...types };
      newTypes.score.text = val[1].data;
      newTypes.minutes.text = val[0].data;
      setTypes(newTypes);
    });
  }, []);

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.container}>
          <img src={details.icon} height={40} width={40} color={"blue"} />
          <div className={classes.textContainer}>
            <Typography variant="h5" style={{ fontWeight: 800 }}>
              {details.text}
            </Typography>
            <Typography variant="caption" align="center">
              {details.title.toUpperCase()}
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

export default DataCard;
