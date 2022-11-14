import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card/Card';

const Service = ({ size }) => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/collections?size=${size}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [size])
    return (
        <div className='p-20'>
            <h2>This is service sections</h2>
            <div className='grid grid-cols-3 gap-5 py-10'>
                {
                    service.map(dt => <Card key={dt._id} service={dt}></Card>)
                }
            </div>
            <div>
                <Link to='/service'>
                    <button className={size !== 3 ? 'hidden' : 'btn btn-accent font-bold'}>All services</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;