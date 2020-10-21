import React, { useState, useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { GalleryTabContext, tabs } from "./contexts/GalleryTabContext";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
  },
});

const GalleryTabs = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const { updateActiveTab } = useContext(GalleryTabContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    updateActiveTab(newValue);

  };

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        {tabs.map((tab, index) => <Tab key={index} label={tab} />)}

      </Tabs>
    </Paper>
  );
}

export default GalleryTabs;
