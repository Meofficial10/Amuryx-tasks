export function AuthForm(){
    return(
        <div className=" bg-[#1a1a2e] min-h-screen w-full flex justify-center items-center">
      <div className="bg-[#0b112b] w-full max-w-5xl h-[700px] rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-white/6">
        <div className=" flex-1 flex justify-center items-center relative bg-gradient-to-br p-12 hidden md:flex ">
          <p>Left Side </p>
        </div>

        <div className="flex-1  flex flex-col text-white p-8 md:p-16 ">
            <h1 className="text-5xl font-bold mb-5 text-white">Welcome Folk</h1>
             <p className="text-gray-400 mb-5 text-base/8">Welcome to Mate Family...Welcome to Mate Family...
              Welcome to Mate Family...
             </p>
              
              <div className="flex-1 w-80 relative ">
                <div className="bg-blue-500 flex justify-center  left-0 right-0 absolute" >

                <img className="" src="" alt="" />
                <button className="text-white p-2 ">Sign up</button>
               
              </div>
               <p className="flex justify-center items- mt-17"> OR</p>
              <form className="flex flex-col justify-start items-start flex-1 mt-7 " action="">
                <label htmlFor="">Email</label>
                <input className="mb-4  p- left-0 right-0 absolute p-2  border-blue-400 border-b " type="email" name="" id="" placeholder="Enter Your Email"/>
                <label className="" htmlFor="">Password</label>
                <input className="mb-4  p- left-0 right-0 absolute mt-15 p-2 border-b border-blue-400" type="password" name="" id="" placeholder="Enter Your Password" />
                <div className="flex justify-between gap-2 left-0 right-0 absolute mt-28" >
                <input className="" type="checkbox" name="" id="" /> 
                <p className="flex-1">Remember Me</p>
                <a href="" className="text-[16px]">Forgot Password?</a>
                </div>
                <div className="flex gap-7 mt-45 w-full justify-center">
                <button className="">Login</button>
                <button>Sign up</button>
                </div>
              </form>
              </div>

          </div>
        </div>
      </div>
    );
}
export default AuthForm;