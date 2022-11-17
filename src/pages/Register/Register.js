import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { contextProvider } from '../../Context/Context';

const Register = () => {
    const { createUser, updateName } = useContext(contextProvider)
    const navigate = useNavigate()
    const formData = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, image, email, password)
        createUser(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                updateName(name, image);
                console.log(user)
                navigate("/");
                window.location.reload();
                // ...
            })
            .catch((error) => console.error(error));
    }
    return (
        <div>
            <form className="card flex-shrink-0 w-full shadow-2xl bg-base-100 border mt-2" onSubmit={formData}>
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" className="input input-bordered" name='name' />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image url</span>
                        </label>
                        <input type="text" placeholder="name" className="input input-bordered" name='image' />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" name='email' />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered" name='password' />
                        <label className="label">
                            <p className='text-sm'>If your are already registered plz <Link to='/signin' className='text-secondary font-bold'>login here</Link></p>
                        </label>
                    </div>
                    <div className="form-control mt-6 text-center">
                        <input type="submit" value="Register" className='btn btn-primary' />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;