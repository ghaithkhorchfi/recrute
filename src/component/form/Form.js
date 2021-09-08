import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Form = () => {
    const [firstRes, setFirst] = useState('')
    const [secondRes, setsecond] = useState('')
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [qone, setQone] = useState('')
    const [qtwo, setQtwo] = useState('')
    const [num, setnum] = useState(1)
    const alea = () => {
        const min = 1
        const max = 3
        setnum(Math.floor(Math.random() * (max - min)) + min)
        console.log(num);
        axios.get('http://localhost:3001/projet/question/' + num).then((res) => {
            setQone(res.data[0].firstQues)
            setQtwo(res.data[0].secondQues)
            console.log(res.data);
        })

    }
    const submit = () => {
        axios.post('http://localhost:3001/projet/', { first: firstRes, second: secondRes, name: name, mail: mail })
        alert('reponse enregistrer');
    }
    return (
        <div>
            <button className='btn btn-primary' onClick={alea} >STAR</button>

            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" onChange={(e) => {
                        setName(e.target.value)
                    }} />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Mail</label>
                    <input type="email" class="form-control" id="exampleInputPassword1" placeholder="Enter email" onChange={(e) => {
                        setMail(e.target.value)
                    }

                    } />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">question</label>
                    <br /><small>{qone}</small>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter reponse" onChange={(e) => {
                        setFirst(e.target.value)
                    }} />

                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">question</label>
                    <br /><small>{qtwo}</small>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter reponse" onChange={(e) => {
                        setsecond(e.target.value)
                    }} />

                </div>
                <button type="submit" class="btn btn-primary" onClick={submit} >Submit</button>
            </form>

        </div >
    )
}

export default Form
