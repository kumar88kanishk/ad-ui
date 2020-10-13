import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";

export default function MyDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { ActiveImage, ImageBar, GalleryTabs } = props;
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
          <ActiveImage></ActiveImage>
          <ImageBar></ImageBar>
          <DialogContentText id="alert-dialog-description"></DialogContentText>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
