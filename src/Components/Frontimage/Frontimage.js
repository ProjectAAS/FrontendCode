import React from 'react';
import Img1 from '../../Assets/image/png-format-1595065261576252554johntowner3Kv48NS4WUUunsplash.png';
import classes from './Frontimage.module.css';
const Frontimage = () =>{
    return(
      <div className={classes.Frontimage}>
          <img src={Img1} alt='AAs' />
          <p>AAS</p>
          <h1>Accident Alert System</h1>
      </div>
    )
}
export default Frontimage;