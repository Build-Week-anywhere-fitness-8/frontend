import React, {useState, useEffect} from "react";
import axios from 'axios'
import DisplayClass from "./DisplayClass";
import { Link } from "react-router-dom";
import Logout from "./Logout";

const ClassList = (props) => {
    const [classes, setClasses] = useState([]);
    let isLoggedIn = localStorage.getItem('token');

    useEffect(() => {
        axios.get('http://anytimefitness.herokuapp.com/api/classes')
            .then(res => {
                setClasses(res.data);
            })
            .catch(err => {
                console.error(err);
            })
    }, [])

    if(classes.length === 0){
        return <h2>No Classes Available at This Time</h2>
    }
    console.log(classes);
    return(
        <div>
            <div>
            <Link className='item' to='/logout'>Logout</Link>
            </div>
            <div>
                {classes && classes.map(c => (
                    <DisplayClass key={c.class_id} course={c} />
                ))}
            </div>
            <div>
                {isLoggedIn && <Link to='/add-class'>Add a new Class</Link>}
            </div>
        </div>
    )
}

export default ClassList;