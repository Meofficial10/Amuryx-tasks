import { useState } from "react";
import Spinner from "./Spinner"; 

export function LoginForm({ setRegister, users, setCurrentUser }) {
  const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState("");

  const initialStateErrors = {
    email: { required: false },
    password: { required: false },
  };

  const [errors, setErrors] = useState(initialStateErrors);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (event) => {
    event.preventDefault();
    setError("");

    let errors = initialStateErrors;
    if (inputs.email == false) {
      errors.email.required = true;
    }
    if (inputs.password == false) {
      errors.password.required = true;
    }

    setErrors(errors);

    if (inputs.email && inputs.password) {
      setIsLoading(true);
      setTimeout(() => {
        // Find user in the array
        const foundUser = users.find(
          (u) => u.email === inputs.email && u.password === inputs.password
        );

        if (foundUser) {
          setCurrentUser(foundUser); // Login success!
        } else {
          setError("Invalid email or password. Please register first.");
        }
        setIsLoading(false);
      }, 1500);
    }
  };

  const handleInput = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  return (
    // Right side main container
    <div className="flex flex-1 flex-col justify-center text-white gap-6">
      {/* header container */}
      <div className="flex flex-col gap-5">
        <h1 className="text-5xl font-semibold">Sign</h1>
        <p className="text-sm text-gray-400 w-full max-w-xs sm:max-w-sm">
          Welcome to Mate Family. Please login with your personal account
          information letter.
        </p>
      </div>

      {/* google sign in container */}
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col flex-1 gap-5 max-w-80">
            <button className="flex w-full justify-center items-center gap-3 mt-2 mb-4 bg-[#4285F4] hover:bg-blue-600 py-3 font-medium transition-colors">
            <span className="bg-white p-1 rounded-sm">
              <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" className="w-4 h-4" alt="Google" />
            </span>
            Sign in with Google
          </button>

          <div className="flex items-center gap-4 mb-4">
            <span className="flex-1 h-0.5 bg-gray-700"></span>
            <span className="text-xs text-white font-bold">OR</span>
            <span className="flex-1 h-0.5 bg-gray-700"></span>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            {error && <p className="text-red-500 text-xs bg-red-500/10 p-2 rounded">{error}</p>}
            
            <div className="flex flex-col gap-1">
              <label className="text-xs text-blue-400">Email Address</label>
              <input
                type="email"
                name="email"
                onChange={handleInput}
                className="w-full bg-transparent border-b border-gray-600 focus:border-blue-500 outline-none pb-2 text-sm"
                placeholder="Email"
              />
                {errors.email.required && <span className="text-red-700 text-xs">Email is required</span>}
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs text-blue-400">Password</label>
              <input
                type="password"
                name="password"
                onChange={handleInput}
                className="w-full bg-transparent border-b border-gray-600 focus:border-blue-500 outline-none pb-2 text-sm"
                placeholder="Password"
              />
                {errors.password.required && <span className="text-red-700 text-xs">Password is required</span>}
            </div>

            <button type="submit" className="w-full bg-[#4285F4] hover:bg-blue-600 py-3 rounded-md font-semibold mt-4">
              Sign In
            </button>
          </form>

          <div className="flex justify-center gap-2 text-sm mt-2">
            <span className="text-gray-400">Don't have an account?</span>
            <button onClick={() => setRegister(true)} className="text-blue-400 font-semibold cursor-pointer">Register</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginForm;


