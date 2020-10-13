import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import LaunchIcon from '@material-ui/icons/Launch';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));




export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div>
  <div class="styleg-row">
    <div class="styleg-row__css">
        <span class="styleg-row__css-class-name">.MuiButton-containedPrimary, .MuiButton-outlinedSecondary, .MuiButton-tertiary </span>

    </div>
    <div class="styleg-row__example">
   
<Button className="MuiButton-containedPrimary">
  Primary
</Button>
<Button className="MuiButton-outlinedSecondary">
  Secondary
</Button>
<Button className="MuiButton-tertiary">
Tertiary
</Button>

    </div>
</div>

 <div class="styleg-row">
    <div class="styleg-row__css">
        <span class="styleg-row__css-class-name">.Mui-disabled, or [disabled attr]  </span>

    </div>
    <div class="styleg-row__example">

<Button disabled>
  Mui-disabled
</Button>


    </div>
</div>

 <div class="styleg-row">
    <div class="styleg-row__css">
        <span class="styleg-row__css-class-name"> Buttons With Extranal Links </span>

    </div>
    <div class="styleg-row__example">
   
    <Button className="MuiButton-containedPrimary">
  Primary  <LaunchIcon/>
</Button>
<Button className="MuiButton-outlinedSecondary">
  Secondary <LaunchIcon className="iconSize18"/>
</Button>

<Button className="MuiButton-tertiary">
  Primary   <LaunchIcon className="iconSize18"/>
</Button>
    </div>
</div>

 <div class="styleg-row">
    <div class="styleg-row__css">
        <span class="styleg-row__css-class-name"> .Mui-scroll-btn </span>

    </div>
    <div class="styleg-row__example">


<IconButton component="span" className="Mui-scroll-btn">
          <KeyboardArrowDownIcon />
        </IconButton>

<IconButton component="span" className="Mui-scroll-btn">
          <KeyboardArrowUpIcon/>
        </IconButton>  




    </div>
</div>



    </div>
  




    /* <div className={classes.root}>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button> 
    </div>*/
  );
}
