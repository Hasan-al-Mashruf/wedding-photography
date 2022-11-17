import React, { useEffect, useState } from 'react';
import Card from './Card/Card';

const Photographer = () => {
    const [members, setMember] = useState([]);

    useEffect(() => {
        fetch('https://wedding-wesite-server.vercel.app/member')
            .then(res => res.json())
            .then(data => setMember(data))
    }, [])

    return (
        <div className='p-16'>
            <div className='pb-20'>
                <h2 className='text-center text-4xl'>Team members</h2>
                <div className='w-24 h-2 bg-secondary mt-4 mx-auto'></div>
            </div>
            <div className='grid md:grid-cols-4 gap-5'>
                {
                    members.map(member => <Card key={member._id} member={member}></Card>)
                }
            </div>
        </div>

    );
};

export default Photographer;