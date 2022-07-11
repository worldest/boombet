import Navbar from "./navbar";
import Stats from "./stats";
import { useState, useEffect } from "react";
import Footer from "../api/footer";
function Sportnews(){
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

        fetch(`https://boombet.com.ng/app/apis/allNews.php`, {
            method: "GET"
        })
        .then(response => response.json())
        .then((data) => {
            setFreeTips(data)
        })


    }, [])
    return(
        <div className="container-fluid">
            <Navbar/>
        <div className="mt-4 homeheadlines">
        <h2>Sport News</h2>
    </div>
       <div className="mt-5 row">
            {
                freeTips.map((obj, index) => {
                    return(
                        <div key={index} className=" homenewsbox col-sm-4">
                        <div>
                                <center>  <img src={obj.image} alt="sport news" width="100%"></img></center>
                                <h5>{obj.title}</h5>
                                <p id={index}>{obj.description.substr(0, 100)}</p>
                                <button onClick={() => {
                                    var news = document.getElementById(index).innerText;
                                    if(news.length <= 100){
                                        document.getElementById(index).innerText = obj.description;
                                        document.getElementById(`readmore-${index}`).innerText = "Read Less";
                                    }else{
                                        document.getElementById(index).innerText = obj.description.substring(0, 100);
                                        document.getElementById(`readmore-${index}`).innerText = "Read More";
                                    }
                                }} id={`readmore-${index}`} className="btn btn-primary">Read More</button>
                            </div>
                        </div> 
                    )
                })
            }
            
    </div>
    <div className=" mt-5 mb-3"> <Footer/></div>
    </div>

    )
}
export default Sportnews;