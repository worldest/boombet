import Footer from "../api/footer";
 import Link from "next/link";
import Navbar from "./navbar";
import Stats from "./stats";

function Alltips(){
    return(
     <div>
        <Navbar/>
        <div className="container">
            
                         <div className="mt-5 "> 
                        <div>
                            <h2>Select Tips Category</h2>  
                            <div className="row mt-5" style={{justifyContent: "space-between"}}> 
                            <div className="categoriesbox col-sm-2  col-6 ">
                                    <div className="categoriesicon pt-2">
                                        <center><i className="fas fa-futbol fa-2x"></i></center>
                                    </div>
                                    <div  className="categorieslabel pt-3" >
                                        <h6>Free Tips</h6>
                                    </div>
                                    <div  className="categoriesbtn pt-3"> 
                                        <center>
                                            <Link href="/v1/freetips">
                                                <a> 
                                                     <button className="btn btn-md btn-primary">View <i className="fa fa-arrow-circle-right"></i></button>
                                                </a>
                                            </Link>
                                        </center>
                                    </div>
                                </div>
                                <div className="categoriesbox col-sm-2  col-6">
                                    <div className="categoriesicon pt-2">
                                        <center><i className="fas fa-futbol fa-2x"></i></center>
                                    </div>
                                    <div  className="categorieslabel pt-3" >
                                        <h6>Daily 2 Odds </h6>
                                    </div>
                                    <div  className="categoriesbtn pt-3"> 
                                        <center>
                                            <Link href="/v1/daily2odd">
                                                <a>  
                                                    <button className="btn btn-md btn-primary">View <i className="fa fa-arrow-circle-right"></i></button>
                                                </a>
                                            </Link>
                                        </center>
                                    </div>
                                </div>
                                <div className=" categoriesbox col-sm-2  col-6">
                                    <div className="categoriesicon pt-2">
                                        <center> <i className=" fas fa-futbol fa-2x fa-2x"></i></center>
                                    </div>
                                    <div  className="categorieslabel pt-3" >
                                        <h6>Basketball Tips</h6>
                                    </div>
                                    <div  className="categoriesbtn pt-3"> 
                                        <center>
                                            <Link href="/v1/ballketballtips">
                                                <a> 
                                                         <button className="btn btn-md btn-primary">View <i className="fa fa-arrow-circle-right"></i></button>
                                                </a>
                                            </Link>
                                        </center>
                                    </div>
                                </div>
                                
                    
                                <div className=" categoriesbox col-sm-2  col-6">
                                    <div className="categoriesicon pt-2">
                                        <center> <i className=" fas fa-futbol fa-2x fa-2x"></i></center>
                                    </div>
                                    <div  className="categorieslabel pt-3" >
                                        <h6> 1.5 Odd Tips</h6>
                                    </div>
                                    <div  className="categoriesbtn pt-3"> 
                                        <center>
                                            <Link href="/v1/overodds">
                                                <a>  
                                                    <button className="btn btn-md btn-primary">View <i className="fa fa-arrow-circle-right"></i></button>
                                                </a>
                                            </Link>
                                        </center>
                                    </div>
                                </div>
                                <div className="categoriesbox col-sm-2  col-6">
                                    <div className="categoriesicon pt-2">
                                        <center><i className="fas fa-futbol fa-2x"></i></center>
                                    </div>
                                    <div  className="categorieslabel pt-3" >
                                        <h6>Football Tips</h6>
                                    </div>
                                    <div  className="categoriesbtn pt-3"> 
                                        <center>
                                            <Link href="/v1/footballtips">
                                                <a>  
                                                    <button className="btn btn-md btn-primary">View <i className="fa fa-arrow-circle-right"></i></button>
                                                </a>
                                            </Link>
                                        </center>
                                    </div>
                                </div>
                                
                            </div>
                    </div>
                    </div>


           
           </div>
           <div className=" mt-5 mb-3"> <Footer/></div>

    </div>

    )
}
export default Alltips;