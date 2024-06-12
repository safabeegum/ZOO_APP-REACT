import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const View = () => {
    const[data,changeData]=useState([])

        const fetchData= () => {
            axios.get("").then((response)=>
                {
                    console.log(response.data)
                    changeData(response.data)
                }
            ).catch().finally()
        }

        useEffect(() => {fetchData()},[])
  return (
    <div>
        <Navbar/><br></br>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table table-bordered border-primary">
                <thead>
    <tr>
      <th scope="col">ANIMAL ID</th>
      <th scope="col">ANIMAL NAME</th>
      <th scope="col">DESCRIPTION</th>
      <th scope="col">TYPE</th>
      <th scope="col">CLASS TYPE</th>
      <th scope="col">CAGE ID</th>
      <th scope="col">AGE</th>
      <th scope="col">DATE OF ARRIVAL</th>
      <th scope="col">CARETAKER</th>
    </tr>
  </thead>
  {
    data.map(
        (value,index) => {
            return <tbody>
            <tr>
              
                            <td>{value.animalid}</td>
                            <td>{value.name}</td>
                            <td>{value.description}</td>
                            <td>{value.type}</td>
                            <td>{value.ctype}</td>
                            <td>{value.cageid}</td>
                            <td>{value.age}</td>
                            <td>{value.date}</td>
                            <td>{value.caretaker}</td>
                          </tr>
                        </tbody>
        }
    )
  }
  
</table>
                </div>
            </div>

            </div>
            </div>
  )
}

export default View