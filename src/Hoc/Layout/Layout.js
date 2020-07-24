import React,{Component} from 'react';
import Tool from '../../Components/Toolbar/Toolbar';
import SideDrawer from '../../Components/SideDrawer/SideDrawer';
//import classes from './Layout.module.css';
import {connect} from 'react-redux';

class Layout extends Component{
  state={
    show: false
  }
  ChangeHandler =() =>{
    this.setState(prev =>{
        return {show: !prev.show}
          });
  }
    render(){
        return(
      <div>
        <SideDrawer 
        show = {this.state.show} 
        closed={this.ChangeHandler}
        IsAuth = {this.props.IsAuthenticated}/>
          <Tool 
          show={this.state.show} 
          changed={this.ChangeHandler} 
          IsAuth = {this.props.IsAuthenticated}/>
          <main>
        {this.props.children}
    </main>
      </div>
        )
    }
}
const mapStateToProps = (state) =>{
  return{
     IsAuthenticated: state.TokenID !== null
  }
}
export default connect(mapStateToProps)(Layout);