import React,{Component} from 'react';
import Frontimage from '../../Components/Frontimage/Frontimage';
import Dataimage from '../../Assets/image/RoadAccidentData.bmp';
import classes from './Home.module.css';
import Feature1 from '../../Assets/image/Feature1.bmp';
import Feature2 from '../../Assets/image/Feature2.bmp';
import Feature3 from '../../Assets/image/Feature3.bmp';
import Feature4 from '../../Assets/image/Feature4.bmp';


class Home extends Component {
    render(){
        return(
            <div className={classes.Home}>
                  <Frontimage />  
                  <div className={classes.body}>
                      <p style={{fontWeight:'570',fontSize:'290%',textDecoration:'underline',color:'black'}}>What is AAS?</p>
                      <p style={{marginTop: '0px',fontSize:'150%'}}>Accident Alert System is a device which collect data from the incident
                          via the help of sensors. The sensor analyze the impact and decides how much severe
                          the incident is. if the outcome of the data declare the incident to be severe then the system initializes Alert
                          and calling procedures.
                      </p>
                      <p style={{fontWeight:'570',fontSize:'290%',textDecoration:'underline',color:'black'}}>Why AAS is so Important?</p>
                      <p style={{marginTop: '0px',fontSize:'150%'}}><strong>Road Accidents</strong> in India claimed over <strong>1.5 lakh lives</strong> in the Country in 2018,
                      with <strong>OverSpeeding</strong> of vehicles being the biggest reason for casualties a government report said.
                      A total of <strong>4,67,044</strong> road accident have been reported by State and Union Territories in the calender year 2018,claiming,<strong>1,51,417</strong>
                      lives and causing injuries to <strong>4,69,418</strong> persons the report said. Over-Speeding accounted for <strong>64.4%</strong> of the persons killed.<br />India, 
                      ranks <strong>1st</strong> in the number of road accident deaths across the <strong>199 countries reported in the World Road Statistics</strong>, 2018 followed by China and US.
                      As per the WHO Global Report on Road Safety 2018, India accounts for almost <strong>11%</strong> of the Accident related deaths in the world.                       </p>
                         <img src={Dataimage} alt='Data'className={classes.Img1}/>
                         <p style={{fontWeight:'570',fontSize:'290%',textDecoration:'underline',color:'black',textAlign:'center'}}>Features</p>
                         <p style={{fontSize:'150%'}}><img src={Feature1} alt='Feature1' className={classes.Img2}/>
                          This device will come in handy when a vehicle will get damage by accident or any other phenomenon.</p>
                          <p style={{fontSize:'150%',marginBottom:'-20%'}}><img src={Feature2} alt='Feature2' className={classes.Img3}/>
                          This device will get activated immediately when it detects any major physical shock to body of vehicle and trigger an alarm.</p>
                          <p style={{fontSize:'150%',marginBottom:'-10%'}}><img src={Feature3} alt='Feature3' className={classes.Img4}/>
                          If the alarm is not reset by the user then it will automatically dial a number which will be pre-saved by the user informing about the location of incident.</p>
                          <p style={{fontSize:'150%',marginBottom:'3%'}}><img src={Feature4} alt='Feature4' className={classes.Img5}/>
                          If the alarm is not reset by the user then it will automatically dial a number which will be pre-saved by the user informing about the location of incident.</p>
                  </div>
            </div>
        )
    }
}
export default Home;