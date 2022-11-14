import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const service = useLoaderData()
    const { name, image, cat, desc, price } = service
    return (
        <div className='w-4/5 mx-auto'>
            <div className='border-2 p-8 grid grid-cols-2 gap-5 text-left'>
                <div>
                    <img src={image} alt="" className='w-full max-h-96 object-cover' />
                </div>
                <div className='flex flex-col justify-center'>
                    <h2 className='font-bold text-5xl'>{name}</h2>
                    <p className='text-xl py-3'>${price}</p>
                    <p className='text-lg'>Category: <span className='text-red-400'>{cat}</span></p>
                    <p className='text-gray-500'>Description: {desc}</p>
                </div>
            </div>
            <div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Give us your review?</span>
                    </label>
                    <form action="">
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-active btn-secondary px-10 mt-3" />
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Details;