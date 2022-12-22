import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Todo } from './Todo'

export const Main = () => {
    const state = useSelector(state => state)
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")))
    const history = useHistory()


    const Logout = () => {
        localStorage.clear()
        window.location.reload()
    }

    const Signin = () => {
        history.push("/signin")
    }

    return (
        <div className="main">
            {user?.payload && <span>Signed in as {user?.payload?.name}<img src={user?.payload?.imageUrl} alt="img" />
            </span>}
            {user?.payload ? <Button variant="primary" onClick={Logout}>Logout</Button> : <Button variant="primary" onClick={Signin}>Signin</Button>}
            <Todo />
        </div>
    )
}
