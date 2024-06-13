import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Search = () => {
    const[data,setData]=useState(
        {
            "animalid":"",
        }
    )

    const [result,setresult] = useState([])
    
    const inputHandler=(event) => {
        setData({...data,[event.target.name]:event.target.value})
    }

    const readValue=() => {
        console.log(data)
        axios.post("http://localhost:8081/search",data).then(
            (response) => {
                setresult(response.data)
            }
        )
    }

        const deleteAnimal=(id) => {
            let input = {"_id": id}
            axios.post("http://localhost:8081/delete",input).then(
                (response) => {
                    console.log(response.data)
                    if(response.data.status=="success")
                        {
                            alert("Successfully Deleted")
                        }
                        else
                        {
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
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">ANIMAL ID</label>
                            <input type="text" className="form-control" name='animalid' value={data.animalid} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-primary" onClick={readValue}>SEARCH</button>
                        </div>
                    </div><br></br>

{/* table design */}
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
    result.map(
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
                            <td><button className="btn btn-danger" onClick={() => {deleteAnimal(value._id)}}>DELETE</button></td>
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
            </div>
        </div>
    
  )
}

export default Search