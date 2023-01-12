import React from 'react';

const Login = () => {
    return (
        <div class="flex hero h-screen bg-accent justify-center items-center ">

            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <div class="form-control">
                        <h1 className='text-center text-2xl'>Login</h1>
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" class="input input-bordered" />
                        <label class="label">
                            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div class="form-control mt-6">
                        <button class="btn btn-primary">Login</button>
                        <div className='divider'>OR</div>
                        <button class="btn btn-glass hover:btn-accent">Continue With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;