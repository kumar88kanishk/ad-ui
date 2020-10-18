import React, { useContext, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
import Grid from '@material-ui/core/Grid';
import { ImageGalleryContext } from "../contexts/ImageGalleryContext";
import DisplayImage from "./display-image";
import ImageBar from "./image-bar";
import GalleryTabs from "./gallery-tabs";

import './_gallery.css';

const useStyles = makeStyles({
  relative: {
    position: 'relative',
  },
});



const ImageGallery = () => {
  const { updateImageList } = useContext(ImageGalleryContext);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  useEffect(() => {
    updateImageList({
      exterior: [
        {
          url: "/images/1.jpg",
          alt: "1.jpg",
        },
        {
          url: "/images/2.jpg",
          alt: "2.jpg",
        },
        {
          url: "/images/3.jpg",
          alt: "3.jpg",
        },
        {
          url: "/images/4.jpg",
          alt: "4.jpg",
        },
        {
          url: "/images/5.jpg",
          alt: "5.jpg",
        },
      ],
      interior: [
        {
          url: "/images/4.jpg",
          alt: "4.jpg",
        },
        {
          url: "/images/5.jpg",
          alt: "5.jpg",
        },
        {
          url: "/images/6.jpg",
          alt: "6.jpg",
        },
      ],
    });
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
            <Grid item xs={9} className={classes.relative}>
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
