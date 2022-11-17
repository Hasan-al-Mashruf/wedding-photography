import React from 'react';
const ContactUs = () => {
    return (
        <div className='py-10'>
            <div className='w-4/6 mx-auto shadow-2xl rounded-md'>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/400/arch" alt="Album" /></figure>
                    <div className="card-body justify-center">
                        <h2 className='text-2xl'>We always value your opinions</h2>
                        <div className='w-20 h-2 bg-secondary mb-2 mt-1'></div>
                        <form className="card flex-shrink-0 w-full mt-4">
                            <div className="card-body p-2">
                                <div className="form-control">
                                    <textarea className="textarea textarea-secondary rounded-sm" placeholder="Message"></textarea>
                                    <button className="btn btn-secondary border-2 mt-3">Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ContactUs;