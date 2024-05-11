import React, { useState, useEffect } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DescriptionIcon from '@mui/icons-material/Description';
import { useParams } from 'react-router-dom';

const Details = () => {

    const [getuserdata, setuserdata] = useState([]);
    console.log(getuserdata);

    const {id} = useParams("");
    console.log(id);

    

    const getdata = async () => {

        const res = await fetch(`http://localhost:8003/getuser/${id}`, {
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

    return (
        <div className='container mt-3'>
            <h1 style={{ fontWeight: 400 }}>Welcome Simran Saxena</h1>

            <Card sx={{ maxWidth: 600 }}>
                <CardContent>
                    {/* { <div className='add_btn'>
                        <button className='btn btn-primary mx-2'><CreateIcon /></button>
                        <button className='btn btn-danger'><DeleteOutlineIcon /></button>
                    </div> } */}
                    <div className='row'>
                        <div className='left_view col-lg-6 col-md-6 col-12'>
                            <img src={require('./profile.png')} style={{ width: 50 }} />
                            <h3 className='mt-3'>Name: <span >{getuserdata.name}</span></h3>
                            {/* <h3 className='mt-3'>Age: <span >{getuserdata.age}</span></h3> */}
                            <p className='mt-3'><MailOutlineIcon />Status: <span >{getuserdata.status}</span></p>
                            {/* <p className='mt-3'><WorkIcon />Occupation: <span >{getuserdata.work}</span></p> */}
                        </div>
                        <div className='right_view col-lg-6 col-md-6 col-12'>
                            <p className='mt-5'><PhoneAndroidIcon />Performance: <span>{getuserdata.performance}</span></p>
                            {/* <p className='mt-3'><LocationOnIcon />Location: <span>{getuserdata.add}</span></p> */}
                            <p className='mt-3'><DescriptionIcon />Description: <span>{getuserdata.desc}</span></p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Details