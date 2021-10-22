import React, { useEffect } from "react";
import axiosWithAuth from './../utils/axiosWithAuth';
import Login from "./Login";
const Logout = (props) => {

    useEffect(()=> {
        axiosWithAuth()
            .post('http://anytimefitness.herokuapp.com/logout')
            .then(res=>{
                localStorage.removeItem("token");
                props.history.push('/login');
            }).catch(err=> {
                console.log(err);
            })
    }, []);

    return(
    <Login />);
}

export default Logout;