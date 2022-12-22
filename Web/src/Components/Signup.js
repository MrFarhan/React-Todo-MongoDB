import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'



export const Signup = () => {
    const [uName, setuName] = useState("")
    const [uEmail, setuEmail] = useState("")
    const [uPassword, setuPassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")
    let navigate = useNavigate();



    const Logon = () => {

        if (uEmail.length < 4) {
            alert('Please enter an email address.');
            return;
        }
        if (uPassword.length < 4) {
            alert('Please enter a password.');
            return;
        }
        if (uPassword !== confirmPassword) {
            alert("password and confirm password mismatched")
            return;
        }

    }
    const Loginpush = () => {
        navigate("/signin")
    }



    return (
        <div className="signupComp">
            <Form>

                <Form.Group id="inputs">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" placeholder="User Name" onChange={(e) => setuName(e.target.value)} value={uName} />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Enter Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email " onChange={(e) => setuEmail(e.target.value)} value={uEmail} />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setuPassword(e.target.value)} value={uPassword} />
                </Form.Group>


                <Form.Group >
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Pawword" onChange={(e) => setconfirmPassword(e.target.value)} value={confirmPassword} />
                </Form.Group>

                <Button variant="primary" onClick={Loginpush} >Sign in</Button> &nbsp;
                <Button variant="primary" onClick={Logon}>Sign up</Button>

            </Form>

        </div>
    )
}
