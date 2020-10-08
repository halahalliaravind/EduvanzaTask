import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../../components/withRoot";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TT from "@material-ui/core/Tooltip";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  Legend,
  BarChart,
  Bar,
  // ScatterChart,
  // Scatter,
  // ZAxis,
  PieChart,
  Pie,
} from "recharts";
import { data, data01, data02, data001, data002 } from "../../data.js";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  avatar: {
    flex: 1,
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing.unit,
  },
});

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24} style={{ padding: 24 }}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <ResponsiveContainer width="100%" height={400}>
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
                    dataKey="people"
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
                  <PieChart
                    margin={{ top: 30, right: 20, bottom: 30, left: 20 }}
                  >
                    <Pie
                      dataKey="value"
                      isAnimationActive={false}
                      data={data001}
                      outerRadius={80}
                      fill="#8884d8"
                      label
                    />
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </Paper>
            </TT>
          </Grid>
          <Grid item xs={6}>
            <TT title="Sweet">
              <Paper className={classes.paper}>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart
                    width={500}
                    height={300}
                    data={data002}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                    <Bar dataKey="lv" fill="#D62728" />
                  </BarChart>
                </ResponsiveContainer>
              </Paper>
            </TT>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(Home));
