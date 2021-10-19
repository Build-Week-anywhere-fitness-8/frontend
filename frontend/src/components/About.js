import React from 'react';
import Anthony from './Contributor/Anthony';
import Chris from './Contributor/Chris';
import George from './Contributor/George';
import Irvin from './Contributor/Irvin';
import Monica from './Contributor/Monica';
import TraNequa from './Contributor/TraNequa';
import Robert from './Contributor/Robert';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron } from 'reactstrap';

const About = () => {


    return (
        <>
            <Jumbotron className='m-5 p-4 border rounded bg-light'>
                <h1>About</h1>
                <p>This site was made by a student team from Lambda Web for Build week project.
                    Below are the team members and their info.
                </p>
            </Jumbotron>
            <div>
                <Anthony />
                <Chris />
                <George />
                <Irvin />
                <Monica />
                <Robert />
                <TraNequa />
            </div>
        </>
    )

}

export default About