export function AuthForm(){
    return(
 <div className="flex justify-center items-center min-h-screen bg-[#1a1a2e] p-6 font-sans"> {/* page container center inside the page using layout system*/}
          <div className="flex flex-col md:flex-row w-full flex max-w-5xl h-[750px] bg-[#0b112b] rounded-xl shadow-2xl  overflow-hidden "> {/* card container split the box side by side using layout system*/}
            <div className="flex hidden md:flex flex-1 items-center justify-center relative "> {/* left contains image to center and using hidden to hide when mobile screen*/}
              

              <div className="relative w-full max-w-[300px] z-10r">
                <img className="w-full h-auto" src="" alt="" />
              </div>  

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-blue-500/20 blur-[80px]">

              </div>
            </div>

            <div className="flex flex-1 flex-col gap-8 p-6 md:p-19  text-white"> {/* right contains and handle the title, description,sign in with google buton, or text, forms,actions button */}
                <div className="flex flex-col gap-5">{/* header in this inside i add h1 and p and group them into this div */}
                  <h1 className="text-5xl font-semibold text-white ">Welcome Folk</h1>
                  <p className="text-sm text-gray-300 ">Welcome to Mate Family.
                     Please login with your personal account information letter.</p>
                </div>

                <div className="w-full py-3 rounded-xl  ">{/*social section in this section i add a button and google img */}
                  <button className="bg-blue-500 w-full py-3 flex justify-center items-center gap-2 rounded-xl hover:bg-blue-600 transition  shadow-lg shadow-blue-200/20">
                    <img className="rounded-xl w-5 h-5" src="" alt="" />
                    Sign in with Google
                    </button>
                  
                </div>

                <div className="flex items-center justify-center gap-1 my-4">{/*divider section in this section i only add OR text between social and form */}
                  <div className="h-[1px] flex-1 bg-gray-400"></div>
                  <p className=" mx-2 font-semibold text-xs text-white">OR</p>
                  <div className="h-[1px] flex-1 bg-gray-400"></div>
                </div>
                
                <form action="" className="flex flex-col gap-8"> {/* in this contain 2 input email,password and checkbox and forgot link  */}
                  <input className="w-full p-2 border-b outline-none focus:border-blue-500" type="email" placeholder="Email Address" />
                  <input className="w-full p-2 border-b outline-none focus:border-blue-500" type="Password" placeholder="Password" />
                  <div className="flex justify-between">
                    <label className="flex gap-2 cursor-pointer" >
                    <input  className="" type="checkbox" />
                    Remeber Me
                    
                  </label>
                  <a className="" href="">Forgot Password?</a>
                  </div>
                  
                </form>

                <div className="flex gap-3 mt-5">{/*action buttons like getstart and register */}
                <button className="bg-blue-500 flex flex-1 py-3 rounded-xl hover:bg-blue-500 shadow-lg shadow-blue-200/20 justify-center hover:bg-blue-600">Get Start</button>
                <button className="flex flex-1 py-3 border rounded-xl hover:bg-blue-500 shadow-lg shadow-blue-200/20 justify-center hover:border-none">Register</button>
                </div>
            </div>
          </div>
       </div>

    );
}
export default AuthForm;