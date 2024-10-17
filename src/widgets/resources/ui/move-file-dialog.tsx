import React, { useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";
import { showDialog } from '@/app/services/slice';
import { useAppDispatch, useAppSelector } from '@/app/services/store';
import { Loader } from "@/shared/loader";
import { SerializedError } from "@reduxjs/toolkit";
import { useGetResources } from "../lib/use-get-resources";

export const MoveFileDialog = () => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useAppDispatch();
  const { activeDialog, activeResource } = useAppSelector((state) => state.app);

  const { data, error, isLoading } = useGetResources();
  const errorMessage = (error as SerializedError)?.message || 'An error occurred';

  if (error) {
    return <div>Error: {errorMessage}</div>;
  }

  if (isLoading) {
    return <Loader />;
  }
  
  useEffect(() => {
    if (activeDialog === 'moveFile') {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [activeDialog]);

  const handleClose = () => {
    setOpen(false);
    dispatch(showDialog(null));
  };
  
  return (
    <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      {"Use Google's location service?"}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        Let Google help apps determine location. This means sending anonymous
        location data to Google, even when no apps are running.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Disagree</Button>
      <Button onClick={handleClose} autoFocus>
        Agree
      </Button>
    </DialogActions>
  </Dialog>
  );
};
