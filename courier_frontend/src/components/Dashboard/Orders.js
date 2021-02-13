import React , {useState} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import {Modal} from 'react-bootstrap'
import { Alert, AlertTitle } from '@material-ui/lab';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import axios from 'axios';
import withAuth from '../../LoggedIn';


// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  // for(let i=0;i<packages_data.length, i++){
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
 // }
];


const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  
  },
}));

export default function Orders(props) {
  var [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [packageState, setPackageVariables] = useState({
    height : 0,
    length : 0,
    width : 0 
  });

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [showPackage, setShowPackage] = useState(false);

  const handlePackageClose = () => setShowPackage(false);
  const handlePackageShow = () => setShowPackage(true);

  const [showEdit, setShowEdit] = useState(false);

  // const [myalert, setmyalert] = useState("opacityzero");
  // const [alertText, setalertText] = useState("Action success");
  
    // function preventDefault(event, msg) {
    //   //event.preventDefault();
    //   setalertText(msg);
    //   setmyalert("opacityone")
    //   setTimeout(() => {  setmyalert("opacityzero"); }, 3000);
    //  // myalert === "opacityzero" ? setmyalert("opacityone") : setmyalert("opacityzero")
    // }
  const handleEditClose = () => setShowEdit(false);
  const handleEditShow = () => setShowEdit(true);
  
  const onPackageDetailChange= event =>{
    const { name, value } = event.target;
      
    setPackageVariables({
          ...packageState,
          [name]: value
        });

  }

  const handlePackageSubmit = (event, pack_id) => {

    event.preventDefault();
    //alert(currentId);
    var authToken = localStorage.getItem('auth-token');
    axios.post('http://localhost:9000/api/addpackagedimension', {...packageState, package_id : pack_id}, {headers:{
      'x-auth-token' : authToken
    }}).then((response)=>{
      console.log(response.data.msg);
      // preventDefault(0, response.data.msg);
      props.showAlert(0, response.data.msg);
      handlePackageClose();

    }).catch((error)=>{
      console.log(error);
    })



  }
  const handlePackageDeletion = (pack_id) =>{
    const authToken = localStorage.getItem('auth-token');
    axios.post('http://localhost:9000/api/deletepackage', {id : pack_id}, {headers : {
      'x-auth-token' : authToken
    }}).then((response)=>{

      // preventDefault(0, response.data.msg);
      props.showAlert(0, response.data.msg);
      
      props.increment();


      // Trigger successful flag and reload the table data

    }).catch((error)=>{

    })
    
  }

  return (
    <React.Fragment>
      {/* <Alert severity="success" className={myalert} style={{position: 'absolute' , top: 30 , zIndex : 2500 , background : 'lightgreen' , left: '37%' , width : '30vw' , transition: 'opacity 1s ease-out'}}>
        <AlertTitle>Success</AlertTitle>
        <strong>{alertText}</strong>
      </Alert> */}

       <Typography component="p" className="emp-tag" variant="p">
             Latest Shipments
       </Typography>
       <br/>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Package ID</TableCell>
            <TableCell>Sender name</TableCell>
            <TableCell>Receiver name</TableCell>
            <TableCell>Receiver address</TableCell>
            
            <TableCell>Receiver Contact</TableCell>
            <TableCell>Status</TableCell>
             <TableCell>Add Package</TableCell>

            
            
            <TableCell>Edit</TableCell> 
            <TableCell >Delete</TableCell>
            <TableCell >Print</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.mydata.map((row) => (
            <TableRow key={row._id}>
              <TableCell>{row._id}</TableCell>
              <TableCell>{row.s_name}</TableCell>
              <TableCell>{row.r_name}</TableCell>
              <TableCell>{row.r_address}</TableCell>
              <TableCell>{row.r_contact}</TableCell>
              {/* <TableCell>{row.s_contact}</TableCell> */}
              
              {/* <TableCell >{row.amount}</TableCell> */}
              <TableCell>    <FormControl className={classes.formControl}>
      
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={row.status}>{row.status}</MenuItem>
          
        </Select>
      </FormControl>
      </TableCell>
      <TableCell>
              <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        onClick = {()=>{setCurrentId(row._id); handlePackageShow(row._id); }}
      >
        Add
      </Button>
              </TableCell>
              <TableCell>
              <Button
        variant="contained"
        color="info"
        size="small"
        onClick = {handleEditShow}
        className={classes.button}
        startIcon={<EditIcon />}
      >
        Edit
      </Button>
              </TableCell>
              <TableCell >
              <Button
        variant="contained"
        color="secondary"
        size="small"
        className={classes.button}
        startIcon={<DeleteIcon />}
        onClick = {()=>{setCurrentId(row._id); handlePackageDeletion(row._id); }}
      >
        Delete
      </Button >
              </TableCell>
         
              <TableCell >
              <Button 
              
        variant="contained"
        color="warning"
        size="small"
        className={classes.button}
   
      >
        Print
      </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" >
          See more orders
        </Link>
      </div>
      
      <Modal show={showPackage} onHide={handlePackageClose} size="lg" style={{marginTop: 100}}>
        <Modal.Header closeButton>
         <Typography component="p" className="emp-tag" variant="p">
             Shipment Details
         </Typography>
        </Modal.Header>
        <Modal.Body>
            <form onSubmit={handlePackageSubmit}>
            <div className="text-box-2">  
            <TextField id="standard-basic" name="length" label="Length" onChange={onPackageDetailChange}  value={packageState.length} required />
            <Typography component="p" className="emp-tag mt-3" variant="p">
             X
           </Typography>
            <TextField id="standard-basic" name="width" label="Width" onChange={onPackageDetailChange}  value={packageState.width} required />
            <Typography component="p" className="emp-tag mt-3" variant="p ">
             X
            </Typography>
            <TextField id="standard-basic" name="height" label="Height"  onChange={onPackageDetailChange}  value={packageState.height} required/>
            </div>
            <div className="text-box">  
            
            </div>
            <div className="center-eve">
            <Button variant="contained" type="submit" style={{background : "#006AEE" , color : "#fff" , width : "82.5%", marginTop : 20}}>
              Submit
            </Button>  
            </div>
            </form>
        </Modal.Body>
      </Modal>



      <Modal show={showEdit} onHide={handleEditClose} style={{marginTop: 50}}>
        <Modal.Header closeButton>
         <Typography component="p" className="emp-tag" variant="p">
             EDIT COURIER
         </Typography>
        </Modal.Header>
        <Modal.Body>
            <form >
              <Title>RECIEVER</Title>    
            
            <div className="text-box">  
            <TextField id="standard-basic" label="Name" name = "r_name"  required />
            <TextField id="standard-basic" label="NID" name = "r_nID"  required />
            </div>
            <div className="text-box">  
            <TextField id="standard-basic" label="Address" name = "r_address" required />
            <TextField id="standard-basic" label="Contact No" name = "r_contact" required />
            </div>

            <Title>SENDER</Title>    
            
            <div className="text-box">  
            <TextField id="standard-basic" label="Name" name = "s_name" required/>
            <TextField id="standard-basic" label="CNIC" name = "s_nID" required/>
            </div>
            <div className="text-box">  
            <TextField id="standard-basic" label="Address" name = "s_address" required />
            <TextField id="standard-basic" label="Contact No" name = "s_contact" required/>
            </div>

            <div className="center-eve">
            <Button type="submit" variant="contained" style={{background : "#006AEE" , color : "#fff" , width : "82.5%", marginTop : 20}}>
              Submit
            </Button>  
            </div>
            </form>
        </Modal.Body>
        
      </Modal>

    </React.Fragment>
  );
}