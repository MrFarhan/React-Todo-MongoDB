import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import GoogleLogin from 'react-google-login'
import { profileAction } from '../Redux/actions'
import { useDispatch, useSelector } from 'react-redux'

export const Signin = () => {
    const [uEmail, setuEmail] = useState()
    const [uPassword, setuPassword] = useState()
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    console.log("state is ", state)

    let navigate = useNavigate();
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
        navigate("/signup")
    }

    const googleSuccess = (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        try {
            dispatch(profileAction(result))
            navigate.push("/")

        } catch (error) {
            console.log("error in google login is : ", error)
        }
    }


    const googleFailure = (err) => {
        console.log("Failure while logging", err)
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
                &nbsp; <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    render={(renderProps) => (
                        <Button onClick={renderProps.onClick} disabled={renderProps.disabled} variant="primary">
                            Sign in with Google
                        </Button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy="single_host_origin"

                />&nbsp; &nbsp; &nbsp;
                <Button variant="primary" onClick={signUp}>Sign up</Button>

            </Form>
        </div>

    )
}
