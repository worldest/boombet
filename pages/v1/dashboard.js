import Footer from "../api/footer";
import Navbar from "./navbar";
import Stats from "./stats";
import { useEffect, useState } from "react";
import Image from 'next/image'
import Script from 'next/script'
import PaystackButton from 'react-paystack';
import Link from "next/link";
function Dashborad(){
    const [user, setUser] = useState({
        fullname: "",
        email: "",
        phone: "",
        status: "",
    });
    const [imglink, setImageLink] = useState("/1xbet-1.png");
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
            console.log(data);
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
                <div>
                        
                         <div className="alltipslabel mt-5"><h4>Free Tips</h4></div>
                         <div className="row">
                            <div className="col-md-8">
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
                        <div className="col-md-4 pt-4">
                            <strong><h4>What Makes BoomBet The Most Accurate Football Prediction Website</h4></strong>
                            <p>
                            Accurate Football Prediction Website. BoomBet is the most Accurate Football Prediction Site available For Free in the Football Prediction World. Football betting has become a foremost and regular activities among soccer fans. A great number of punter and pundits are earning huge through soccer betting when they use an accurate football prediction website like BoomBet.
BoomBet is the best football prediction site . We provide top tips with 100% consistency in giving accurate football predictions and great
outstanding tips with highest level of accuracy among other football prediction websites. we cover wide range of football match predictions and tips to maximize your winning chances through football bets. With our Website, you can enjoy 100% winning rate. We provides you with a wide range of accurate football predictions for free  that you can depend on for winning. So, If you are looking for sites that predict football matches correctly,  BoomBet is the site that predict football matches correctly.
                            </p>
                            <br />
                            <hr />
                            <br />
                            <strong><h4>Why Is BoomBet The Best Football Prediction Website In The World?</h4></strong>
                            <p>
                            Best Football Prediction Site. BoomBet is the best football prediction site in the world currently. BoomBet is the best football prediction site When it comes to providing accurate football betting tips that makes bettors profits from sports betting.  All  you need is a good football prediction site like BoomBet.com that predict matches correctly for you to stake and win.
Our unique interface makes it easy for the users to browse easily both on desktop and mobile for online sports gambling. If you are looking for top soccer prediction sites for the purpose of reliable soccer tips and constitent winning, BoomBet is the perfect site for you. So if you are a bettor and you are searching for the best football prediction site of the year, accurate football prediction website, site that predict football matches correctly, top soccer prediction sites, best football prediction site in the world, accurate soccer prediction sites, best prediction site, accurate football predictions for free , accurate football prediction, best prediction site free, soccer prediction site, best football prediction site, football prediction, accurate prediction sites, accurate football prediction sites, best prediction site in the world, Sportybet , accurate soccer prediction, best soccer prediction site, genuine prediction, BoomBet is capable of helping you reach ypur target and provide the solution to your search. We make winning our daily routine</p>
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