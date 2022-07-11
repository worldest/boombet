import Link from "next/link";
function Resetpass(){
            return ( 
                <center>
                    <div className="box1 container-fluid">
                        <br></br>
                            <div className="logincontainer mb-3">
                            <form action="login.js">  
                                    <div className="header pb-3">
                                        <div>
                                        <i className="fas fa-lock fa-2x"></i>
                                        </div>
                                            <div>
                                                <h2>Create New Password</h2>
                                            </div>
                                      </div>
                                            <div>
                                                <div className= " forgettext pt-3">
                                                <p> Password must between 8-15 </p> 
                                                </div>
                                            </div>
                                                <div>
                                                    <div className="inputbox">
                                                        <input 
                                                            type="text"
                                                            placeholder= "New Password"  
                                                        ></input>
                                                    </div>
                                                    <div className="inputbox">
                                                        <input 
                                                            type="text"
                                                            placeholder= " Confirm Password"  
                                                        ></input>
                                                    </div>
                                                </div>
                                        <div className="mt-3">
                                        <Link href="/v1/login">
                                 <a>   <button className=" subitbutt btn btn-md btn-primary">Set Password</button></a>
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
export default Resetpass;