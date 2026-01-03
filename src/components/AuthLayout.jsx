import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm  from "./RegisterForm";
import loginImage  from "../assets/login.png";
import registerImage  from "../assets/register_img.png";

export function AuthLayout() {
  const [register, setRegister] = useState(false);
  const [users, setUsers] = useState([]); // Store all registered users
  const [currentUser, setCurrentUser] = useState(null); // The logged-in person

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300 p-6">
      <div className="flex flex-col md:flex-row w-full max-w-5xl min-h-full bg-[#000042] items-center rounded-xl shadow-2xl overflow-hidden pb-20 pt-20">
        {/* Left Side (Images) */}
        <div className="hidden md:flex  flex-1 items-center justify-center relative">
           <img src={register ? loginImage : registerImage} alt="Security" className="w-64 md:w-[400px] h-auto z-10" />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-70 h-64 bg-blue-600/50 rounded-full blur-[80px]"></div>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 md:px-10 w-full">
          {currentUser ? (
            /* Welcome Screen */
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-2">Welcome back,</h1>
              <h2 className="text-2xl text-blue-400 font-semibold mb-6">{currentUser.name}</h2>
              <button 
                onClick={() => setCurrentUser(null)}
                className="text-gray-400 hover:text-white underline text-sm"
              >
                Sign Out
              </button>
            </div>
          ) : register ? (
            <RegisterForm setRegister={setRegister} setUsers={setUsers} users={users} />
          ) : (
            <LoginForm setRegister={setRegister} users={users} setCurrentUser={setCurrentUser} />
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
