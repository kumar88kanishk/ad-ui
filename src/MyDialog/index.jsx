import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  relative: {
    position: 'relative',
  },
});

export default function MyDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { DisplayImage, ImageBar, GalleryTabs } = props;
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
}
