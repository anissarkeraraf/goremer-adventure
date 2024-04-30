import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const Register = () => {

    const { createUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { email, password, name, photoURL } = data;
        if (password.length < 6) {
            toast.error('Password should be at least 6 character');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error('Your password should have at least one upercase character')
            return;
        }
        else if (!/[a-z]/.test(password)) {
            toast.error('Your password should have at least one lowercase character')
            return;
        }
        else {
            toast.success('User register successfully');
        }
        createUser(email, password)

            .then((result) => {
                console.log(result)
                reset();
                navigate('/');

            })

            .catch(error => {
                console.log(error)
                toast.error('Register failed')
            })
    }








    return (
        <div>
            <Helmet>
                <title>Register | Home Idings</title>
            </Helmet>
            <div className="hero min-h-screen">

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h2 className="text-4xl text-center">Please Register</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Full Name" className="input input-bordered" required
                                {...register("name", { required: true })}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required
                                {...register("email", { required: true })}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> PhotoURL</span>
                            </label>
                            <input type="text" name="photoURL" placeholder="photoURL" className="input input-bordered" required
                                {...register("photoURL", { required: true })}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Password</span>
                            </label>
                            <div className="flex relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered w-full"
                                    required
                                    {...register("password", { required: true })}
                                />
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
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>

                    <p className="text-center">Already have an account? Please <Link to='/login' className="btn btn-link">Login</Link></p>
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;