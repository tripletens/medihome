
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import medical_assoc from "./images/medical_assoc.png";
import Midwife_assoc_logo from "./images/midwife_assoc.jpg";
import pharm_council from "./images/pharm_council.jpg";
import physio_assoc from "./images/physio_assoc.jpg";
import emergency from "./images/emergency.jpg";
import med_lab from "./images/med_lab.jpg";

import Navbar  from "./consts/Navbar";
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

// const Box = styled.div`
//   background-color:green;
//   padding:50px;
//   border-radius:20px;
// `

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <div className="container-fluid d-flex banner">
        <div className="container px-2 banner-container" style={{marginTop:"100px"}}>
            <div className="d-flex row gx-3 gy-4 " data-aos="fade-up" >
              <div className=" Bannerdiv flex-column gy-4 my-5 justify-content-start  ml-0 col-md-8 col-sm-12">
                  <h2 className="Bannertext p-1 text-align-center ml-0 my-1"> Full Medical Services <br/> at your Door Step</h2>
                  <div className="d-flex row">
                    <div className="col-md-12 row d-flex gx-4 flex-row-start justify-content-start">
                      {/* <div className=""> */}
                        <div className="col-9 d-flex  mt-2 flex-row-start pl-0  space-between gx-3">
                          <button className="button btn text-white mx-3 py-auto" style={{borderRadius:'10px',height:'auto',marginLeft:'-5px',backgroundColor:'#365282'}}>
                            <svg aria-hidden="true" style={{height:'20px',marginRight:'5px',}} className="mx-auto" focusable="false" data-prefix="fab" data-icon="google-play" class="svg-inline--fa fa-google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
                            Download
                          </button>
                          <button className="button btn  text-white mx-4 py-auto" style={{borderRadius:'10px',height:'auto',backgroundColor:'#365282' }}>
                            <svg aria-hidden="true" style={{height:'20px',marginRight:'5px',}} className="mx-auto" focusable="false" data-prefix="fab" data-icon="app-store" class="svg-inline--fa fa-app-store" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M255.9 120.9l9.1-15.7c5.6-9.8 18.1-13.1 27.9-7.5 9.8 5.6 13.1 18.1 7.5 27.9l-87.5 151.5h63.3c20.5 0 32 24.1 23.1 40.8H113.8c-11.3 0-20.4-9.1-20.4-20.4 0-11.3 9.1-20.4 20.4-20.4h52l66.6-115.4-20.8-36.1c-5.6-9.8-2.3-22.2 7.5-27.9 9.8-5.6 22.2-2.3 27.9 7.5l8.9 15.7zm-78.7 218l-19.6 34c-5.6 9.8-18.1 13.1-27.9 7.5-9.8-5.6-13.1-18.1-7.5-27.9l14.6-25.2c16.4-5.1 29.8-1.2 40.4 11.6zm168.9-61.7h53.1c11.3 0 20.4 9.1 20.4 20.4 0 11.3-9.1 20.4-20.4 20.4h-29.5l19.9 34.5c5.6 9.8 2.3 22.2-7.5 27.9-9.8 5.6-22.2 2.3-27.9-7.5-33.5-58.1-58.7-101.6-75.4-130.6-17.1-29.5-4.9-59.1 7.2-69.1 13.4 23 33.4 57.7 60.1 104zM256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216z"></path></svg>
                            Download
                          </button>
                          {/* <Button variant="outlined" className="button rounded mx-3 p-5" style={{backgroundImage:"url('./images/google_playstore.png')",backgroundSize:"40px",borderRadius: "0",color:"#fff",fontSize:12,backgroundColor:"#161B27",}}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" class="svg-inline--fa fa-google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
                            Google PlayStore
                          </Button>
                          <Button variant="outlined" className="button rounded mx-3 p-5" style={{borderRadius: "0",color:"#fff",backgroundColor:"#161B27",}}>
                            App Store
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="app-store" class="svg-inline--fa fa-app-store" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M255.9 120.9l9.1-15.7c5.6-9.8 18.1-13.1 27.9-7.5 9.8 5.6 13.1 18.1 7.5 27.9l-87.5 151.5h63.3c20.5 0 32 24.1 23.1 40.8H113.8c-11.3 0-20.4-9.1-20.4-20.4 0-11.3 9.1-20.4 20.4-20.4h52l66.6-115.4-20.8-36.1c-5.6-9.8-2.3-22.2 7.5-27.9 9.8-5.6 22.2-2.3 27.9 7.5l8.9 15.7zm-78.7 218l-19.6 34c-5.6 9.8-18.1 13.1-27.9 7.5-9.8-5.6-13.1-18.1-7.5-27.9l14.6-25.2c16.4-5.1 29.8-1.2 40.4 11.6zm168.9-61.7h53.1c11.3 0 20.4 9.1 20.4 20.4 0 11.3-9.1 20.4-20.4 20.4h-29.5l19.9 34.5c5.6 9.8 2.3 22.2-7.5 27.9-9.8 5.6-22.2 2.3-27.9-7.5-33.5-58.1-58.7-101.6-75.4-130.6-17.1-29.5-4.9-59.1 7.2-69.1 13.4 23 33.4 57.7 60.1 104zM256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216z"></path></svg>
                          </Button> */}
                          {/* <button className="btn btn-lg button text-white mx-auto">Google PlayStore </button>
                          <button className="btn btn-lg button text-white mx-auto">App Store </button> */}
                          {/* <Button variant="outlined" className="button mx-4" style={{color:"#fff",marginLeft:"auto",backgroundColor:"#161B27",}}> */}
                            
                          {/* </Button> */}
                          {/* <Button variant="outlined" className="button mx-4"  style={{color:"#fff",marginLeft:"auto",backgroundColor:"#161B27",}}>
                          App Store</Button> */}
                        </div>
                        {/* <div className=" col"> */}
                          
                        {/* </div> */}
                      {/* </div> */}
                    </div>
                  </div>
              </div>
            </div>
          </div>
      </div>
      {/* // this is second row  */}
      <div className="container px-2 my-5 " >
        <div className="row my-5 p-3">
            <div className="col-md-5 col-sm-12 my-5 intro ml-0 " data-aos="zoom-in-down">
              {/* <div className="card-body"> */}
                <h2 className="text-right gy-2">Get Access to Medical Professionals and Services</h2>
              <p>We give you access to Professionals in the Medical field. Services such as Consultations, Diagnosis, Tests, Labour and Childbirth can now be brought closer to your DoorStep</p>
              {/* </div> */}
            </div>
            <div className="col-md-7 col-sm-12 my-0 mr-0 ml-2">
                <h2 className="text-center mb-3">Book an Appointment</h2>
                <form>
                  <div className="row gx-4 ml-3">
                    <div className="col m-2 form-group">
                        <label> First Name: </label>
                        <input type="text" className="form-control" Placeholder="Enter First Name"/>
                    </div>
                    <div className="col m-2">
                        <label> Last Name: </label>
                        <input type="text" className="form-control" Placeholder="Enter Last Name"/>
                    </div>
                  </div>
                  <div className="row gx-4">
                    <div className="col m-2 form-group">
                        <label> Phone Number: </label>
                        <input type="Number" className="form-control" Placeholder="Enter First Name"/>
                    </div>
                    <div className="col m-2">
                        <label> Email Address: </label>
                        <input type="text" className="form-control" Placeholder="Enter Last Name"/>
                    </div>
                  </div>
                  <div className="row gx-4">
                    <div className="col m-2 form-group">
                        <label>Select Date: </label>
                        <input type="date" className="form-control"/>
                    </div>
                    <div className="col m-2">
                        <label> Select Time: </label>
                        <input type="time" className="form-control"/>
                    </div>
                  </div>
                  <div className="row gx-4">
                    <div className="col-12 d-flex flex-row">
                        <Button variant="outlined" className="button btn-block my-3 mx-2 d-flex flex-row-reverse justify-self-end" style={{color:"#fff",backgroundColor:"#365282",borderRadius:'10px',}}>Book Appointment</Button>
                    </div>
                  </div>
                  
                </form>
            </div>
        </div>
      
      </div>

      <div className="container-fluid px-2 mt-5" style={{backgroundColor:'#87A8E6',marginBottom:0,}}>
        <div className="container pb-3 pt-3">
          <h1 className="text-center mt-5 m-3 my-5 pb-3 text-white">Our Partners </h1>
          <div className="row d-flex my-3 mb-5 gx-3 flex-row space-around justify-content-evenly">
            <div className="col-md-4 col-sm-12 card shadow mb-3" data-aos="zoom-in-down" style={{width: '18rem', height:'auto',borderTop:"10px solid"}}>
              <div className="card-body my-3">
                <img src={medical_assoc} class="card-img-top" alt="Nigeria medical association logo"/>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 card mb-3"  data-aos="zoom-in-down" style={{width: '18rem', height:'auto',borderTop:"10px solid"}}>
              <div className="card-body my-3">
                  <img src={Midwife_assoc_logo} className="img img-responsive card-img-top" style={{marginTop:'0px'}} alt="Nigeria medical association logo"/>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 card mb-3" data-aos="zoom-in-down" style={{width: '18rem', height:'auto',borderTop:"10px solid"}}>
              <div className="card-body my-3">
                <img src={pharm_council} class="card-img-top" style={{height:'auto',marginTop:'0px'}} alt="Nigeria medical association logo"/>
              </div>
            </div>
          </div>
          <div className="row d-flex my-3 mb-5 pb-5 gx-3 flex-row space-around justify-content-evenly">
            <div className="col-md-4 col-sm-12 card mb-3" data-aos="zoom-in-left" style={{width: '18rem', height:'auto',borderTop:"10px solid"}}>
              <div className="card-body my-3">
                <img src={physio_assoc} class="card-img-top img img-responsive" alt="Nigeria medical association logo"/>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 card mb-3" data-aos="zoom-in-up" style={{width: '18rem', height:'auto',borderTop:"10px solid"}}>
              <div className="card-body my-3">
                  <img src={med_lab} className="img img-responsive card-img-top" style={{marginTop:'0px'}} alt="Nigeria medical association logo"/>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 card mb-3" data-aos="zoom-in-right" style={{width: '18rem', height:'auto',borderTop:"10px solid"}}>
              <div className="card-body my-3">
                <img src={emergency} class="card-img-top" style={{height:'auto',marginTop:'0px'}} alt="Nigeria medical association logo"/>
              </div>
            </div>
          </div>
        </div>
        
      </div>

      <div className="container-fluid pb-5" style={{backgroundColor:"#365282",color:'#fff',marginTop:'-20px'}}>
        <div className="container">
          <div className="row d-flex flex-row justify-content-evenly space-between">
            <div className="col-md-6 col-sm-12">
              <div class="d-flex flex-column space-between gy-3 my-4">
                <img
                      src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
                      height="25" 
                      alt=""
                      loading="lazy"
                      style={{height:"30px", width:"50px",marginTop:"40px"}}
                  />
                <h1> MediHome</h1>
                <p>Plot 8, Providence Street Lekki Phase 1</p>
                <div className="d-flex flex-row space-between">
                  <span class="mx-0"> 
                    <svg aria-hidden="true" focusable="false" className="mx-1"  style={{height:"20px",width:"20px",}} data-prefix="fas" data-icon="phone" class="svg-inline--fa fa-phone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"></path></svg>
                    +2349015222109
                  </span>
                  <span class="mx-1">
                    <svg aria-hidden="true" className="mx-2" style={{height:"20px",width:"20px",}} focusable="false" data-prefix="fas" data-icon="envelope" class="svg-inline--fa fa-envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 352c-16.53 0-33.06-5.422-47.16-16.41L0 173.2V400C0 426.5 21.49 448 48 448h416c26.51 0 48-21.49 48-48V173.2l-208.8 162.5C289.1 346.6 272.5 352 256 352zM16.29 145.3l212.2 165.1c16.19 12.6 38.87 12.6 55.06 0l212.2-165.1C505.1 137.3 512 125 512 112C512 85.49 490.5 64 464 64h-416C21.49 64 0 85.49 0 112C0 125 6.01 137.3 16.29 145.3z"></path></svg>
                    info@medihome.com
                  </span>
                </div>
              </div>
            </div>  
            <div className="col-md-6 col-sm-12">
              <div className="d-flex flex-column space-between gy-5 my-4 justify-self-end">
                <a href="#" className="my-2 text-white mt-5" style={{textDecoration:"none",marginTop:"40px"}}>About Us</a>
                <a href="#" className="my-2 text-white" style={{textDecoration:"none",}}>Services</a>
                <a href="#" className="my-2 text-white" style={{textDecoration:"none",}}>Pricing</a>
                <a href="#" className="my-2 text-white" style={{textDecoration:"none",}}>Contact Us</a>
              </div>
            </div> 
            
          </div>
        </div>
      </div>
      <div className="" style={{backgroundColor:"#212529",color:'#fff',marginTop:'auto',height:"auto",}} >
        <div className="row">
          <p className="text-center py-2">All Rights Reserved, Medihome &copy; 2021  </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
