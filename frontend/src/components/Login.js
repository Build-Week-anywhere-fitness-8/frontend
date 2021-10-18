import React from 'react';
import { Card, Form, FormGroup, Label, Input, Button} from 'reactstrap';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
    };

    render(){
        return(
            <div className='loginContainer'>
                <Card body className='text-center'>
                    <Form>
                        <FormGroup>
                            <Label for='username'>Username</Label>
                            <Input 
                                type="text" 
                                name='username' 
                                id='username' 
                                placeholder='username' 
                                value={this.state.credentials.username}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for='password'>Password</Label>
                            <Input 
                                type="password" 
                                name='password' 
                                id='password' 
                                placeholder='password'
                                value={this.state.credentials.password}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default Login;