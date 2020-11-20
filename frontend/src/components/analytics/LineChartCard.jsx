import React from 'react';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core'
import '../../../node_modules/react-vis/dist/style.css';
import { XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis } from 'react-vis';

const useStyles = makeStyles((theme) => ({
    root: {
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
            backgroundColor: theme.palette.primary.main
        },
        padding: 5,
        paddingLeft: 15,
        display: 'flex',
        flexDirection: "row",
    },
    title: {
        fontSize: 26,
        fontWeight: 800,
        textTransform: "uppercase",
        fontFamily: 'EBit'
    }
}))
const data = [
    { x: 0, y: 8 },
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 3, y: 9 },
    { x: 4, y: 1 },
    { x: 5, y: 7 },
    { x: 6, y: 6 },
    { x: 7, y: 3 },
    { x: 8, y: 2 },
    { x: 9, y: 0 }
];

const LineChartCard = ({ }) => {

    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="overline">
                    Scores over time
                </Typography>
                <div className={classes.title}>Improvement Graph</div>
                {/* <Typography variant="h6">
                    <b>CONSISTENCY GRAPH</b>
                </Typography> */}
                <XYPlot height={300} width={750}>
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />
                    <LineSeries data={data} curve={"curveBasis"} />
                </XYPlot>
            </CardContent>
        </Card>
    )

};

export default LineChartCard;