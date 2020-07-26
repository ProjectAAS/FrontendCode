import React from 'react';
import Img1 from '../../Assets/image/hope_safe.jpg';
import classes from './Frontimage.module.css';
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
const Frontimage = () =>{
    return(
      // <div className={classes.Frontimage}>
      //     <img src={Img1} alt='AAs' />
      //     <p>AAS</p>
      //     <h1>Accident Alert System</h1>
      // </div>
    //   <MDBRow>
    //   <MDBCol style={{ maxWidth: "100%" , margin:'2%'}}>
    //     <MDBCard reverse>
    //       <MDBCardImage cascade style={{ height: '20rem' , width:'100%' }} src={Img1} />
    //     </MDBCard>
    //   </MDBCol>
    // </MDBRow>
    <MDBContainer className="mt-5" fluid>
        <MDBRow className="mt-4">
          <MDBCol md="12" style={{padding: '0px 0px' }}>
            <MDBView>
              <img
                src={Img1}
               
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" >
                <p className="white-text">super light overlay</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
       
       
        </MDBRow>
      </MDBContainer>
    )
}
export default Frontimage;