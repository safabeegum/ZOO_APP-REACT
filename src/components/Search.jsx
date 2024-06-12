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
        axios.post("",data).then(
            (response) => {
                setresult(response.data)
            }
        )
    }

        const deleteCourse=(id) => {
            let input = {"_id": id}
            axios.post("",input).then(
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
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search