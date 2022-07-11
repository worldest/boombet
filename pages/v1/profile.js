import Footer from "../api/footer";
import Navbar from "./navbar";
import Stats from "./stats";
import { useEffect, useState } from "react";
function Dashborad(){
    const [user, setUser] = useState({
        fullname: "",
        email: "",
        phone: "",
        status: "",
    });
    const [freeTips, setFreeTips] = useState([])
    useEffect(() => {
        var isLoggedIn = localStorage.getItem("userIsLoggedIn");
        if(isLoggedIn === null || isLoggedIn === undefined){
            window.location.href = "/v1/login";
        }
        fetch(`https://boombet.com.ng/app/apis/getUser.php?email=${isLoggedIn}`, {
            method: "GET"
        })
        .then(response => response.json())
        .then((data) => {
            setUser(data);
        })

        fetch(`https://boombet.com.ng/app/apis/allTips.php?category=Free Tips`, {
            method: "GET"
        })
        .then(response => response.json())
        .then((data) => {
            setFreeTips(data)
        })


    }, [])
    return(
    <div className="container">
      <div className=" parent-box  container-fluid">
         <Navbar/>
            
                <div>
                {/* Import Stats Here */}
                <Stats />
                <div className="row mt-5">
                    <div className="col-md-4 mb-5 col-12">
                        <div className="inner">
                            <p>Fullname</p>
                            <input className="form-control" value={user.fullname}></input>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5 col-12">
                        <div className="inner">
                            <p>Email</p>
                            <input className="form-control" value={user.email}></input>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5 col-12">
                        <div className="inner">
                            <p>Phone</p>
                            <input className="form-control" value={user.phone}></input>
                        </div>
                    </div>
                    
                </div>
                </div>
            </div>
        
            <div className="mt-5">
                <Footer/>
            </div>
        </div>
     );
 }
 export default Dashborad;