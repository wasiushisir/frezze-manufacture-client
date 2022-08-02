import React from 'react';
import image from '../img/gggoogle (1).png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from './Home/firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import useToken from '../hooks/useToken';

const SignUp = () => {
    const navigate=useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data =>{ console.log(data);
        createUserWithEmailAndPassword(data.email, data.password)
  
    
    }

    if(user)
    {
        console.log(user);
    }

    const token=useToken(user||gUser)

    if(token){
        navigate('/')

    }


    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <h2 className='text-center text-3xl font-bold'>SignUp</h2>
                <div className='card-body'>

                    <form className='w-96 ' onSubmit={handleSubmit(onSubmit)}>
                    <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name</span>

                            </label>
                            <input
                                type="name"
                                placeholder="Enter the Name"
                                class="input input-bordered w-full max-w-xs t"


                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required',
                                    },


                                   
                                }


                                )}

                            />
                            <label
                                class="label">
                                {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors?.name?.message}</span>}
                                 


                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>

                            </label>
                            <input
                                type="email"
                                placeholder="Enter the Email"
                                class="input input-bordered w-full max-w-xs t"


                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required',
                                    },


                                    pattern: {
                                        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                                        message: 'error message' // JS only: <p>error message</p> TS only support string
                                    }
                                }


                                )}

                            />
                            <label
                                class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors?.email?.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors?.email?.message}</span>}


                            </label>
                        </div>


                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>

                            </label>
                            <input
                                type="password"
                                placeholder="Enter the Password"
                                class="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'password is required'
                                    },

                                    minLength: {
                                        value: 6,
                                        message: 'password must be 6 characters or long'
                                    }





                                })}


                            />
                            <label


                                class="label">

                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors?.password?.message}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors?.password?.message}</span>}

                            </label>
                        </div>
                        <input className='btn btn-primary w-full max-w-xs my-2' value="SignUp" type="submit" />
                        <p >Already have an Account?<span><Link className='text-primary no-underline mx-4' to='/login'>Please Login</Link></span></p>
                        <p className='text-red-500'> {error?.message}</p>
                    </form>
                    <div class="divider">OR</div>
                <button onClick={()=> signInWithGoogle()}  class="btn btn-outline btn-primary w-full max-w-xs"> <img className='mx-1' style={{width:'25px'}} src={image} alt="" /> Google Sign In</button>
                <p className='text-red-500'> {gError?.message}</p>


                </div>
               

            </div>




















        </div>
    );
};

export default SignUp;