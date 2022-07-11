import Link from "next/link";
import { useEffect, useState } from "react";
function Register(){
 
    
    return (
        <center>
             <div className="box1 container-fluid">
                 <br></br>
                    <div className="logincontainer mb-3">
                        <form method="GET" action="#" onSubmit={(e) => {
                            e.preventDefault();
                            var email  = document.getElementById("email").value;
                            var fullname  = document.getElementById("fullname").value;
                            var phone  = document.getElementById("phone").value;
                            var password  = document.getElementById("password").value;
                            fetch(`https://boombet.com.ng/app/apis/register.php?email=${email}&password=${password}&fullname=${fullname}&phone=${phone}`, {
                                method: "GET"
                            })
                            .then(response => response.json())
                            .then((data) => {
                                if(data.code == 200){
                                    localStorage.setItem("userIsLoggedIn", email);
                                    window.location.href = "/v1/dashboard"
                                }else{
                                    alert(data.message);
                                }
                            })
                        }}> 
                              <div className="header p-3" >
                                <div className="registericon"><i className="fas fa-user-plus fa-2x"></i></div>
                                  <h2>Register</h2>
                                </div>
                            <div>
                <div className="inputbox mt-3">
                    <input
                        type="text" 
                        placeholder="Fullname" 
                        id="fullname"
                        required 
                    ></input> 
                </div>
                    <div className="inputbox mt-3">
                        <input  
                            type="number" 
                            placeholder="Phone number" 
                            id="phone"
                            required
                    ></input> 
                    </div>
                        <div className="inputbox mt-3">
                            <input 
                            type="email"
                            placeholder= " Email Address" 
                            required
                            id="email"
                        ></input> 
                        </div>  
                            <div className="inputbox mt-3">
                                <input 
                                    type="password" 
                                    placeholder="Password" 
                                    id="password" 
                                    required
                                ></input> 
                            </div>  
                    </div>  
                        <div className="mt-3">
                            <button className=" subitbutt btn btn-md btn-primary">Register</button>
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

 
export default Register;