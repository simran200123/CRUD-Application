import React, { useEffect, useState } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from 'react-router-dom'

const Home = () => {

    const [getuserdata, setuserdata] = useState([]);
    console.log(getuserdata);

    const getdata = async (e) => {
        const res = await fetch("http://localhost:8003/getdata", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");
        }
        else {
            setuserdata(data);
            console.log("get data")
        }
    }

    useEffect(() => {
        getdata();
    }, [])

    const deleteuser = async(id) =>{
        const res2 = await fetch(`http://localhost:8003/deleteuser/${id}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        });

        const deletedata = await res2.json();
        console.log(deletedata);

        if(res2.status === 422 || !deletedata){
            console.log("error");
        }
        else{
            console.log("user deleted");
            getdata();
        }
    }

    return (
        <>
            <div className="mt-5">
                <div className='container'>
                    <div className='add_btn mt-2 mb-2'>
                        <NavLink to="/register" className='btn btn-primary'>Add Data</NavLink>
                    </div>

                    <table className="table">
                        <thead>
                            <tr className='table-dark'>
                                <th scope="col">Robot Id</th>
                                <th scope="col">Robot name</th>
                                <th scope="col">Robot Status</th>

                                <th scope="col">Performance</th>
                                {/* <th scope="col">Job</th> */}
                                

                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                getuserdata.map((element,id) => {
                                    return (
                                        <>
                                            <tr>
                                                <th scope="row">{id+1}</th>
                                                <td>{element.name}</td>
                                                <td>{element.status}</td>
                                                
                                                <td>{element.performance}</td>
                                                {/* <td>{element.work}</td> */}
                                                
                                                <td className='d-flex justify-content-between'>
                                                    <NavLink to={`view/${element._id}`}><button className='btn btn-success'><RemoveRedEyeIcon /></button></NavLink>
                                                    <NavLink to={`edit/${element._id}`}><button className='btn btn-primary'><CreateIcon /></button></NavLink>
                                                    <button onClick={()=>deleteuser(element._id)} className='btn btn-danger'><DeleteOutlineIcon /></button>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }

                        </tbody>
                    </table>

                </div>
            </div>
        </>
    )
}

export default Home
