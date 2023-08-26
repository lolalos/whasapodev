import React, { useState, useContext } from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  InputAdornment,
  IconButton,
  Link as MUILink
} from '@material-ui/core';

import { Visibility, VisibilityOff } from '@material-ui/icons';

import { makeStyles } from "@material-ui/core/styles";

import { i18n } from "../../translate/i18n";

import { AuthContext } from "../../context/Auth/AuthContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "url('http://www.whasapo.online/wp-content/uploads/2023/08/pintura-digital-montana-arbol-colorido-primer-plano-scaled-1.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  },
  paperContainer: {
    background: "white", // Fondo blanco para el formulario
    borderRadius: "8px",
    padding: theme.spacing(3),
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Sombra
  },
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    width: "100%", // Logo a tamaño completo
    marginBottom: theme.spacing(2),
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  copyrightText: {
    marginTop: theme.spacing(2),
    textAlign: "center",
    fontWeight: "bold", // Texto en negrita
    color: theme.palette.text.secondary, // Cambiar color del texto
  },
}));

const Login = () => {
  const classes = useStyles();

  const [user, setUser] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const { handleLogin } = useContext(AuthContext);

  const handleChangeInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(user);
  };

  return (
    <div className={classes.root}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paperContainer}>
          <div className={classes.paper}>
            <img
              className={classes.logo}
              src="http://www.whasapo.online/wp-content/uploads/2023/06/logologin.png"
              alt="Logo"
            />
            <Typography component="h1" variant="h5">
              {i18n.t("login.title")}
            </Typography>
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label={i18n.t("login.form.email")}
                name="email"
                value={user.email}
                onChange={handleChangeInput}
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label={i18n.t("login.form.password")}
                id="password"
                value={user.password}
                onChange={handleChangeInput}
                autoComplete="current-password"
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword((e) => !e)}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                {i18n.t("login.buttons.submit")}
              </Button>
            </form>
          </div>
        </div>
        <Box mt={8}>
          <Typography
            className={classes.copyrightText}
            variant="body2"
          >
            © 2023 WHASAPO DEV. Todos los derechos reservados. <MUILink href="https://whasapo.online/dev/" target="_blank" rel="noopener">whasapo.online</MUILink>
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
