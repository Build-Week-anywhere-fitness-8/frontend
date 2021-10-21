import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


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

    return (
        <>
            <Form>
                <h2>Class Sign-up</h2>
                <FormGroup>
                    <Label>Class</Label>
                    <select>
                        {classList}
                    </select>
                </FormGroup>
                <FormGroup>
                    <Label>Location</Label>
                    <Input type='select' name='location-select'>

                    </Input>
                </FormGroup>
            </Form>
        </>
    )

}

export default ClassSignup