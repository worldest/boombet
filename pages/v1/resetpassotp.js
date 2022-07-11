import Link from "next/link";
function Resetpassotp(){
            return ( 
                <center>
                    <div className="box1 container-fluid">
                        <br></br>
                            <div className="logincontainer mb-3">
                            <form action="resetpass.js">  
                                    <div className="header pb-3">
                                        <div>
                                        <i className="fas fa-lock fa-2x"></i>
                                        </div>
                                            <div>
                                                <h2>OTP Sent</h2>
                                            </div>
                                      </div>
                                            <div>
                                                <div className= " forgettext pt-3">
                                                <p>We&apos;ve sent a One Time PIN to your Email </p>
                                                
                                                </div>
                                            </div>
                                                <div className="">
                                                    <div className="resetinstru p-3">
                                                        <p>Please enter the oin below to verify your Email</p>
                                                    </div>
                                                    <div className="resetpassbox">
                                                        <input 
                                                            type="number" 
                                                            placeholder="_ _ _ _"
                                                        ></input>
                                                    </div> 
                                                </div>
                                         <div className="mt-3">
                                         <Link href="/v1/resetpass">
                                  <a> <button className=" subitbutt btn btn-md btn-primary">Verify & Reset</button></a>
                                  </Link>
                                    <div className="resendpin mt-3"> 
                                   <button className=" btn btn-md btn-primary">Resend PIN</button> 
                                    </div>
                                </div>
                            <div className="mt-3">
                                <p>Already have an account? 
                                    <Link href="/v1/login">
                                    <a><button className="signupbtn">Login</button></a> 
                                    </Link>
                                </p>
                            </div>
                        </form>
                        </div>
                    </div>
                </center>
            );
}
export default Resetpassotp;