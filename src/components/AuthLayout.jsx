import AuthForm from "./AuthForm";

export function AuthLayout(){
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-200 p-6">  {/* main container*/}
            <div className="flex flex-col md:flex-row w-full max-w-5xl  min-h-[700px] bg-[#000042] rounded-xl shadow-2xl overflow-hidden">  {/* box container*/}
                <div className="hidden md:flex flex-1 items-center justify-center relative"> 
                    {/*left*/}
                    <div className="relative w-full max-w-[400px] z-10">
                        <img src="src/assets/image.png" alt="Security image" className=" h-auto" />
                    </div>

                    {/* Glow Shape*/}
                    <div
                    className="absolute top-1/2 left-1/2 
                    -translate-x-1/2 -translate-y-1/2 
                    w-70 h-64 bg-blue-600/50 rounded-full blur-[80px]"
                    ></div>
                       
                </div>
                <div className="flex-1 justify-center items-center flex-col">
                    {/* right*/}
                    <AuthForm/>
                </div>
            </div>
            
        </div>
    );
}
export default AuthLayout;