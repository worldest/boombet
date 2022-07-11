import Link from "next/link";

function Loginpage(){
    return ( 
        <center>
            <div className="box1 container-fluid">
                <br></br>
                    <div className="logincontainer mb-3">
                        <form>  
                            <div className="header pb-3">
                                <div>
                                <i className="fas fa-user fa-2x"></i>
                                </div>
                                <h2>Login</h2>
                            </div>
                            <div>
                                <div className="inputbox">
                                    <input 
                                        type="email"
                                        id="email"
                                        placeholder= " Email Address"  
                                    ></input>
                                </div>  
                                <div className="inputbox mt-3">
                                    <input  
                                        type="password" 
                                        placeholder="Password" 
                                        id="password" 
                                    ></input> 
                                </div> 
                            </div>
                                <div className=" confirmation row">
                                    <div className=" checkbox col-sm-6">
                                        <input type="checkbox" placeholder="check"></input>
                                        <label>Remember me</label>
                                    </div>
                                        <div className=" forgetpass col-sm-6">
                                            <p> <Link href="/v1/Forgetpass">
                                                   <a><button className="forgetpassbtn">Fogot password?</button></a>
                                                    </Link>
                                                </p>
                                        </div>
                                </div> 
                                    <div> 
                                    <Link href="#login">
                                       <a> <button onClick={() => {
                                            var email = document.getElementById("email").value;
                                            var password = document.getElementById("password").value;
                                            // https://boombet.com.ng/apis/login.php

                                            fetch(`https://boombet.com.ng/app/apis/login.php?email=${email}&password=${password}`, {
                                                method: "GET"
                                            })
                                            .then(response => response.json())
                                            .then((data) => {
                                                if(data.code == 200){
                                                    localStorage.setItem("userIsLoggedIn", data.email);
                                                    window.location.href = "/v1/dashboard"
                                                }else{
                                                    alert(data.message);
                                                }
                                            })
                                       }} className=" subitbutt btn btn-md btn-primary">Login</button></a></Link>
                                    </div>
            
                            <div className="mt-3">
                                <p>Don&apos;t have an account? 
                                    <Link href="/v1/register"> 
                                        <a><button className="signupbtn" >Sign up now</button></a>
                                     </Link>
                                </p>
                                 
                            </div>
                         </form>
                    
                </div>
            </div>
         </center>
       ); 
    }

 
export default Loginpage;