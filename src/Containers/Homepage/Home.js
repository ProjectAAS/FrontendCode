import React,{Component} from 'react';
import Frontimage from '../../Components/Frontimage/Frontimage';
import classes from './Home.module.css';


class Home extends Component {
    render(){
        return(
            <div className={classes.Home}>
                  <Frontimage />  
                  <div className={classes.body}>
                      <p style={{fontWeight:'570',fontSize:'290%'}}>What is AAS?</p>
                      <p style={{marginTop:'10%',fontSize:'150%'}}>Accident Alert System is a device which collect data from the incident
                          via the help of sensors. The sensor analyze the impact and decides how much severe
                          the incident is. if the outcome of the data declare the incident to be severe then the system initializes Alert
                          and calling procedures.
                      </p>
                  </div>
            </div>
        )
    }
}
export default Home;