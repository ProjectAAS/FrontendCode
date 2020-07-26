import React,{Component} from 'react';
import Frontimage from '../../Components/Frontimage/Frontimage';
import classes from './Home.module.css';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";



class Home extends Component {
    render(){
        return(
            <div >
                <MDBContainer fluid>
                    <MDBRow>
                        <MDBCol>
                <Frontimage /> 
                </MDBCol>
                </MDBRow>
              
                   <MDBRow style={{ margin:'2%'}}>
                     <MDBCol sm={4}> <h3>What<br></br> is <br></br>  AAS?</h3></MDBCol>
                     <MDBCol sm={8}>   <p>Accident Alert System is a device which collect data from the incident
                          via the help of sensors. The sensor analyze the impact and decides how much severe
                           the incident is. if the outcome of the data declare the incident to be severe then the system initializes Alert
                           and calling procedures.
                      </p></MDBCol>
                    
                 </MDBRow>

                </MDBContainer>
                 
                      <MDBContainer fluid>
                      <h3>Features</h3>
                      <MDBRow>
                         
                          <MDBCol xs={12} md={4} lg={3}>
                          <img width={150} height={150} className="mr-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRnP2L3N71MYdjF4ch3vUMaHriOkZ-icFWojA&usqp=CAU" alt="Generic placeholder"/>
						  <p>This device will come in handy when a vehicle will get damaged by accident or any other phenomenon.</p>
                          </MDBCol>

                          <MDBCol xs={12} md={4} lg={3}>
                          <img width={150} height={150} className="mr-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYC-_tdZ7VjYE9xG4dp6yZesZ0yBJzNYsw7A&usqp=CAU" alt="Generic placeholder"/>
						  <p>The device will get activated immediately when it detects any major physical shock to body of vehicle and trigger an alarm.</p>
                          </MDBCol>

                          <MDBCol xs={12} md={4} lg={3}>
                          <img width={150} height={150} className="mr-3" src="https://static.vecteezy.com/system/resources/previews/000/420/369/non_2x/vector-telephone-road-sign-icon.jpg" alt="Generic placeholder"/>
						  <p>If the alarm is not reset by the user then it will automatically dial a number which will be pre-saved by the user informing about the location of incident.</p>
                          </MDBCol>

                          <MDBCol xs={12} md={4} lg={3}>
                          <img width={150} height={150} className="mr-3" src="https://www.netclipart.com/pp/m/207-2071930_transparent-ambulance-icon-png-animated-ambulance.png" alt="Generic placeholder"/>
						  <p>If the alarm is not reset by the user then it will automatically dial a number which will be pre-saved by the user informing about the location of incident.</p>
                          </MDBCol>
                      </MDBRow>
                      </MDBContainer>
                  </div>
           
        )
    }
}
export default Home;