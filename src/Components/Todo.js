import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import '../App.css';
import axios from 'axios'


export const Todo = () => {

    const [input, setInput] = useState();
    const [showArr, SetShowArr] = useState([]);
    const [editIndex, SetEditIndex] = useState();
    const [isLoading, setIsLoading] = useState(false)

    const ShowArrFunc = () => {
        let temp = showArr?.length ? [...showArr] : []
        if (input?.trim().length) {
            temp.push(input)
            let tempTodo = {
                title: input
            }
            axios.post("/create", tempTodo)
            setInput("")

        }
    }
    console.log("is loading is ", isLoading)

    const Remove = (remIndex) => {
        console.log("removed index", remIndex)
        axios.delete(`/delete/${remIndex}`)
    }

    const Edit = (EditIndex) => {
        let temp = [...showArr]
        temp = temp.filter((item, index) => item?._id === EditIndex)[0]
        console.log("temp is ", temp)
        setInput(temp.title)
        SetEditIndex(EditIndex)
    }

    const Update = () => {
        let temp = [...showArr]
        temp[editIndex] = input
        axios.put(`/put/${editIndex}`, { title: input })
        SetEditIndex(false)
        setInput("")

    }



    const DeleteAll = async () => {
        SetShowArr([])
        await axios.delete("/deleteAll", {})
        setInput("")

    }

    React.useEffect(() => {
        fetch("/todos").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(resData => SetShowArr(resData))
    }, [input, Remove, Update, DeleteAll])

    const Loader = () => {
        return <h5>Loading</h5>
    }

    return (!isLoading ?
        <form onSubmit={(e) => {
            e.preventDefault()
            if (editIndex || editIndex === 0) {
                Update()
            } else ShowArrFunc()
        }}>
            <Form.Control type="text" onChange={(e) => { setInput(e.target.value) }} value={input} autoFocus={true} /><br />
            {showArr?.length ? Object.values(showArr).map((item, index) =>
                < div key={index} ><span className="todoInputList">{item?.title}</span>
                    <Button type="button" className="todoEditbtn" onClick={() => Edit(item?._id)} variant="secondary" > Edit </Button>
                    <Button variant="danger" className="todoDeletebtn" type="button" onClick={() => Remove(item?._id)} > X </Button></div>
            ) : ""
            }
            <br />
            {(editIndex || editIndex === 0) ? <Button type="submit" className="add"  >Update</Button> : <Button type="submit" className="update">Add</Button>}
            &nbsp; <Button onClick={() => DeleteAll()} className="deleteall">Delete All</Button>
        </form >
        : Loader())
}