import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { contextProvider } from '../../../Context/Context';
import Table from './Table/Table';

const Details = () => {
    const service = useLoaderData()
    const { user } = useContext(contextProvider)
    const { name, image, cat, desc, price } = service
    const [reviews, setReviews] = useState([])

    const reviewData = (e) => {
        e.preventDefault();
        const form = e.target;
        const review = form.text.value;
        const userName = user?.displayName;
        const image = user?.photoURL;
        // console.log(review, name, image)

        const latestReview = {
            review,
            userName,
            productName: name,
            image
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(latestReview),
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log('Success:', data);
                if (data.acknowledged) {
                    const newReviews = [...reviews, latestReview]
                    setReviews(newReviews)
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        form.reset();
    }

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?productName=${name}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [name])

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
            {/* input section */}
            <div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Give us your review?</span>
                    </label>
                    <form onSubmit={reviewData}>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" name='text' />
                        <input type="submit" value="Submit" className="btn btn-active btn-secondary px-10 mt-3" />
                    </form>
                </div>
            </div>
            {/* review section */}
            <div>
                {
                    reviews.map((rv, index) => <Table key={rv._id} review={rv} index={index}></Table>)
                }
            </div>
        </div>

    );
};

export default Details;