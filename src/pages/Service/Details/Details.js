import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData} from 'react-router-dom';
import { contextProvider } from '../../../Context/Context';
import Table from './Table/Table';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import toast, { Toaster } from 'react-hot-toast';

const Details = () => {
    const service = useLoaderData()
    const { user } = useContext(contextProvider)
    let { name, image, cat, desc, price } = service
    const [reviews, setReviews] = useState([])
    const reviewData = (e) => {
        e.preventDefault();
        if (user) {
            const form = e.target;
            const review = form.text.value;
            const userName = user?.displayName;
            const image = user?.photoURL;
            const latestReview = {
                review,
                userName,
                productName: name,
                image
            }
            fetch('https://wedding-wesite-server.vercel.app/reviews', {
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
        } else {
            toast.success('plz login to add a review')
        }
    }


    useEffect(() => {
        fetch(`https://wedding-wesite-server.vercel.app/reviews?productName=${name}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [name])

    return (
        <div className='w-4/5 mx-auto'>
            <div className='border-2 p-8 grid md:grid-cols-2 gap-5 text-left'>
                <div className='cursor-pointer'>
                    <PhotoProvider>
                        <PhotoView src={image}>
                            <img src={image} alt="" className='w-full max-h-96 object-cover' />
                        </PhotoView>
                    </PhotoProvider>
                </div>
                <div className='flex flex-col justify-center'>
                    <h2 className='font-bold text-5xl'>{name}</h2>
                    <p className='text-xl py-3'>${price}</p>
                    <p className='text-lg'>Category: <span className='text-red-400'>{cat}</span></p>
                    <p className='text-gray-500'>Description: {desc}</p>
                </div>
            </div>
            {/* input section */}
            <div className='md:w-3/5 mx-auto my-10'>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Plz login first</span>
                    </label>
                    <form onSubmit={reviewData}>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" name='text' required />
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
            <Toaster />
        </div>

    );
};

export default Details;