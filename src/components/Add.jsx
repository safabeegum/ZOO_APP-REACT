import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Add = () => {
    const[data,setData]=useState(
        {
            "animalid":"",
            "name":"",
            "description":"",
            "type":"",
            "ctype":"",
            "cageid":"",
            "age":"",
            "date":"",
            "caretaker":""
        }
    )

    const inputHandler=(event) => {
        setData({...data,[event.target.name]:event.target.value})
    }

    const readValue=() => {
        console.log(data)
        axios.post("",data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("Successfully Added")
                } else {
                    alert("Error")
                }
            }
        ).catch().finally()
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">ANIMAL ID</label>
                            <input type="text" className="form-control" name='animalid' value={data.animalid} onChange={inputHandler}/>
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">ANIMAL NAME</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">DESCRIPTION</label>
                            <textarea name="description" id="" className="form-control" value={data.description} onChange={inputHandler}></textarea>
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">TYPE</label>
                            <input type="text" className="form-control" name='type' value={data.type} onChange={inputHandler}/>
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">CLASS TYPE</label>
                            <select name="ctype" id="" className="form-control" value={data.ctype} onChange={inputHandler}>
                                <option value="Mammal">Mammal</option>
                                <option value="Bird">Bird</option>
                                <option value="Reptile">Reptile</option>
                                <option value="Fish">Fish</option>
                                <option value="Amphibian">Amphibian</option>
                                <option value="Bug">Bug</option>
                                <option value="Invertebrate">Invertebrate</option>
                            </select>
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">CAGE ID</label>
                            <input type="text" className="form-control" name='cageid' value={data.cageid} onChange={inputHandler}/>
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">AGE</label>
                            <input type="text" className="form-control" name='age' value={data.age} onChange={inputHandler}/>
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">DATE OF ARRIVAL</label>
                            <input type="date" name="date" id="" className="form-control" value={data.date} onChange={inputHandler}/>
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">CARETAKER</label>
                            <input type="text" className="form-control" name='caretaker' value={data.caretaker} onChange={inputHandler}/>
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success">SUCCESS</button>
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-secondary">RESET</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add