import CodeIcon from '@mui/icons-material/Code';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Register from '../../features/Auth/components/Register';

const theme = createTheme();

const useStyles = makeStyles({
  root: {
    color: '#FFF',
    textDecoration: 'none',
  },
});

export default function ButtonAppBar() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <>
      <ThemeProvider theme={theme}>
        <div>
          <AppBar position='static'>
            <Toolbar>
              <CodeIcon size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }} />
              <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                <Link className={classes.root} to='/'>
                  Shopping Online
                </Link>
              </Typography>

              <NavLink to='/todos' className={classes.root}>
                <Button color='inherit'>Todos</Button>
              </NavLink>

              <Button color='inherit' className={classes.root}>
                Albums
              </Button>

              <Button color='inherit' onClick={handleClickOpen}>Register</Button>
            </Toolbar>
          </AppBar>
        </div>
      </ThemeProvider>

      <div>
        <Dialog disableEscapeKeyDown  onClose={(_, reason) => {
          if (reason !== "backdropClick") {
            handleClose();
          }
        }} open={open}>
          <DialogTitle>Subscribe</DialogTitle>
          <DialogContent>
            <Register/>
            {/* <TextField
              autoFocus
              margin='dense'
              id='name'
              label='Email Address'
              type='email'
              fullWidth
              variant='standard'
            /> */}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Subscribe</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
