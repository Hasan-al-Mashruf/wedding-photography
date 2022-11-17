import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddService = () => {
    const navigate = useNavigate();
    const formData = (e) => {
        e.preventDefault();
        const form = e.target;
        const serviceName = form.service.value;
        const price = form.price.value;
        const categoryName = form.category.value;
        const image = form.image.value;
        const description = form.description.value;
        const latestServices = {
            name: serviceName,
            image,
            cat: categoryName,
            desc: description,
            price
        }
        console.log(latestServices)

        fetch('https://wedding-wesite-server.vercel.app/collections', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(latestServices),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                if (data.acknowledged) {
                    toast.success('New service is confirmed')
                    navigate('/service')
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <div className='bg-violet-200 flex items-center'>
            <div className='grid grid-cols-2 border w-3/5 mx-auto py-5 pr-5'>
                <div className='flex justify-center mt-2' style={{ height: '60vh' }}>
                    <img src={"https://i.ibb.co/vXKm0Mx/pexels-monstera-9430877.jpg"} alt="" className='h-full rounded-md' />
                </div>
                <div>
                    <form onSubmit={formData} className="card w-full shadow-2xl bg-base-100 border-2 mt-2 rounded-none py-2 p-3">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Name</span>
                                </label>
                                <input type="text" placeholder="service name" className="input input-bordered rounded-sm" name='service' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" placeholder="price" className="input input-bordered rounded-sm" name='price' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Catagroy Name</span>
                                </label>
                                <input type="text" placeholder="Category" className="input input-bordered rounded-sm" name='category' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image url</span>
                                </label>
                                <input type="text" placeholder="image" className="input input-bordered rounded-sm" name='image' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Descriptions</span>
                                </label>
                                <textarea className="textarea textarea-bordered rounded-sm" placeholder="Descriptions" name='description'></textarea>
                            </div>
                            <div className='mt-4'>
                                <input type="submit" value="Submit here" className='btn btn-active btn-secondary' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default AddService;