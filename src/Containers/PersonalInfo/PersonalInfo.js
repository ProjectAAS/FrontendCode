 import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import Img from '../../Assets/image/imageindicate.PNG';
import * as actions from '../../Store/Action/index';
import classes from './PersonalInfo.module.css';
import Spinner from '../../Components/UI/Spinner/Spinner';

class PersonalInfo extends Component {
    componentDidMount(){
        if(this.props.IsAuthenticated && (this.props.status || this.props.Info)){
        this.props.onFetchData(this.props.token,this.props.userId);
        this.props.spinnerHide();
    }
}
//   ShowProfile =(identifier,ShowDetails) =>{
//       return <span className={classes.Info}>
//       <h2>NAME:-</h2>
//       <p> {ShowDetails[0][identifier]}</p>
//       </span>
//   }
    render(){
        let Navigate = null;
        if(!this.props.IsAuthenticated){
           Navigate = <Redirect to='/'/>
        }
        let ShowDetails =  this.props.userDetails;
            let Show= <Spinner />;
        if(ShowDetails){
                // Show = this.ShowProfile('Name',ShowDetails);
              Show = <div className={classes.Info}>
                        <h1>Name:-</h1>
                        <p>Mohammad Fazil</p>
                     </div>
            }
        return(
            <div className={classes.PersonalInfo}>
				<div className={classes.DetailsContainer}>
                    <img src={Img} alt='example' className={classes.Img}/>
                      {Show}
                </div>
            {Navigate}
             </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
       IsAuthenticated: state.TokenID !== null,
       token: state.TokenID,
       userId: state.UserID,
       userDetails: state.RegistrationForm,
       status: state.status,
       Info: state.Info
    }
  }
  const mapDispatchToProps =(dispatch) =>{
    return{
        onFetchData : (token,userId) => dispatch(actions.fetchData(token,userId)),
        spinnerHide: () => dispatch(actions.hideSpinner())
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(PersonalInfo);
