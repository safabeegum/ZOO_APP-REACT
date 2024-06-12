import React from 'react'

const Add = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">ANIMAL ID</label>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">ANIMAL NAME</label>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">DESCRIPTION</label>
                            <textarea name="" id="" className="form-control"></textarea>
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">TYPE</label>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">CLASS TYPE</label>
                            <select name="" id="" className="form-control">
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
                            <input type="text" className="form-control" />
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">AGE</label>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">DATE OF ARRIVAL</label>
                            <input type="date" name="" id="" className="form-control" />
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">CARETAKER</label>
                            <input type="text" className="form-control" />
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