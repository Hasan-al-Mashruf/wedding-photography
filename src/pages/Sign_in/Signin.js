import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa';
import { contextProvider } from '../../Context/Context';
import { GoogleAuthProvider } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();


const Signin = () => {
    const { googleLogin, login } = useContext(contextProvider)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    //jwt token..
    const jwtToken = (currentUser) => {
        fetch('https://wedding-wesite-server.vercel.app/jwt', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(currentUser),
        })
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem('websiteToken', data.token)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const formData = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        login(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const currentUser = {
                    user: user.email
                }
                jwtToken(currentUser)
                navigate(from, { replace: true });
                // ...
            })
            .catch((error) => console.error(error));
    }

    //google login
    const googleUser = () => {
        googleLogin(googleProvider)
            .then((result) => {
                const user = result.user;
                // console.log(user)
                const currentUser = {
                    user: user.email
                }
                jwtToken(currentUser)
                navigate(from, { replace: true });
            }).catch((error) => console.error(error));
    }
    return (
        <div>
            <div className='md:w-2/6 w-5/6 mx-auto'>
                <form className="card flex-shrink-0 w-full shadow-2xl bg-base-100 border mt-2" onSubmit={formData}>
                    <div className="card-body">
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
                                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6 text-center">
                            <input type="submit" value="Login" className='btn btn-primary' />
                            <div className="divider">OR</div>
                            <div className='social-icon flex justify-center pt-5'>
                                <Link onClick={googleUser} href="/" className='mx-2 text-xl'>
                                    <button className="btn gap-2">
                                        <FaGoogle />
                                        Google Login
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signin;