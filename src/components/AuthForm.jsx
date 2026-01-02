import React from "react"; // import react to use jsx

// make AuthForm component
export function AuthForm() {
  return (
    // Right side main container, vertical flex, center, space between, white text
    <div className="flex flex-1 flex-col justify-center pt-20 text-white gap-6">
      
      {/* header container */}
      <div className="flex flex-col gap-5">
        <h1 className="text-5xl font-semibold">Welcome Folk</h1> {/* big title */}
        <p className="text-sm text-gray-400 w-90">
          Welcome to Mate Family. Please login with your personal account
          information letter.
        </p> {/* small description */}
      </div>

      {/* google sign in container */}
      <div className="flex flex-col flex-1 gap-5 max-w-80">
        <button
          className="flex w-full justify-center items-center gap-3 mt-2 mb-4 
          bg-[#4285F4] hover:bg-blue-600 py-3 font-medium transition-colors"
        >
          {/* google icon box*/}
          <span className="bg-white p-1 rounded-sm">
            <img
              src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png"
              className="w-4 h-4"
              alt="Google"
            />
          </span> {/* google icon */}
          Sign in with Google {/* button text */}
        </button>

        {/* OR divider */}
        <div className="flex items-center gap-4 mb-4">
          <span className="flex-1 h-[1px] bg-gray-700"></span> {/* left line */}
          <span className="text-xs text-white font-bold">OR</span> {/* OR text */}
          <span className="flex-1 h-[1px] bg-gray-700"></span> {/* right line */}
        </div>

        {/* form container */}
        <form className="flex flex-col gap-4">
          {/* email input container */}
          <div className="flex flex-col gap-1">
            <label className="text-xs text-blue-400">Email Address</label> {/* email label */}
            <input
              type="email"
              className="w-full bg-transparent border-b border-gray-600 
              focus:border-blue-500 outline-none pt-0.5 pb-2
              transition-colors text-sm"
              placeholder="Email"
            /> {/* email input */}
          </div>

          {/* password input container */}
          <div className="flex flex-col gap-1">
            <input
              type="password"
              className="w-full bg-transparent border-b border-gray-600 
              focus:border-blue-500 outline-none pb-2 
              transition-colors text-sm"
              placeholder="Password"
            /> {/* password input */}
          </div>

          {/* remember and forgot */}
          <div className="flex justify-between items-center text-xs text-gray-400">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-blue-500" /> {/* remember checkbox */}
              Remember me {/* label text */}
            </label>

            <a href="#" className="hover:text-white transition-colors">
              Forgot Password? {/* forgot link */}
            </a>
          </div>
        </form>

        {/* action buttons container */}
        <div className="flex gap-4 pt-2 mt-7">
          <button
            className="flex-1 bg-[#4285F4] from-blue-500 to-blue-600 
            hover:from-blue-600 hover:to-blue-700 
            py-3 rounded-md font-semibold transition-all 
            shadow-lg shadow-blue-500/20"
          >
            Get Start {/* login button */}
          </button>

          <button
            className="flex-1 border border-gray-600 
            hover:bg-white/5 py-3 rounded-md font-semibold transition-all"
          >
            Register {/* register button */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AuthForm; // export component
