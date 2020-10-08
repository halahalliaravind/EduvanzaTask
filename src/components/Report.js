import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../components/withRoot";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TT from "@material-ui/core/Tooltip";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  Legend,
  ScatterChart,
  Scatter,
  ZAxis
} from "recharts";
import { data, data01, data02 } from "../data.js";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  avatar: {
    flex: 1
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing.unit
  },
});

class Report extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24} style={{ padding: 24 }}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart
                  data={data}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart
                  data={data}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="uv"
                    stroke="#8884d8"
                    fill="#8884d8"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <TT title="Sweet">
              <Paper className={classes.paper}>
                <ResponsiveContainer width="100%" height={200}>
                  <ScatterChart
                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                  >
                    <XAxis
                      type="number"
                      dataKey={"x"}
                      name="stature"
                      unit="cm"
                    />
                    <YAxis
                      type="number"
                      dataKey={"y"}
                      name="weight"
                      unit="kg"
                    />
                    <ZAxis
                      dataKey={"z"}
                      range={[60, 400]}
                      name="score"
                      unit="km"
                    />
                    <CartesianGrid />
                    <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                    <Legend />
                    <Scatter
                      name="A school"
                      data={data01}
                      fill="#8884d8"
                      shape="star"
                    />
                    <Scatter
                      name="B school"
                      data={data02}
                      fill="#82ca9d"
                      shape="triangle"
                    />
                  </ScatterChart>
                </ResponsiveContainer>
              </Paper>
            </TT>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(Report));