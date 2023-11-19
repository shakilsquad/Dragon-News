import React, { useContext } from 'react';
import Navbar from '../Shared/Navber/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/Provider';

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()
    console.log('object location ', location);

    const handleLogin = e => {
        e.preventDefault();
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // console.log(email,password);
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        // console.log(form.get('email'), form.get('password'));
        console.log(email, password);
        signIn(email, password)
        .then(result =>{
            console.log(result.user);
            // navigate after login
            navigate(location?.state ? location.state : '/')
        })
        .catch(error =>{
            console.error(error)
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="w-1/3 m-auto min-h-screen ">
                <div className="shadow-2xl bg-base-100">
                    <h1 className='text-center  text-3xl font-bold  py-6'>Login your account</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Enter your email address" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Enter your password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='text-center py-5 font-bold'>Dont’t Have An Account ? <Link className='text-red-500' to={'/register'}>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;