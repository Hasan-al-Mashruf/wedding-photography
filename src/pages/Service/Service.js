import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { contextProvider } from '../../Context/Context';
import Card from './Card/Card';


const Service = ({ size }) => {
    const [service, setService] = useState([])
    const { logOut } = useContext(contextProvider)
    useEffect(() => {
        fetch(`http://localhost:5000/collections?size=${size}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [size, logOut])
    
    return (
        <div className='p-16'>
            <div className={size !== 3 ? 'hidden' : 'pb-8'}>
                <h2 className='text-center text-4xl'>Selected services</h2>
                <div className='w-24 h-2 bg-secondary mt-4 mx-auto'></div>
            </div>

            <div className='grid md:grid-cols-3 grid-cols-1 gap-5 py-10'>
                {
                    service?.map(dt => <Card key={dt._id} service={dt}></Card>)
                }
            </div>
            <div className='md:text-end text-center'>
                <Link to='/service'>
                    <button className={size !== 3 ? 'hidden' : 'btn btn-wide btn-secondary font-bold '}>All services</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;