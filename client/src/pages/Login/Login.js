import React from "react";
import {
  Button,
  TextField,
  Paper,
  Box,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect, useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import Background from "../../assets/panama-aw139-520.jpg";
import Background2 from "../../assets/depositphotos_64414801-stock-photo-us-air-force-digital-tigerstripe.jpg";

function Login() {
  const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: "100vh",
    },
    image: {
      backgroundImage: `url(${Background})`,
      backgroundRepeat: "no-repeat",
      backgroundColor:
        theme.palette.type === "light"
          ? theme.palette.grey[50]
          : theme.palette.grey[900],
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    image2: {
      backgroundImage: `url(${Background2})`,
      backgroundRepeat: "no-repeat",
      backgroundColor:
        theme.palette.type === "light"
          ? theme.palette.grey[50]
          : theme.palette.grey[900],
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    paper: {
      margin: theme.spacing(15, 4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(4),
    },
    submit: {
      backgroundColor: theme.palette.primary.main,
      margin: theme.spacing(3, 0, 2),
      fontWeight: "bold",
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
    inputs: {
      backgroundColor:
        theme.palette.type === "light"
          ? theme.palette.grey[50]
          : theme.palette.grey[900],
    },
  }));
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <Helmet title="Iniciar sesión" />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        className={classes.image2}
        elevation={6}
        square
      >
        <div className={classes.paper}>
          <Typography
            component="h1"
            variant="h2"
            style={{ fontFamily: "Audiowide", fontWeight: "cursive" }}
          >
            Misiones Aeronavales
          </Typography>
          <form className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Cedula"
              autoComplete="cedula"
              //   value={username}
              //   onChange={(e) => setUserName(e.target.value)}
              autoFocus
              name="cedula"
              className={classes.inputs}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Contraseña"
              type="password"
              autoComplete="current-password"
              //   value={password}
              name="password"
              className={classes.inputs}

              //onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              style={{ fontFamily: "Audiowide", fontWeight: "cursive" }}
            >
              Entrar
            </Button>
            <Box mt={5}>
              <Typography
                variant="body2"
                color="textPrimary"
                align="center"
                style={{ fontFamily: "Audiowide", fontWeight: "cursive" }}
              >
                {`Copyright ${`Telematica`} © `}
                {new Date().getFullYear()}
                {"."}
              </Typography>
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default Login;
