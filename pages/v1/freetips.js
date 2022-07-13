import Footer from "../api/footer";
import Navbar from "./navbar";
import { useState, useEffect } from "react";
import Link from "next/link";
function Freetips(){
    const [user, setUser] = useState({
        fullname: "",
        email: "",
        phone: "",
        status: "",
    });
    const [freeTips, setFreeTips] = useState([]);
    const [imglink, setImageLink] = useState("/1xbet-1.png");
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
        const images_ = [
            {
                id: 1,
                image: "/1xbet-1.png"
            },
            {
                id: 2,
                image: "/1xbet-2.jpg"
            },
            {
                id: 3,
                image: "/1xbet-3.gif"
            },
            {
                id: 4,
                image: "/1xbet-4.gif"
            }
        ]
        setInterval(() => {
            const rndInt = Math.floor(Math.random() * 3) + 1;
            // console.log(rndInt);
            setImageLink(images_[rndInt].image)
            console.log(imglink)
        }, 4000)
    }, [])
    return(
        <div className="alltipsbox mt-5 ">
        <div className="container-fluid">
            <Navbar/>
            <div className="row container-fluid mt-4">
                            <div className="col-md-4">
                            <Link href="https://bit.ly/3962hYe"><a><img className="adImg" src={imglink} style={{width: "100%", height: "100px", imageFit: "cover"}} /></a></Link>
                            </div>
                            <div className="col-md-4">
                                <center>
                                <h6>Register & deposit on 1XBET here</h6>
                                <p>PROMO CODE :BOOMBET201</p>
                                
                                <Link href="https://bit.ly/3962hYe"><a className="btn btn-primary">Register on 1XBET</a></Link>
                                </center>
                            </div>
                            <div className="col-md-4">
                            <Link href="https://bit.ly/3962hYe"><a><img className="adImg secondimage" src={imglink} style={{width: "100%", height: "100px", imageFit: "cover"}} /></a></Link>
                            </div>
                        </div>
        <div className="alltipslabel"><h4>Free Tips</h4></div>
        <div>
                         {
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
                                                <div className=" alltipsicon col-sm-4 col-3" style={{fontSize: 9, fontWeight: "900"}}>{
                                                    
                                                    obj.status_icon === "autorenew"
                                                     ? 
                                                     <span className="fa fa-sync" style={{color: "white", background: "orange", padding: 10, borderRadius: 300, fontSize: 20}}></span> 
                                                     : obj.status_icon === "check" ?
                                                     <span className="fa fa-check" style={{color: "white", background: "green", padding: 10, borderRadius: 300, fontSize: 20}}></span>
                                                     :
                                                     <span className="fa fa-times" style={{color: "white", background: "red", padding: 15, borderRadius: 300, fontSize: 20}}></span>
                                                }</div>
                                            </div> 
                                        </div>
                                    </div>
                                )
                            })
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