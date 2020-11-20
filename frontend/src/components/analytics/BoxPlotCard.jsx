import React from "react";
import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";
import "../../../node_modules/react-vis/dist/style.css";
import {
  Chart,
  Point,
  View,
  Tooltip,
  Schema,
  Axis,
  Interaction,
} from "bizcharts";
import { DataView } from "@antv/data-set";
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
    padding: 5,
    paddingLeft: 15,
    display: "flex",
    justifyContent: "center",
    minHeight: 420,
  },
  title: {
    fontSize: 26,
    fontWeight: 800,
    textTransform: "uppercase",
    fontFamily: "EBit",
    paddingBottom: 20,
  },
  graphContainer: {
    width: "100%",
  },
}));

const d = [
  { x: "1", low: 1, q1: 9, median: 16, q3: 22, high: 24 },
  { x: "2", low: 1, q1: 5, median: 8, q3: 12, high: 16 },
  { x: "3", low: 1, q1: 8, median: 12, q3: 19, high: 26 },
];

const BoxPlotCard = ({ group }) => {
  const classes = useStyles();
  const [data, setData] = React.useState(d);

  React.useEffect(() => {
    axios
      .post(apiURL + group + "/statistics", { type: "getBoxPlotStats" })
      .then((v) => {
        console.log(v.data);
        const newData = v.data;
        setData(newData);
      });
  }, []);

  const dv = new DataView().source(data);

  dv.transform({
    type: "map",
    callback: (obj) => {
      obj.range = [obj.low, obj.q1, obj.median, obj.q3, obj.high];
      return obj;
    },
  });

  return (
    <Card className={classes.root}>
      <CardContent className={classes.graphContainer}>
        <Typography variant="overline">Class Performance</Typography>
        <div className={classes.title}>Level Scores</div>
        <Chart
          height={300}
          data={dv.rows}
          autoFit
          scale={{
            range: {
              max: 1600,
              nice: true,
            },
          }}
        >
          <Tooltip
            showTitle={false}
            showMarkers={false}
            itemTpl={
              '<li class="g2-tooltip-list-item" data-index={index} style="margin-bottom:4px;">' +
              '<span style="background-color:{color};" class="g2-tooltip-marker"></span>' +
              "{name}<br/>" +
              '<span style="padding-left: 16px">high</span><br/>' +
              '<span style="padding-left: 16px">q3</span><br/>' +
              '<span style="padding-left: 16px">median</span><br/>' +
              '<span style="padding-left: 16px">q1</span><br/>' +
              '<span style="padding-left: 16px">low</span><br/>' +
              "</li>"
            }
          />
          <Schema
            position={"x*range"}
            shape="box"
            style={{
              stroke: "#545454",
              fill: "#1890FF",
              fillOpacity: 0.3,
            }}
            tooltip={[
              "x*low*q1*median*q3*high",
              (x, low, q1, median, q3, high) => {
                return {
                  name: x,
                  low,
                  q1,
                  median,
                  q3,
                  high,
                };
              },
            ]}
          />
          <Interaction type={"active-region"} />
        </Chart>
      </CardContent>
    </Card>
  );
};

export default BoxPlotCard;
