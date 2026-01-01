export function AuthForm(){
    return(
        <div>  {/* inside the right*/}
            <div>
             {/* header its only have hold the heading and desription*/}
             <h1 className="text-5xl font-bold mb-2">Welcome Folk</h1>
             <p className="text-gray-500 mb-5">Welcome to Mate Family...Welcome to Mate Family...
              Welcome to Mate Family...
             </p>
            </div>

            <div>
             {/*middle its hold the sign in with google button and OR text*/}
             <img className="" src="" alt="" />
             <button className="text-white p-2 ">Sign up</button>
             <p className="flex justify-center items- mt-16"> OR</p>
            </div>

            <div>
             {/* Form its hold the 2 inpute and remeber checkbox and forgot password link*/}
            <form action="">
                <input className="mb-4 bg-gray-100 p- left-0 right-0 absolute p-2" type="email" name="" id="" placeholder="Enter Your Email"/>
                <input className="mb-4 bg-gray-100 p- left-0 right-0 absolute mt-15 p-2" type="password" name="" id="" placeholder="Enter Your Password" />
                <input className="" type="checkbox" name="" id="" /> 
                <p className="flex-1">Remember Me</p>
                <a href="">Forgot Password</a>
            </form>
            </div>

            <div>
             {/* action button its hold the two button one Get Start and Register*/}
             <button className="">Login</button>
             <button>Sign up</button>
            </div>
        </div>
    );
}
export default AuthForm;