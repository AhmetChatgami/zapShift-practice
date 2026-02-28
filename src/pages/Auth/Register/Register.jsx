import React from "react";
import Logo from "../../../components/Logo/Logo";
import authImage from "../../../assets/authImage.png";
import { Link, Outlet } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import SocialLogin from "../SocialLogin/SocialLogin";
const Register = () => {
  const { register, handleSubmit, formState: {errors} } = useForm();
  const {registerUser} = useAuth();

  const handleRegister = (data) => {
    console.log(data);
    registerUser(data.email, data.password)
    .then(result =>{
      console.log(result.user)
    })
    .catch(error =>{
      console.log(error.message)
    })
  };
  return (
    <div className="max-w-7xl mx-auto">
      <form onSubmit={handleSubmit(handleRegister)}>
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
          <h2 className="text-3xl text-center">Create an account</h2>
        <p className="text-center">Free to register</p>
          <div className="card-body">
            <fieldset className="fieldset">
              {/* name field */}
              <label className="label">Full Name</label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="input"
                placeholder="What's your name?"
              />
              {errors.name?.type === 'required' && <p className="text-red-500">You need to set your name</p>}


              <label className="label">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="input"
                placeholder="Email"
              />
              {errors.email?.type === 'required' && <p className="text-red-500">Email is required</p>}
              <label className="label">Password</label>
              <input
                type="password"
                {...register("password", { required: true, minLength: 6 })}
                className="input"
                placeholder="Password"
              />
              {errors.password?.type === 'required' && <p className="text-red-500">Password is required</p>}
              {errors.password?.type === 'minLength' && <p className="text-red-500">Password must be at least 6 characters</p>}
              <div>
                <p className="link link-hover">
                  Have an account? <Link to="/sign-in">Login</Link>
                </p>
              </div>
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
          </div>
          {/* <div className="text-center pb-8">
            <p>Or</p>
            <p className="flex items-center justify-center gap-2 ">Register with <FcGoogle /></p>
          </div> */}
          <SocialLogin></SocialLogin>
        </div>
      </form>
    </div>
  );
};

export default Register;
