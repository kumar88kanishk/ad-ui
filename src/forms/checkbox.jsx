import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

export default function Checkboxes() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
     
      <Checkbox
        defaultChecked
        inputProps={{ "aria-label": "secondary checkbox" }}
      />

        <Checkbox
        inputProps={{ "aria-label": "secondary checkbox" }}
      />

        <Checkbox 
        disabled
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
     
    </div>
  );
}
