import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import '../App.css';


export const Todo = () => {

    const [input, setInput] = useState();
    const [showArr, SetShowArr] = useState([]);
    const [editIndex, SetEditIndex] = useState();


    const ShowArrFunc = () => {
        let temp = [...showArr]
        if (input?.trim().length) {
            temp.push(input)
            SetShowArr(temp)
            setInput("")
        }

    }


    const Remove = (remIndex) => {
        let temp = [...showArr]
        temp = temp.filter((item, index) => index !== remIndex)
        SetShowArr(temp)
    }


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
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            if (editIndex || editIndex === 0) {
                Update()
            } else ShowArrFunc()
        }}>
            <Form.Control type="text" onChange={(e) => { setInput(e.target.value) }} value={input} autoFocus={true} /><br />
            {showArr.map((item, index) =>
                <div key={index} ><span className="todoInputList">{item}</span>
                    <Button type="button" className="todoEditbtn" onClick={() => Edit(index)}  variant="secondary" > Edit </Button>
                    <Button variant="danger" className="todoDeletebtn" type="button" onClick={() => Remove(index)} > X </Button></div>
            )}
            <br />
            {(editIndex || editIndex === 0) ? <Button type="submit" className="add"  >Update</Button> : <Button type="submit" className="update">Add</Button>}
            &nbsp;<Button onClick={() => DeleteAll()} className="deleteall">Delete All</Button>
            {console.log(input, "input")}
        </form>
    )
}