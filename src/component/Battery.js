import "./Navbar/Button.css"
import React, {  useState } from 'react';
import Footer from './Footer'
import { Link ,useNavigate} from 'react-router-dom';
import "./Navbar/Navbar.css"
import { Box} from "@mui/system";
import {Button, Typography}from "@mui/material";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TextField from '@mui/material/TextField';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import SavingsIcon from '@mui/icons-material/Savings';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Notification from "./Notification";
import axios from "axios";

function Copyright(props) {
  return (
    <p style={{color:"white",marginTop:"20px"}} align="center" {...props}>
      {'Copyright © '}
      <Link to="/login" style={{textDecoration:"none", color:"red"}}>
          Service-Up
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </p>
  );
}




function Battery({name}) {
  const[notify,setnotify] = useState({isOpen:false,message:'',type:''})

   const history = useNavigate();
 
  const key = localStorage.getItem('token');
  
  const [click, setClick] = useState(false);
  
  const[loginclick,setloginclick] = useState(false);
  
  const handleClick = () => setClick(!click);

  const closeMobileMenu=()=>setClick(false);

  const closeMobileMenu1=()=>{
    setClick(false);
    localStorage.removeItem('token');
    localStorage.removeItem('email')
    window.location.reload()
  }
  
  
  const closeMobileMenu2=()=>{
    setClick(false);
    history('/login')
  }


  const handlelogin=()=>{
    history('/login')
  }

  const handlelogin1=()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('email')
    window.location.reload()
  }

  const handleSubmit=async(event)=>{
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try{
      var response = await axios.post("https://carsevice-backend.onrender.com/battery/enquiry",{
        carmodel:data.get("carmodel"),
        email:data.get("email"),
        mobileno:data.get("mobileno"),
        address:data.get('address')
      })

      if(response.data){
        setnotify({isOpen:true,message:"Your Enquiry Is Submitted Successfully..Our Team will Contact You.. Thankyou",type:"success"})
      }
    }catch(err){
      setnotify({isOpen:true,message:"Error in Creating Enquiry.. PLease Check All The Field",type:"error"})
    }
  }

 
  return (
    <div>
    <div className='home-image2'>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Service-Up
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
          >
            <Link
              to='/battery'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Battery
            </Link>
            
          </li>

          <li className='nav-item'>
            <Link
              to='/service'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Services
            </Link>
          </li>
         
          <li className='nav-item'>
            <Link
              to='/partner'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Become a partner
            </Link>
          </li>
          {key?
          <li className='nav-item'>
          <Link
            to='/'
            className='nav-links-mobile'
            onClick={closeMobileMenu}
          >
            profile
          </Link>
        </li>:<></>
         }
          <li>
            {key?
            <Link
              to='/'
              className='nav-links-mobile'
              onClick={closeMobileMenu1}>Log Out</Link>: 
              <Link
              to='/login'
              className='nav-links-mobile'
              onClick={closeMobileMenu2}>Log In</Link>}
           
          </li>
        </ul>
      
        {key?
          <div className='dropdown'>
          <button className='btn' onClick={handlelogin1} >{name}</button>
          <div className='dropdown-content' >
            <Link to="/profile" className='nav-links'>Profile</Link>
            <Link to="/" className='nav-links' onClick={handlelogin1}>Log-Out</Link>
          </div>
          </div>
          :<button className='btn' onClick={handlelogin} >Log In</button>}
    
      </nav>
      <div>
      <Box component="form" onSubmit={handleSubmit} className="batteryform" style={{backgroundColor:"whitesmoke", width:"50%", borderRadius:"2%", marginLeft:"5%",marginTop:"5%", padding:"5%", border:"1px solid #BFBFBF",borderColor:"black",boxShadow:"10px 10px 5px black"}}>
        <Typography style={{textAlign:"center"}}><h2>Get Free Quotes Instantly</h2></Typography>
        <TextField 
                margin="normal"
                required
              
                id="carmodel"
                label="Car Model"
                name="carmodel"
                autoComplete="carmodel"
                autoFocus
                sx={{ml:10}}
                style={{width:"70%"}}
              />
               <TextField 
                margin="normal"
                required
              
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                sx={{ml:10}}
                style={{width:"70%"}}
              />
        <TextField
                margin="normal"
                required
                sx={{ml:10}}
                style={{width:"70%"}}
                id="mobileno"
                label="Mobile-No"
                name="mobileno"
                autoComplete="mobileno"
                autoFocus
              />
        <TextField
                margin="normal"
                required
                sx={{ml:10}}
                style={{width:"70%"}}
                id="address"
                label="Address"
                name="address"
                autoComplete="address"
                autoFocus
              />
               <Button
                type="submit"
                style={{width:"70%",backgroundColor:"red"}}
                variant="contained"
                sx={{ mt: 3, mb: 2,ml:10 }}
               
              >
                Get Quote
              </Button>
        </Box>
      </div>
     
     
      
    </div>
    <div className='rectangle2'>  </div>
    <div style={{marginLeft:"10%"}}>
      <h1>Car Battery Replacement At Your Door-Step </h1>
      <h3>90 Minutes Installation or Free</h3>
    </div>
    <div >
        <VerticalTimeline>
          <VerticalTimelineElement  className="vertical-timeline-element--work"  contentStyle={{ background: '#5195e1', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} iconStyle={{ background: '#5195e1', color: '#fff' }}>
           <div style={{display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>
            <LocalShippingIcon style={{fontSize:"50px", color:"black"}}/>
            <h1 style={{color:"white"}}>Free Delivery</h1>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement className="vertical-timeline-element--work"  contentStyle={{ background: '#5195e1', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} iconStyle={{ background: '#5195e1', color: '#fff' }}>
            <div style={{display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>
            <MiscellaneousServicesIcon style={{fontSize:"50px", color:"black"}}/>
            <h1 style={{color:"white"}}>Free Installation</h1>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement className="vertical-timeline-element--work"  contentStyle={{ background: '#5195e1', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} iconStyle={{ background: '#5195e1', color: '#fff' }}>
            <div style={{display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>
            <SavingsIcon style={{fontSize:"50px", color:"black"}}/>
            <h1 style={{color:"white"}}>Assured Saving</h1>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement className="vertical-timeline-element--work"  contentStyle={{ background: '#5195e1', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} iconStyle={{ background: '#5195e1', color: '#fff' }}>
           <div style={{display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>
            <AccountBalanceWalletIcon style={{fontSize:"50px", color:"black"}}/>
            <h1 style={{color:"white"}}>Payment On Delivery</h1>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      
      </div>
      <div className='rectangle2'>  </div>
    <div>
    <Footer style={{position:'relative'}} >
            <Footer.Wrapper>
                <Footer.Row>
                <Footer.Column>
                    <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#">Story</Footer.Link>
                    <Footer.Link href="#">Clients</Footer.Link>
                    <Footer.Link href="#">Testimonials</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Services</Footer.Title>
                    <Footer.Link href="/">Battery Replacement</Footer.Link>
                    <Footer.Link href="#">Tyre Replacement</Footer.Link>
                    <Footer.Link href="#">General Service</Footer.Link>
                    <Footer.Link href="#">Car Detailing</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link href="#">Chennai</Footer.Link>
                    <Footer.Link href="#">Theni</Footer.Link>
                    <Footer.Link href="#">Erode</Footer.Link>
                    <Footer.Link href="#">Ooty</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#"><i className="fab fa-facebook" style={{marginRight:"5px"}}/>Facebook</Footer.Link>
                    <Footer.Link href="#"><i className="fab fa-instagram" style={{marginRight:"5px"}}/>Instagram</Footer.Link>
                    <Footer.Link href="#"><i className="fab fa-youtube" style={{marginRight:"5px"}}/>Youtube</Footer.Link>
                    <Footer.Link href="#"><i className="fab fa-twitter" style={{marginRight:"5px"}}/>Twitter</Footer.Link>
                </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
            <Copyright sx={{ mt: 5 }} />
        </Footer>
    </div>
    <Notification notify={notify} setnotify={setnotify}/>
    </div>
  );
}

export default Battery;