import Footer from "../api/footer";
import Navbar from "./navbar";
import Stats from "./stats";
import { useEffect, useState } from "react";
import Script from 'next/script'
import PaystackButton from 'react-paystack';
function Dashborad(){
    const [user, setUser] = useState({
        fullname: "",
        email: "",
        phone: "",
        status: "",
    });
    const [paystackKeys, setPaystackKeys] = useState(
        {
    		key: "pk_live_17aed50fcc18e0d23740fb7b47e2d6280723a9b1", //PAYSTACK PUBLIC KEY
    		email: user.email,  // customer email
    		amount: 1000000 //equals NGN100,
    	}
    );
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
    const callback = (response) => {
        console.log(response); // card charged successfully, get reference here
    }

    const close = () => {
        console.log("Payment closed");
    }

    const getReference = () => {
        //you can put any unique reference implementation code here
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

        for( let i=0; i < 15; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
    return(
    <div className="container-fluid">
        <Script src="https://js.paystack.co/v1/inline.js" />
      <div className=" parent-box  container-fluid">
         <Navbar/>
            
                <div>
                {/* Import Stats Here */}
                <Stats />
                         <div className="alltipslabel mt-5"><h4>Free Tips</h4></div>
                         <div style={{height: 400, overflowY: "auto"}}>
                         {
                            freeTips.map((obj, index) => {
                                return(
                                    <div  key={index} className="row mt-3" style={{border: "2px solid #c4c5c6", padding: 10}}>
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
                         }
            
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