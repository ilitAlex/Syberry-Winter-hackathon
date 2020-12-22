import React, { useContext, useState } from "react";
import clsx from "clsx";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import OutlinedInput from "@material-ui/core/OutlinedInput/OutlinedInput";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import { Context } from "vm";
import { AuthContext } from "../../context/AuthContext";
import { useHttp } from "../../hooks/http.hook";
import "./AuthPage.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "38ch",
      },
      display: "flex",
      flexDirection: "column",
    },
    margin: {
      margin: theme.spacing(1),
    },
    textField: {
      width: "38ch",
    },
    button: {
      width: "12ch",
    },
    auth_btn: {
      width: "38ch",
    },
  })
);

interface State {
  fname: string;
  sname: string;
  email: string;
  password: string;
  showPassword: boolean;
  registration: boolean;
}

export default function AuthPge() {
  const classes = useStyles();
  const auth: Context = useContext(AuthContext);
  const { loading, request, error, clearError } = useHttp();

  const [values, setValues] = useState<State>({
    fname: "",
    sname: "",
    email: "",
    password: "",
    showPassword: false,
    registration: false,
  });

  const handleChange = (prop: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleClickChangeForm = () => {
    setValues({ ...values, registration: !values.registration });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const resetForm = () => {
    setValues({
      fname: "",
      sname: "",
      email: "",
      password: "",
      showPassword: false,
      registration: values.registration,
    });
  };

  const login = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(values.registration);
    // resetForm();
  };
  const registration = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(values.registration);
    // resetForm();
  };

  return (
    <form
      className={classes.root}
      noValidate
      onSubmit={values.registration ? login : registration}
    >
      <div className={clsx(!values.registration && "registration", "column")}>
        <TextField
          id="outlined-required"
          label="First name"
          defaultValue="Hello World"
          variant="outlined"
          value={values.fname}
          onChange={handleChange("fname")}
        />
        <TextField
          id="outlined-required"
          label="Second name"
          variant="outlined"
          value={values.sname}
          onChange={handleChange("sname")}
        />
      </div>
      <TextField
        id="outlined-required"
        variant="outlined"
        label="Email"
        value={values.email}
        onChange={handleChange("email")}
      />
      <FormControl
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
      >
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={70}
        />
      </FormControl>
      <div className="auth_btn">
        <Button
          variant={values.registration ? "outlined" : "contained"}
          color="primary"
          className={classes.button}
          onClick={!values.registration ? registration : handleClickChangeForm}
        >
          Sign in
        </Button>
        <Button
          variant={values.registration ? "contained" : "outlined"}
          color="primary"
          className={classes.button}
          onClick={values.registration ? login : handleClickChangeForm}
        >
          Sign up
        </Button>
        <Button
          onClick={resetForm}
          variant="outlined"
          color="secondary"
          className={classes.button}
          endIcon={<DeleteIcon />}
        >
          Clear
        </Button>
      </div>
    </form>
  );
}
