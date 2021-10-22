import React, { useState, useEffect } from "react";
import axios from 'axios'
import DisplayClass from "./DisplayClass";
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';
import ClassForm from "./AddClassForm";
import ClassSignup from "./ClassSignup";
import Cards from './HomeCards'


const ClassList = (props) => {
    const [classes, setClasses] = useState([]);
    let isLoggedIn = localStorage.getItem('token');

    useEffect(() => {
        axios.get('https://anytimefitness.herokuapp.com/api/classes')
            .then(res => {
                setClasses(res.data);
            })
            .catch(err => {
                console.error(err);
            })
    }, [])
    if (classes.length === 0) {
        return <h2>No Classes Available at This Time</h2>
    }
    return (
        <div className='bg-secondary'>
            {/* <div>
                {classes && classes.map(c => (
                    <DisplayClass key={c.class_id} course={c} />
                ))}
            </div> */}
            <ClassSignup classes={classes}></ClassSignup>
            <div>

                {isLoggedIn && <Button><Link to='/add-class'>Add a new Class</Link></Button>}

            </div>
            <div className='py-3'><Cards /></div>
        </div>
    )
}

export default ClassList;