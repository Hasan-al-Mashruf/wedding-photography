import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Card = ({ service }) => {
    const { name, image, cat, desc, _id } = service
    return (
        <div>
            <Link to={`/details/${_id}`}>
                <div className="card card-compact w-full bg-base-100 shadow-xl">
                    <PhotoProvider>
                        <PhotoView src="/1.jpg">
                            <img src={image} alt="" className='w-full h-72 object-cover' />
                        </PhotoView>
                    </PhotoProvider>
                    <div className="card-body text-left">
                        <h2 className="card-title">{name}</h2>
                        <p className='text-red-600 uppercase'>{cat}</p>
                        <p>{desc.slice(0, 100)}...</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;