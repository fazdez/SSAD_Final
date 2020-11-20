import React from "react";
import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";
import "../../../node_modules/react-vis/dist/style.css";
import { RadarChart, CircularGridLines } from "react-vis";
import { Chart, Line, Coordinate } from "bizcharts";

const useStyles = makeStyles((theme) => ({
  root: {
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
      backgroundColor: theme.palette.primary.main,
    },
    padding: 5,
    paddingLeft: 15,
    display: "flex",
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: 800,
    textTransform: "uppercase",
    fontFamily: "EBit",
    marginBottom: 10,
  },
  graphContainer: {
    width: "100%",
  },
}));

const axios = require("axios").default;
const apiURL = "http://localhost:3001/api/groups/";

const RadarChartCard = ({ group }) => {
  const classes = useStyles();
  const [data, setData] = React.useState([
    { item: "Dynamic Programming", value: 70 },
    { item: "Regex", value: 60 },
    { item: "Sorting", value: 50 },
    { item: "Data Structures", value: 40 },
    { item: "Graphs", value: 60 },
    { item: "Searching", value: 70 },
  ]);

  React.useState(() => {
    axios
      .post(apiURL + group + "/statistics", { type: "getScoreByWorld" })
      .then((res) => {
        console.log(res.data);
        const numStudents = parseInt(Object.keys(res.data)[0]);
        const newData = [
          {
            item: "              General",
            value: (res.data[numStudents][0] / numStudents).toPrecision(3),
          },
          {
            item: "UML",
            value: (res.data[numStudents][1] / numStudents).toPrecision(3),
          },
          {
            item: "Architecture",
            value: (res.data[numStudents][2] / numStudents).toPrecision(3),
          },
        ];

        setData(newData);
      });
  });
  return (
    <Card className={classes.root}>
      <CardContent className={classes.graphContainer}>
        <Typography variant="overline">Holistic Performance</Typography>
        <div className={classes.title}>Topic Scores</div>
        <Chart
          height={290}
          data={data}
          autoFit
          scale={{
            value: {
              min: 0,
              max: 2500,
            },
          }}
        >
          <Coordinate type="polar" radius={1} />
          <Line position="item*value" size="3" />
        </Chart>
      </CardContent>
    </Card>
  );
};

export default RadarChartCard;
