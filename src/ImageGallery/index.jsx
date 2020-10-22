import React, { useContext, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
import Grid from '@material-ui/core/Grid';
import { ImageGalleryContext } from "./contexts/ImageGalleryContext";
import { GalleryTabContext } from "./contexts/GalleryTabContext";
import { DisplayImageSliderContext } from "./contexts/DisplayImageSliderContext";
import { ImageBarSliderContext } from "./contexts/ImageBarSliderContext";

import { chunks as createChunks, populateFalseArray } from "./utils";

import DisplayImage from "./display-image";
import ImageBar from "./image-bar";
import GalleryTabs from "./gallery-tabs";

import './_gallery.css';

const useStyles = makeStyles({
  relative: {
    position: 'relative',
  },
  galleryWrap: {
    overflow: 'Hidden',
    position: 'relative'
  }
});

const ImageGallery = ({ imagesList, tabs, defaultTab, chunkSize }) => {
  const { updateImageList, updateChunkSize, updateImageChunks } = useContext(ImageGalleryContext);
  const { updateActiveTab, updateTabs } = useContext(GalleryTabContext);
  const { updateDIsliderChecked } = useContext(DisplayImageSliderContext);
  const { updateIBsliderChecked } = useContext(ImageBarSliderContext);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    let imageChunks = createChunks(imagesList[defaultTab], chunkSize);
    updateTabs(tabs)
    updateActiveTab(defaultTab);
    updateImageList(imagesList);
    updateImageChunks(imageChunks);
    updateDIsliderChecked([true, ...populateFalseArray(imagesList[defaultTab].length - 1)])
    updateIBsliderChecked([true, ...populateFalseArray(imageChunks.length - 1)])
    updateChunkSize(chunkSize);

  }, []);

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        className="MuiButton-outlinedSecondary"
        onClick={handleClickOpen}
      >
        Open alert dialog
      </Button>

      <Dialog
        open={open}
        fullWidth={true}
        maxWidth='lg'
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <div className="close-dialog">
            {" "}
            <CloseIcon className="iconSize42" onClick={handleClose} />{" "}
          </div>
        </DialogTitle>
        <DialogContent>
          <GalleryTabs></GalleryTabs>
          <Grid container spacing={4} className="marginT20">
            <Grid item xs={9} className={classes.galleryWrap}>
              <DisplayImage></DisplayImage>
              <ImageBar></ImageBar>

            </Grid>
            <Grid item xs={3}> Advertisement </Grid>
          </Grid>
          <DialogContentText id="alert-dialog-description"></DialogContentText>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default ImageGallery;
