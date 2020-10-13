import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
   <div>
     <div>
     <FormGroup row>
     
     <FormControlLabel
       control={
         <Checkbox
           checked={state.checkedB}
           onChange={handleChange}
           name="checkedB"
           color="primary"
         />
       }
       label="Primary"
     />

     <FormControlLabel
       disabled
       control={<Checkbox name="checkedD" />}
       label="Disabled option"
     />
     <FormControlLabel
       disabled
       control={<Checkbox checked name="checkedE" />}
       label="Disabled option"
     />
       
   </FormGroup>
     </div>
     <div>
  <div className="marginT30">
  <Grid item xs={12}>
        <Paper className="">
 <Grid container spacing={2}>  
<Grid item xs={5}> <div className="acc-checkbox-wraper">
  
<FormGroup row>
     
     <FormControlLabel
       control={
         <Checkbox
           checked={state.checkedB}
           onChange={handleChange}
           name="checkedB"
           color="primary"
         />
       }
       label="Primary"
     />

   </FormGroup>
    </div>  </Grid> 

    <Grid item xs={5}> <div className="acc-checkbox-wraper active">
    <FormGroup row>
     
     <FormControlLabel
       control={
         <Checkbox
           checked={state.checkedB}
           onChange={handleChange}
           name="checkedB"
           color="primary"
         />
       }
       label="Primary"
     />

   </FormGroup>

    </div>  </Grid>

   </Grid>
       
          </Paper>   </Grid>

 
  </div>
       
        </div>
   </div>


  );
}
