import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'


export const Signin = () => {
    const [uEmail, setuEmail] = useState()
    const [uPassword, setuPassword] = useState()


    let history = useHistory();
    const Login = () => {


        if (uEmail?.length < 4) {
            alert('Please enter an email address.');
            return;
        }
        if (uPassword?.length < 4) {
            alert('Please enter a password.');
            return;
        }
    }


    const signUp = () => {
        history.replace("/signup")
    }

    return (
        <div className="signinComp">
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setuEmail(e.target.value)} value={uEmail} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setuPassword(e.target.value)} value={uPassword} />
                </Form.Group>

                <Button variant="primary" onClick={Login}>Sign in</Button> &nbsp;
                <Button variant="primary" onClick={signUp}>Sign up</Button>

            </Form>
        </div>

    )
}
