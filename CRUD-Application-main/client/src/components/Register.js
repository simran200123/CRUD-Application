import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Register = () => {

    const [inpval, setINP] = useState({
        name: "",
        status: "",
        performance: "",
        desc: ""
    })

    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }

    const addinpdata = async (e) => {
        e.preventDefault();
        const { name,
            status,
            performance,
            desc } = inpval;
        const res = await fetch("http://localhost:8003/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                status,
                performance,
                desc
            })
        })

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            alert("error");
            console.log("error ");
        }
        else {
            alert("data added");
            console.log("data added")
        }
    }

    return (
        <>
            <div className='container'>
                <NavLink to={'/'}>Home</NavLink>
                <form className='mt-4'>
                    <div className='row'>
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                            <input type="text" onChange={setdata} value={inpval.name} name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label htmlFor="exampleInputPassword1" className="form-label">Status</label>
                            <select className="form-label" name="status" value={inpval.status} onChange={setdata}>
                            <option value="">Select status</option>
                            <option value="idle">IDLE</option>
                            <option value="active">ACTIVE</option>
                            <option value="charging">CHARGING</option>
                        </select>
                        </div>
                      
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label htmlFor="exampleInputPassword1" className="form-label">Performance</label>
                            <input type="number" onChange={setdata} value={inpval.performance} name="performance" className="form-control" id="exampleInputPassword1" />
                        </div>
                      
                        <div className="mb-3 col-lg-12 col-md-12 col-12">
                            <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                            <textarea onChange={setdata} value={inpval.desc} name="desc" className='form-control' rows={10} cols={20}></textarea>
                        </div>
                        <button type="submit" onClick={addinpdata} className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register
