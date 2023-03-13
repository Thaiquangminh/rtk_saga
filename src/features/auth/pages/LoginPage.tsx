import { Grid, Paper, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const LoginPage = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid className={classes.root}>
        <Paper className={classes.paper}>
          <div className={classes.title}>Student Management</div>
          <button className={classes.btn}>FAKE LOGIN</button>
        </Paper>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "800px",
  },

  paper: {
    width: "400px",
    height: "200px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: "30px",
    marginTop: "40px",
  },
  btn: {
    backgroundColor: "pink",
    marginTop: "40px",
    width: "180px",
    height: "50px",
    cursor: "pointer",
  },
}));
export default LoginPage;
