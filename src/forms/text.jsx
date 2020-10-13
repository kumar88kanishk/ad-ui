import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
         <TextField
          label="Enter a [label]"
          id="filled-margin-none"
          variant="filled"
        /> 
 <TextField
          label="Disabled Input"
          id="filled-margin-none"
          variant="filled"
          disabled
        />
  
  <TextField
          error
          id="outlined-error-helper-text"
          label="Error"
          defaultValue="Enter a [label]"
          variant="filled"
        />

      </div>
    </form>
  );
}
