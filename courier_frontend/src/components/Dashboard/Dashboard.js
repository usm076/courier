import React , {useEffect, useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import {Modal} from 'react-bootstrap'
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems } from './listItems';
import Deposits from './Deposits';
import Orders from './Orders';

import TextField from '@material-ui/core/TextField';
import Title from './Title';
import axios from 'axios';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
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
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
 
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
 
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {
  const packages_data='';
  const axios = require('axios');
  const [count, setCount] = useState(0);
 

  const [state, setState] = useState({
		r_name : '',
		r_nID: '',
		r_address: '',
    r_contact : '',
    s_name : '',
    s_nID : '',
    s_address : '',
    s_contact : ''
		
    });

    const [result, setResult] = useState(null);
    const [Data, setData] = useState([]);

    const  handleSubmit = async event => {
      event.preventDefault();
     
      const token = localStorage.getItem('auth-token');
      axios
        .post('http://localhost:9000/api/addpackage', { ...state }, {headers :{'x-auth-token': token}})
        .then(response => {
          console.log(response);
        })
        .catch(() => {
        setResult({
          success: false,
          message: 'Something went wrong. Try again later'
        });
        });


      //Ends Here
      };
      

      const onInputChange = event => {
        const { name, value } = event.target;
      
        setState({
          ...state,
          [name]: value
        });
        };



    //Ended Here
      
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  const [showStaff, setShowStaff] = useState(false);

  const handleStaffClose = () => setShowStaff(false);
  const handleStaffShow = () => setShowStaff(true);

  useEffect(()=>{
    const token = localStorage.getItem('auth-token');
    
    axios
      .post('http://localhost:9000/dashboarddata',{"name" : "usman"},   {headers :{'x-auth-token': token}})
      .then(response => {
        //console.log(response.data.packages);
        
          packages_data = response.data.packages;
          localStorage.setItem("packages",packages_data);
          setData(packages_data);
          //const rows = [createData(packages_data)];

          console.log(packages_data);
        
        
        
      })
      .catch(() => {
      setResult({
        success: false,
        message: 'Something went wrong. Try again later'
      });
      });
        // const tokn = localStorage.getItem("auth-token");
        // var config = {
        // method: 'post',
        // url: 'http://localhost:9000/dashboarddata',
        // headers: { 
        // 'x-auth-token': tokn
        // }
        // };
        // axios(config)
        // .then(function (response) {
        // console.log(JSON.stringify(response.data));
        // })
        // .catch(function (error) {
        // console.log(error);
        // });

    
    
    
  }, [count])

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.title} style={{display : "flex"}}>
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
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        {open? 
             <React.Fragment>
             <div className="d-flex" >
            <div className="emp-box">
                <h1 className="emp-tag">EM</h1>
            </div>
            <div className="emp-details">   
            <Typography component="p" className="emp-tag" variant="p">
             Employee
            </Typography>
            <Typography component="p" variant="p" className="emp-tag small">
             Welcome Back
            </Typography>
            </div>
        </div>
            </React.Fragment> : null}
        <List>{mainListItems}</List>
       
      {open?  <div class="add-ship">
        <Button variant="contained" style={{background : "#006AEE" , color : "#fff" , width : "82.5%", marginTop : 20}}>
            ADD SHIPMENT
        </Button>
        <Button variant="contained"  onClick={handleStaffShow} style={{background : "#006AEE" , color : "#fff" , width : "82.5%", marginTop : 20}}>
            ADD STAFF
        </Button>
        <Button variant="contained" onClick={handleShow} style={{background : "#006AEE" , color : "#fff" , width : "82.5%", marginTop : 20}}>
            BOOK COURIER
        </Button>
            </div> : null} 
        
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Recent Deposits */}
            <Grid item xs={12} md={12} lg={12}>
            
                <Deposits />
              
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders  mydata={Data}/>
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
      
      <Modal show={show} onHide={handleClose} style={{marginTop: 50}}>
        <Modal.Header closeButton>
         <Typography component="p" className="emp-tag" variant="p">
             BOOK COURIER
         </Typography>
        </Modal.Header>
        <Modal.Body>
            {result && (
            <p className={`${result.success ? 'success' : 'error'}`}>
            {result.message}
            </p>
            )}
            <form onSubmit={handleSubmit}>
              <Title>RECIEVER</Title>    
            
            <div className="text-box">  
            <TextField id="standard-basic" label="Name" name = "r_name" onChange={onInputChange}  value={state.r_name} required />
            <TextField id="standard-basic" label="NID" name = "r_nID" onChange={onInputChange}  value={state.r_nID} required />
            </div>
            <div className="text-box">  
            <TextField id="standard-basic" label="Address" name = "r_address" onChange={onInputChange}  value={state.r_address} required />
            <TextField id="standard-basic" label="Contact No" name = "r_contact" onChange={onInputChange}  value={state.r_contact} required />
            </div>

            <Title>SENDER</Title>    
            
            <div className="text-box">  
            <TextField id="standard-basic" label="Name" name = "s_name" onChange={onInputChange}  value={state.s_name} required/>
            <TextField id="standard-basic" label="CNIC" name = "s_nID" onChange={onInputChange}  value={state.s_nID} required/>
            </div>
            <div className="text-box">  
            <TextField id="standard-basic" label="Address" name = "s_address" onChange={onInputChange}  value={state.s_address} required />
            <TextField id="standard-basic" label="Contact No" name = "s_contact" onChange={onInputChange}  value={state.s_contact} required/>
            </div>

            <div className="center-eve">
            <Button type="submit" variant="contained" style={{background : "#006AEE" , color : "#fff" , width : "82.5%", marginTop : 20}}>
              Submit
            </Button>  
            </div>
            </form>
        </Modal.Body>
        
      </Modal>


      <Modal show={showStaff} onHide={handleStaffClose} style={{marginTop: 50}}>
        <Modal.Header closeButton>
         <Typography component="p" className="emp-tag" variant="p">
             ADD STAFF
         </Typography>
        </Modal.Header>
        <Modal.Body>
            <form>
            <div className="text-box">  
            <TextField id="standard-basic" label="Name" />
            <TextField id="standard-basic" label="email" />
            </div>
            <div className="text-box">  
            <TextField id="standard-basic" label="City" />
            <TextField id="standard-basic" label="Contact No" />
            </div>
            <div className="center-eve">
            <Button variant="contained" style={{background : "#006AEE" , color : "#fff" , width : "82.5%", marginTop : 20}}>
              Submit
            </Button>  
            </div>
            </form>
        </Modal.Body>
        
      </Modal>
      
    </div>
  );
}