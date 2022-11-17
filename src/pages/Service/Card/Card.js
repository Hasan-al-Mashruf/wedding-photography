import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Card = ({ service }) => {
    const { name, image, cat, desc, _id } = service
    console.log(_id)
    return (
        <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <PhotoProvider>
                    <PhotoView src={image}>
                        <img src={image} alt="" className='w-full h-72 object-cover' />
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body text-left">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-red-600 uppercase'>{cat}</p>
                    <p>{desc.slice(0, 100)}...</p>
                </div>
                <Link to={`/details/${_id}`}>
                    <div className='pl-3 mb-3'>
                        <button className="btn btn-secondary rounded-md border-2 font-bold px-5 py-2">Details</button>
                    </div>
                </Link>
            </div>
        </div >
    );
};

export default Card;