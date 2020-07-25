import * as actionTypes from './actionTypes';
import Axios from 'axios';

export const addDetail = (Data) =>{
    return{
        type: actionTypes.ADDDETAILS,
        Details: Data
    }
}
export const errorHandler =(error) =>{
    return {
        type: actionTypes.ERRORHANDLE,
        error: error
    }
}
export const transferSuccess =() =>{
    return{
        type: actionTypes.SUCCESS
    }
}
export const userIdandToken =(userId,token) =>{
 return{
    type: actionTypes.PRIVATEINFO,
    UserId: userId,
    Token: token
 }
}
export const logOut =() =>{
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    return{
        type: actionTypes.LOGOUT
    }
}
export const daTa =(Data,userId) =>{
    let Datadded = {
        ...Data,
        userId: userId,
        RegistrationDate: new Date().toLocaleDateString()
    }
   return dispatch =>{
    Axios.post('https://project-aas.firebaseio.com/UserDetails.json',Datadded)
    .then(res =>{
       dispatch(transferSuccess());
    })
    .catch(error =>{
        dispatch(errorHandler(error));
        dispatch(hideSpinner());
    });
   }
}
export const showSpinner = () =>{
    return{
        type: actionTypes.SHOWSPINNER
    }
}
export const hideSpinner = () =>{
    return{
        type: actionTypes.HIDESPINNER
    }
}
export const infoSuccess =() =>{
    return{
        type: actionTypes.INFOSUCCESS
    }
}
export const checkAuthTimeout =(expireTime) =>{
    return dispatch => {
    setTimeout(() =>{
    dispatch(logOut());
    },expireTime*1000)
    }
}
export const reQuest =(email,password,Isignup,restData) =>{
    return dispatch =>{
        dispatch(showSpinner());
        let SignUp = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        
      let Url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAEe9J4ZWAZynk9_2QnlZBu3Y0JV4AQpG0'
         if(!Isignup){
             Url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAEe9J4ZWAZynk9_2QnlZBu3Y0JV4AQpG0'
         }
         Axios.post(Url,SignUp)
               .then(res =>{
                let expirationDate = new Date(new Date().getTime() + res.data.expiresIn*1000)
                localStorage.setItem('token', res.data.idToken);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('userId', res.data.localId);
                if(Isignup){
                dispatch(daTa(restData,res.data.localId));
                dispatch(userIdandToken(res.data.localId,res.data.idToken));
                }
                else{
                   dispatch(userIdandToken(res.data.localId,res.data.idToken));
                   dispatch(infoSuccess());
                }
                dispatch(checkAuthTimeout(res.data.expiresIn))
                })
               .catch(err =>{
                   dispatch(errorHandler(err.response.data.error));
                   dispatch(hideSpinner());
               });
    }
}
export const fetchData = (token,userId) =>{
    return dispatch =>{
        const queryParam = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        Axios.get('https://project-aas.firebaseio.com/UserDetails.json'+queryParam)
              .then(res =>{
                const fetchOrders =[];
                for(let key in res.data){
                   fetchOrders.push({
                     ...res.data[key],
                      id: key
                   });
                }
                  dispatch(addDetail(fetchOrders));
              })
              .catch(err =>{
                  dispatch(errorHandler(err));
                  dispatch(hideSpinner());
              });
    }
}
export const authCheckState = () =>{
    return dispatch =>{
       const token = localStorage.getItem('token');
       if(!token){
           dispatch(logOut());
       }
       else {
           const expiration = new Date(localStorage.getItem('expirationDate'));
           if(expiration > new Date()){
               const userId = localStorage.getItem('userId');
               dispatch(userIdandToken(userId,token));
               dispatch(infoSuccess());
               dispatch(checkAuthTimeout((expiration.getTime() - new Date().getTime())/1000));
           }
           else{
               dispatch(logOut());
           }
       }
    }
}