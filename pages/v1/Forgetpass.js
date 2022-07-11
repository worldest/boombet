import Link from "next/link";
function Forgetpass(){
            return ( 
                <center>
                    <div className="box1 container-fluid">
                        <br></br>
                            <div className="logincontainer mb-3">
                            <form >  
                                    <div className="header pb-3">
                                        <div>
                                        <i className="fas fa-lock fa-2x"></i>
                                        </div>
                                            <div>
                                                <h2>Forget password</h2>
                                            </div>
                                      </div>
                                            <div>
                                                <div className= " forgettext pt-3">
                                                <p>We&apos;ll send you a One Time Pin to verify your account </p>
                                                <p>Quickly reset your password to get on your way</p>
                                                </div>
                                            </div>
                                                <div>
                                                    <div className="inputbox">
                                                        <input 
                                                            type="text"
                                                            placeholder= " Email or Phone number"  
                                                        ></input>
                                                    </div>
                                                </div>
                                        <div className="mt-3">
                                            <Link href="/v1/resetpassotp">
                                  <a>  <button className=" subitbutt btn btn-md btn-primary">Reset password</button></a>
                                  </Link>
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
export default Forgetpass;