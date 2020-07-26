import React,{Component} from 'react';
import Frontimage from '../../Components/Frontimage/Frontimage';
import classes from './Home.module.css';



class Home extends Component {
    render(){
        return(
            <div className={classes.Home}>
                  <Frontimage />  
                  
            </div>
        )
    }
}
export default Home;
