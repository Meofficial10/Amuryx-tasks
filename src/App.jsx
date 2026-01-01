
function App() {
  

  return (
<div className="min-h-screen flex items-center justify-center bg-[#1a1a2e] p-6 ">{/* Main Page Container */}
  

  <div className="flex flex-col md:flex-row w-full max-w-5xl min-h-[700px] bg-[#0b112b] rounded-xl shadow-2xl overflow-hidden "> {/* Box Container */}
   

    {/* Left Section img */}
    <div className="hidden md:flex flex-1 items-center justify-center relative">
      <div className="relative w-full max-w-[300px] z-10">
        <img src="" alt="Security image" className="w-full h-auto" />{/* img */}
      </div>

      {/* Glow Shape*/}
      <div className="absolute top-1/2 left-1/2 
        -translate-x-1/2 -translate-y-1/2 
        w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]">
      </div>
    </div>

    {/* Right Section */}
    <div className="flex flex-1 flex-col justify-center pt-20 text-white gap-6">
      
      {/* Header  */}
      <div className="flex flex-col gap-5">
        <h1 className="text-5xl font-semibold">Welcome Folk</h1>
        <p className="text-sm text-gray-400">
          Welcome to Mate Family. Please login with your personal account information letter.
        </p>
      </div>
    
      <div className="flex flex-col flex-1 gap-5 max-w-80"> 
              {/* Google Sign In */}
      <button className="flex w-full justify-center items-center gap-3 mt-5 mb-4 
        bg-[#4285F4] hover:bg-blue-600 
        py-3 font-medium transition-colors">
        
        <span className="bg-white p-1 rounded-sm">
          <img
            src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png"
            className="w-4 h-4"
            alt="Google"
          />
        </span>

        Sign in with Google
      </button>

      {/* OR Divider */}
      <div className="flex items-center gap-4 mb-4">
        <span className="flex-1 h-[1px] bg-gray-700"></span>
        <span className="text-xs text-white font-bold">OR</span>
        <span className="flex-1 h-[1px] bg-gray-700"></span>
      </div>

      {/* Form */}
      <form className="flex flex-col gap-4">
        
        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-400">Email Address</label>
          <input
            type="email"
            className="w-full bg-transparent border-b border-gray-600 
              focus:border-blue-500 outline-none py-2 
              transition-colors text-sm"
          />
        </div>

        <div className="flex flex-col gap-1">
          
          <input
            type="password"
            className="w-full bg-transparent border-b border-gray-600 
              focus:border-blue-500 outline-none py-2 
              transition-colors text-sm"
              placeholder="Password"
          />
        </div>

        <div className="flex justify-between items-center text-xs text-gray-400">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="accent-blue-500" />
            Remember me
          </label>

          <a href="#" className="hover:text-white transition-colors">
            Forgot Password?
          </a>
        </div>
      </form>

      {/* Action Buttons */}
      <div className="flex gap-4 pt-2 mt-7 ">
        <button className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 
          hover:from-blue-600 hover:to-blue-700 
          py-3 rounded-md font-semibold transition-all 
          shadow-lg shadow-blue-500/20">
          Get Start
        </button>

        <button className="flex-1 border border-gray-600 
          hover:bg-white/5 
          py-3 rounded-md font-semibold transition-all">
          Register
        </button>
      </div>
      </div>

    </div>
  </div>
</div>
    
  )
}

export default App
