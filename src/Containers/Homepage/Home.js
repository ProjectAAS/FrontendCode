import React,{Component} from 'react';
import Frontimage from '../../Components/Frontimage/Frontimage';
import classes from './Home.module.css';



class Home extends Component {
    render(){
        return(
            <div className={classes.Home}>
                  <Frontimage />  
                  <Container>
                   <Row>
                     <Col sm={3}> <p style={{fontWeight:'570',fontSize:'290%',color:'black'}}>What <br></br>is <br></br>AAS?</p></Col>
                     <Col sm={9}><p style={{marginTop: '0px',fontSize:'150%'}}>Accident Alert System is a device which collect data from the incident
                          via the help of sensors. The sensor analyze the impact and decides how much severe
                           the incident is. if the outcome of the data declare the incident to be severe then the system initializes Alert
                           and calling procedures.
                      </p></Col>
                       
                 </Row>

                </Container>
                 
                      <Container>
                      <Row>
                          <Col xs={12} md={4} lg={3}>
                          <img width={150} height={150} className="mr-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRnP2L3N71MYdjF4ch3vUMaHriOkZ-icFWojA&usqp=CAU" alt="Generic placeholder"/>
						  <p>This device will come in handy when a vehicle will get damaged by accident or any other phenomenon.</p>
                          </Col>

                          <Col xs={12} md={4} lg={3}>
                          <img width={150} height={150} className="mr-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYC-_tdZ7VjYE9xG4dp6yZesZ0yBJzNYsw7A&usqp=CAU" alt="Generic placeholder"/>
						  <p>The device will get activated immediately when it detects any major physical shock to body of vehicle and trigger an alarm.</p>
                          </Col>

                          <Col xs={12} md={4} lg={3}>
                          <img width={150} height={150} className="mr-3" src="https://static.vecteezy.com/system/resources/previews/000/420/369/non_2x/vector-telephone-road-sign-icon.jpg" alt="Generic placeholder"/>
						  <p>If the alarm is not reset by the user then it will automatically dial a number which will be pre-saved by the user informing about the location of incident.</p>
                          </Col>

                          <Col xs={12} md={4} lg={3}>
                          <img width={150} height={150} className="mr-3" src="https://www.netclipart.com/pp/m/207-2071930_transparent-ambulance-icon-png-animated-ambulance.png" alt="Generic placeholder"/>
						  <p>If the alarm is not reset by the user then it will automatically dial a number which will be pre-saved by the user informing about the location of incident.</p>
                          </Col>
                      </Row>
                      </Container>
                  
            </div>
        )
    }
}
export default Home;
