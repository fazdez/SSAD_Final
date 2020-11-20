import React from "react";
import DataCard from "../analytics/DataCard";
import LineChartCard from "../analytics/LineChartCard";
import RadarChartCard from "../analytics/RadarChartCard";
import ProgressCard from "../analytics/ProgressCard";
import BoxPlotChart from "../analytics/BoxPlotCard";
import TitleCard from "../analytics/TitleCard";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline, Container, Grid, Typography } from "@material-ui/core";

const token = localStorage.getItem("token");
const apiURL = "http://localhost:3001/api/users/me";
const axios = require("axios").default;
const config = {
  headers: {
    "x-token": token,
  },
};

const UserAnalytics = (props) => {
  const classes = useStyles();
  const [group, setGroup] = React.useState(-1);

  React.useEffect(() => {
    axios
      .get(apiURL, config)
      .then((res) => {
        setGroup(res.data.group);
      })
      .catch(({ response }) => {
        console.log(response);
      });
  });

  return group === -1 ? (
    <div className={classes.root} style={{ marginLeft: "200px" }}>
      <Typography>
        Oops! You need to be assigned a group first. Contact the head teacher or
        admin for more information.
      </Typography>
    </div>
  ) : (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid item container xs={12} spacing={2}>
          <Grid item className={classes.card} xs={12}>
            <TitleCard group={group} />
          </Grid>
          <Grid item className={classes.card} xs={6}>
            <DataCard title={"minutes"} group={group} />
          </Grid>
          <Grid item className={classes.card} xs={6}>
            <DataCard title={"score"} group={group} />
          </Grid>
          {/* <Grid item className={classes.card} xs={3}>
            <DataCard title={"improvement"} />
          </Grid>
          <Grid item className={classes.card} xs={3}>
            <DataCard title={"perfect"} />
          </Grid> */}
        </Grid>
        {/* <Grid item xs={4}>
          <LineChartCard />
        </Grid> */}
        <Grid item xs={4} className={classes.radar}>
          <RadarChartCard group={group} />
        </Grid>
        <Grid item xs={8}>
          <ProgressCard group={group} />
        </Grid>
        <Grid item xs={12}>
          <BoxPlotChart group={group} />
        </Grid>
      </Grid>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
  },
  radar: {},
}));

export default UserAnalytics;
