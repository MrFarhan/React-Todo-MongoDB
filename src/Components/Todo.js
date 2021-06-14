import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import '../App.css';
import axios from 'axios'


export const Todo = () => {

    const [input, setInput] = useState();
    const [showArr, SetShowArr] = useState([]);
    const [editIndex, SetEditIndex] = useState();

    const ShowArrFunc = () => {
        let temp = [...showArr]
        if (input?.trim().length) {
            temp.push(input)
            let tempTodo = {
                title: input
            }
            axios.post("http://localhost:3030/create", tempTodo)
            // SetShowArr(temp)
            setInput("")
        }

    }
    
    
    const Remove = (remIndex) => {
        console.log("removed index", remIndex)
        axios.delete(`/delete/${remIndex}`)
    }
    
    React.useEffect(() => {
        fetch("/todos").then(res => {
            if (res.ok) {
                console.log("resp is ", res)
                return res.json()
            }
        }).then(resData => SetShowArr(resData))
    }, [input,Remove])

    const Edit = (EditIndex) => {
        let temp = [...showArr]
        temp = temp.filter((item, index) => index === EditIndex)[0]
        console.log(temp)
        setInput(temp)
        SetEditIndex(EditIndex)
    }

    const Update = () => {
        let temp = [...showArr]
        temp[editIndex] = input
        SetShowArr(temp)
        SetEditIndex(false)
        setInput("")

    }

    const DeleteAll = () => {
        SetShowArr([])
        axios.delete("http://localhost:3030/deleteAll", {})
        setInput("")
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            if (editIndex || editIndex === 0) {
                Update()
            } else ShowArrFunc()
        }}>
            <Form.Control type="text" onChange={(e) => { setInput(e.target.value) }} value={input} autoFocus={true} /><br />
            {showArr?.length ? Object.values(showArr).map((item, index) =>
                < div key={index} ><span className="todoInputList">{item?.title}</span>
                    <Button type="button" className="todoEditbtn" onClick={() => Edit(index)} variant="secondary" > Edit </Button>
                    <Button variant="danger" className="todoDeletebtn" type="button" onClick={() => Remove(item?._id)} > X </Button></div>
            ) : ""
            }
            <br />
            {(editIndex || editIndex === 0) ? <Button type="submit" className="add"  >Update</Button> : <Button type="submit" className="update">Add</Button>}
            &nbsp; <Button onClick={() => DeleteAll()} className="deleteall">Delete All</Button>
            {console.log(input, "input")}
        </form >
    )
}