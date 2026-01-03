import { useState } from "react";
import Spinner from "./Spinner"; 

export function RegisterForm({ setRegister, setUsers, users  }) {
  const [isLoading, setIsLoading] = useState(false);
  const initialStateErrors = {
    name: { required: false },
    email: { required: false },
    password: { required: false },
    
  };

  const [errors, setErrors] = useState(initialStateErrors);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    let errors = initialStateErrors;
    if (inputs.name == false) {
      errors.name.required = true;
    }
    if (inputs.email == false) {
      errors.email.required = true;
    }
    if (inputs.password == false) {
      errors.password.required = true;
    }
    setErrors(errors)
    if (inputs.name && inputs.email && inputs.password) {
      setIsLoading(true);
      setTimeout(() => {

        setUsers([...users, inputs]);
        setIsLoading(false);
        setRegister(false); // Send them to login page after success
      }, 1500);
    }
  };

  const handleInput = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  return (
    <div className="flex flex-1 flex-col justify-center text-white gap-6">
      <div className="flex flex-col gap-5">
        <h1 className="text-5xl font-semibold">Register</h1>
        <p className="text-sm text-gray-400 w-full max-w-xs sm:max-w-sm">
          Welcome to Mate Family. Please Register with your personal account
          information letter.
        </p>
      </div>

     {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col flex-1 gap-5 max-w-80">
          <button className="flex w-full justify-center items-center gap-3 mt-2 mb-4 bg-[#4285F4] hover:bg-blue-600 py-3 font-medium transition-colors">
            <span className="bg-white p-1 rounded-sm">
              <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" className="w-4 h-4" alt="Google" />
            </span>
            Sign up with Google
          </button>

          <div className="flex items-center gap-4 mb-4">
            <span className="flex-1 h-0.5 bg-gray-700"></span>
            <span className="text-xs text-white font-bold">OR</span>
            <span className="flex-1 h-0.5 bg-gray-700"></span>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs text-blue-400">Name</label>
              <input name="name" type="text" onChange={handleInput} className="w-full bg-transparent border-b border-gray-600 focus:border-blue-500 outline-none pb-2 text-sm" placeholder="Name" />
              {errors.name.required && <span className="text-red-700 text-xs">Name is required</span>}
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs text-blue-400">Email Address</label>
              <input name="email" type="email" onChange={handleInput} className="w-full bg-transparent border-b border-gray-600 focus:border-blue-500 outline-none pb-2 text-sm" placeholder="Email" />
              {errors.email.required && <span className="text-red-700 text-xs">Email is required</span>}
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs text-blue-400">Password</label>
              <input name="password" type="password" onChange={handleInput} className="w-full bg-transparent border-b border-gray-600 focus:border-blue-500 outline-none pb-2 text-sm" placeholder="Password" />
              {errors.password.required && <span className="text-red-700 text-xs">Password is required</span>}
            </div>

            <button type="submit" className="w-full bg-[#4285F4] hover:bg-blue-600 py-3 rounded-md font-semibold mt-4">
              Create Account
            </button>
          </form>

          <div className="flex justify-center gap-2 text-sm mt-2">
            <span className="text-gray-400">Already have an account?</span>
            <button onClick={() => setRegister(false)} className="text-blue-400 font-semibold cursor-pointer">Sign In</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default RegisterForm;

