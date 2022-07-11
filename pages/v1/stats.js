import React from "react";
import { useState, useEffect } from "react";
import Script from 'next/script'
import {PaystackButton} from 'react-paystack';

const Stats = () => {
    const [user, setUser] = useState({
        fullname: "",
        email: "",
        phone: "",
        status: "",
        expiry: ""
    });
    const [key, setKey] = useState("");
    const [paystackKeys, setPaystackKeys] = useState(
        {
    		key: "pk_live_17aed50fcc18e0d23740fb7b47e2d6280723a9b1",
    		email: user.email,  // customer email
    		amount: 1000000 //equals NGN100,
    	}
    );
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
        fetch(`https://boombet.com.ng/app/apis/paystack.php`, {
            method: "GET"
        })
        .then(response => response.json())
        .then((data) => {
            setKey(data.key);
        })
    }, [])
    const callback = (response) => {
        fetch('https://boombet.com.ng/app/apis/upgrade.php?email='+user.email)
        .then(res => res.json())
        .then(Data => {
        //var serverReps = Data.Result.message;  
        alert("Subscription Successful")
        window.location.href = "";
        }).catch(error => console.error(error))
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
        <div className="container mt-4">
            <Script src="https://js.paystack.co/v1/inline.js" />
            <div className="row">
                <div className= " homeboxcotent container-1 col-md-4 mt-3">
                    <div className="inner">
                        <h2>Hello</h2>
                        <h5>{user.fullname}</h5>
                        <p>Welcome To Boombet</p>
                    </div>
                </div>
                <div className="col-sm-1"></div>
                <div className="  homeboxcotent container-2 col-md-3 mt-3"> 
                    <div className="inner">
                        <h5>Membership: </h5>
                        <p>{user.status}</p>  
                        {user.status === "Regular" ? <PaystackButton
                            text="Subscribe for VIP Member"
                            className="btn btn-primary"
                            onSuccess={callback}
                            callback={callback}
                            onClose={close}
                            reference={getReference()}
                            email={user.email}
                            amount="1000000"
                            publicKey={key}
                        />: ""}
                        
                    </div>                                 
                </div>
                <div className="col-sm-1"></div>
                <div className=" homeboxcotent container-3 col-md-3 mt-3"> 
                    <div className="inner">
                        <h5>Subscription</h5>
                        <p>End On</p>
                        <p>Date: {user.expiry}</p> 
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Stats;