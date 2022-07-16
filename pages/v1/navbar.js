import Link from "next/link";
import { useEffect, useState } from "react";



function Navbar(){
    const [width, setWidth] = useState(0);
    useEffect(() => {
        var innerWidth = window.innerWidth;
        setWidth(innerWidth);
    }, [])
    
    return(
        <>
    {width <= 500 ?
    <>
        <div className="navbox container-fluid row">
            <div className=" navlogo col-md-9 col-9">
                <h3>BoomBet</h3>
            </div>
            <div className="col-md-3 col-3">
                <Link href="#logout"><a onClick={() => {
                    localStorage.removeItem("userIsLoggedIn");
                    window.location.href = "";
                }} style={{color: "#fff"}}>Logout</a></Link>
            </div>

        </div>
        <div className="container-fluid" style={{position: "fixed", backgroundColor: "#fff", boxShadow: "1px 1px 11px 1px #c4c5c6", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: "100%", bottom: 0, zIndex: 9999, left: 0, height: 60}}>
            <div className="row">
                <div className="col-3 pt-3">
                    <div className="inner ">
                        <center><span onClick={() => {
                            window.location.href = "/v1/dashboard"
                        }} className="fa fa-home" style={{fontSize: 24, color: "#B327AC"}}></span></center>
                    </div>
                </div>
                <div className="col-3 pt-3">
                    <div className="inner">
                        <center><span onClick={() => {
                            window.location.href = "/v1/alltips"
                        }} className="fa fa-futbol" style={{fontSize: 24, color: "#B327AC"}}></span></center>
                    </div>
                </div>
                <div className="col-3 pt-3">
                    <div className="inner">
                        <center><span onClick={() => {
                            window.location.href = "/v1/sportnews"
                        }} className="fa fa-globe" style={{fontSize: 24, color: "#B327AC"}}></span></center>
                    </div>
                </div>
                <div className="col-3 pt-3">
                    <div className="inner">
                        <center><span onClick={() => {
                            window.location.href = "/v1/profile"
                        }} className="fa fa-user" style={{fontSize: 24, color: "#B327AC"}}></span></center>
                    </div>
                </div>
            </div>
        </div>
    </>
    :
    <>
    
        <div className="navbox container-fluid row">
        <div className=" navlogo col-sm-7">
            <h3>BoomBet</h3>
        </div>
        <div className=" navlinks col-sm-1">
            <Link href="/v1/dashboard">
                <a>
                    <p>Home</p>
                </a>
            </Link>
        </div>
        <div className=" navlinks col-sm-1">
            <Link href="/v1/alltips">
                <a>
                    <p>All Tips</p>
                </a>
            </Link>
        </div>
        <div className=" navlinks col-sm-1">
            <Link href="/v1/sportnews">
                <a>
                    <p>Sport News</p>
                </a>
            </Link>
        </div>
        <div className="col-sm-2">
            <button  onClick={() => {
                    localStorage.removeItem("userIsLoggedIn");
                    window.location.href = "";
                }} className="btn btn-md btn-dark">Logout</button>
            </div>
        </div>

    </>
}
  </>

    )  
}

export default Navbar;