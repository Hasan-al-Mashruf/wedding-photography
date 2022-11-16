import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const Card = ({ member }) => {
    const { name, image, experience, position } = member
    return (
        <div>
            <div className="card card-compact w-5/6 bg-base-100 shadow-xl mx-auto text-center">
                <figure><img src={image} alt="Shoes" className='h-52 w-52 rounded-full object-cover' /></figure>
                <div className="card-body">
                    <h2 className="text-base">{name}Shoes!</h2>
                    <p>Experience : {experience}</p>
                    <p>Position: {position}</p>
                    <button className="btn btn-secondary border-2 mt-3"><FaInstagram className='mr-2' /> Profile</button>
                </div>
            </div>
        </div >
    );
};

export default Card;