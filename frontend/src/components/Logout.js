import React, { useEffect } from "react";
import axiosWithAuth from './../utils/axiosWithAuth';

const Logout = (props) => {

    useEffect(()=> {
        axiosWithAuth()
            .post('http://anytimefitness.herokuapp.com/logout')
            .then(res=>{
                console.log(res)
                localStorage.removeItem("token");
                props.history.push('/login');
            }).catch(err=> {
                console.log(err);
            })
    }, []);

    return(<div></div>);
}

export default Logout;