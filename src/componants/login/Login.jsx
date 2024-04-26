import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { Result } from "postcss";
import { ToastContainer, toast } from "react-toastify";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase/firebase.config";

const Login = () => {

    const { loginUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();
    const githubProveider = new GithubAuthProvider();

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        loginUser(email, password)
            .then(result => {
                console.log(result.user)

                navigate('/')
                toast.success('User login successfully')
            })
            .catch(error => {
                console.log(error.messege)
                toast.success('Login failed')
            })
    }

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user)
                toast.success("Google login successful");
                navigate('/');

            })
            .catch(error => {
                console.log(error.message)
                toast.error("Google login failed");
            })
    }

    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProveider)
            .then(result => {
                console.log(result.user)
                toast.success('Github login successfully')
                navigate('/')
            })
            .catch(error => {
                console.log(error.message)
                toast.error('Github login failed')
            })
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col md:w-1/2">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Please Login!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="flex relative">

                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered w-full"
                                    required />
                                <span className="absolute left-72 top-4" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className=" mt-6">
                            <button className="btn w-full btn-primary">Login</button>
                        </div>

                    </form>
                    <p className="mx-auto">Do not have an account? Please <Link to='/register' className="btn btn-link">Register</Link></p>
                    <div class="inline-flex items-center justify-center w-full">
                        <hr class="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                        <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">or</span>
                    </div>
                    <div className="px-10">
                        <button onClick={() => handleGoogleLogin()} className="btn w-full"><FaGoogle className="text-2xl"></FaGoogle></button>
                    </div>
                    <div className="px-10 pb-5 pt-5">
                        <button onClick={() => handleGithubLogin()} className="btn w-full"><FaGithub className="text-2xl"></FaGithub></button>
                    </div>
                </div>

            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;