import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import AppBar from '@material-ui/core/AppBar';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
const useStyles = makeStyles((theme) => ({
  root: {
    padding: '10px 12px',
    display: 'flex',
    alignItems: 'center',
    width: 500,
    
    boxShadow: "0 0 20px 0 rgb(0 0 0 / 30%)"
  },
  
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: "#fff",
    color: "#000", 
    boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2)"
    
    
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function Search() {
  const classes = useStyles();

  return (
      <div className="center-eve" style={{height : '90vh'}}>
           <AppBar position="absolute" className={clsx(classes.appBar)}>
        <Toolbar className={classes.toolbar}>
              <div className={classes.title} style={{display : "flex", flexGrow: 1}}>
            <i class="fa fa-clock-o" aria-hidden="true"></i>
            <Typography component="p" className="emp-tag date" variant="p">
             {Date().toLocaleString().substring(0,24)}
            </Typography>
         
          </div>
         
          <div className="d-flex" >

          <Typography component="p" variant="p" className="emp-tag middle" style={{marginTop : 6}}>
             Hi , Employee
            </Typography>
            <div className="emp-box-app">
                <h1 className="emp-tag-app">EM</h1>
            </div>
             
           
            
           </div>
          
        </Toolbar>
      </AppBar>
    <Paper component="form" className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="consignment no.."
        inputProps={{ 'aria-label': 'search consignment no..' }}
      />
 
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
    </div>
  );
}
