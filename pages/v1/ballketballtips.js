import Footer from "../api/footer";
import Navbar from "./navbar";
import { useState, useEffect } from "react";
function Freetips(){
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
            if(data.status === "Regular"){
                alert("This page is not available for Regular members, please susbscribe for VIP Member");
                window.location.href = "/v1/dashboard";
            }
        })

        fetch(`https://boombet.com.ng/app/apis/allTips.php?category=Basketball Tips`, {
            method: "GET"
        })
        .then(response => response.json())
        .then((data) => {
            setFreeTips(data)
        })


    }, [])
    return(
        <div className="alltipsbox mt-5 ">
        <div className="container-fluid">
            <Navbar/>
            
        <div className="alltipslabel"><h4>Basketball Tips</h4></div>
        <div style={{height: 400, overflowY: "auto"}}>
                         {
                            user.status === "VIP Member" ?
                            freeTips.map((obj, index) => {
                                return(
                                    <div key={index} className="row mt-3" style={{border: "2px solid #c4c5c6", padding: 10}}>
                                        <div className=" col-sm-4"> 
                                            <div className= " alltipseventname row">
                                                <div className="col-sm-2 col-2"><i className="fas fa-futbol"></i></div>
                                                <div className="col-sm-10 col-10">
                                                    <h6>{obj.title}</h6> 
                                                    <p>{obj.created_at}</p> 
                                                </div>   
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="row alltipsgame ">
                                                <div className="col-sm-5 col-5"><h6>{obj.club_one}</h6></div>
                                                <div className="col-sm-2 col-2"><p>-</p></div>
                                                <div className="col-sm-5 col-5">  <h6>{obj.club_two}</h6></div> 
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="pt-2 row">
                                                <div className=" alltipsodd col-sm-4 col-3"><p>{obj.odd}</p></div>
                                                <div className=" alltipspredict col-sm-4 col-6">{obj.comment} </div>
                                                <div className=" alltipsicon col-sm-4 col-3" style={{fontSize: 9, fontWeight: "900"}}>{obj.status_text}</div>
                                            </div> 
                                        </div>
                                    </div>
                                )
                            })
                            :
                            <center>
                                <h5>This page is for VIP Members</h5>
                            </center>
                         }
            
                        </div>
            <div className="mt-5">
                <Footer/>
            </div>
    </div>
    </div>
    )
}


export default Freetips;