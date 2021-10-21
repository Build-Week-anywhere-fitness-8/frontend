import React from 'react'
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';


const ClassSignup = (props) => {

    const { classes } = props
    console.log(classes)
    let classList = classes.length > 0
        && classes.map((item, index) => {
            return <option key={index} value={item.class_id}>{item.class_name}</option>
        })

    let locationList = classes.length > 0
        && classes.map((item, index) => {
            return <option key={index} value={item.class_id}>{item.class_location}</option>
        })

    const classType = null


    return (
        <>
            <Form>
                <h2>Class Sign-up</h2>
                <FormGroup style={{ marginLeft: '40%', marginRight: '40%' }}>
                    <Label>Class</Label>
                    <Input style={{ textAlign: 'center' }} type='select' name='class-select'>
                        <option>Select a class</option>
                        {classList}
                    </Input>
                </FormGroup>
                <FormGroup style={{ marginLeft: '40%', marginRight: '40%' }}>
                    <Label>Location</Label>
                    <Input style={{ textAlign: 'center' }} type='select' name='location-select'>
                        <option>Select a location</option>
                        {locationList}
                    </Input>
                </FormGroup>
                <FormGroup>
                    { }
                </FormGroup>
            </Form>
        </>
    )

}

export default ClassSignup