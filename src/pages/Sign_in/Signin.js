import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa';
import { contextProvider } from '../../Context/Context';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Signin = () => {
    const { googleLogin } = useContext(contextProvider)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    //google login
    const googleUser = () => {
        googleLogin(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });
            }).catch((error) => console.error(error));
    }

    return (
        <div>
            <div className='w-2/6 mx-auto'>
                <form className="card flex-shrink-0 w-full shadow-2xl bg-base-100 border mt-2">
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
                                <a href="/" className='mx-2 text-xl'><FaFacebook /></a>
                                <Link onClick={googleUser} href="/" className='mx-2 text-xl'><FaGoogle /></Link>
                                <Link href="/" className='mx-2 text-xl'><FaGithub /></Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signin;