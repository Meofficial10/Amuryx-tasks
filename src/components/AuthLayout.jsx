import AuthForm from "./AuthForm";

export function AuthLayout(){
    return(
        <div className="bg-gray-100 min-h-screen flex justify-center items-center">  {/* main container*/}
            <div className="bg-white-200 w-[900] h-[600] rounded-2xl flex overflow-hidden">  {/* box container*/}
                <div className="flex-1 justify-center items-center related"> 
                       {/*left*/} 
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