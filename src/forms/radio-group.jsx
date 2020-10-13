import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="female" control={<Radio/>} label="Female" />
        <FormControlLabel value="male"   control={<Radio/>} label="Male" />
        <FormControlLabel value="other"  control={<Radio/>} label="Other" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="(Disabled option)"
        />
      </RadioGroup>
    </FormControl>
    
    <Grid item xs={12}>
        <Paper className="">
 <Grid container spacing={2}>  
<Grid item xs={5}> <div className="des-redio">
    <FormControlLabel
          value="start"
          control={<Radio color="primary" />}
          label="Start"
        />
        <p>Optional description goes here lorem ipsum dolor sit amet consectetur.</p>
    </div>  </Grid> 

    <Grid item xs={5}> <div className="des-redio active">
    <FormControlLabel
          value="start"
          control={<Radio color="primary" />}
          label="Start"
        />
        <p>Optional description goes here lorem ipsum dolor sit amet consectetur.</p>
    </div>  </Grid>

   </Grid>
       
          </Paper>   </Grid>


    </div>
  
  );
}
