import Link from "next/link";
       function  Tabhome() {
                return(
                    <div className="">
                       
                 <div className="mt-5 "> 
                        <div>
                            <h2>Select Tips Category</h2>  
                                <div className="homecategories row mt-2"> 
                                    <div className="categoriesbox col-sm-3 mt-5 ">
                                        <div className="categoriesicon pt-2">
                                            <center><i className="fas fa-futbol fa-2x"></i></center>
                                        </div>
                                        <div  className="categorieslabel pt-3" >
                                            <h4>Daily 2 Odds </h4>
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
                                    <div className="categoriesemptybox col-sm-1"></div>
                                <div className=" categoriesbox col-sm-3 mt-5">
                                    <div className="categoriesicon pt-2">
                                        <center> <i className=" fas fa-futbol fa-2x fa-2x"></i></center>
                                    </div>
                                    <div  className="categorieslabel pt-3" >
                                        <h4>Basketball Tips</h4>
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
                                <div className="categoriesemptybox col-sm-1"></div>
                                <div className="categoriesbox col-sm-3 mt-5 ">
                                    <div className="categoriesicon pt-2">
                                        <center><i className="fas fa-futbol fa-2x"></i></center>
                                    </div>
                                    <div  className="categorieslabel pt-3" >
                                        <h4>Free Tips</h4>
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
                    
                                <div className=" categoriesbox col-sm-3 mt-5">
                                    <div className="categoriesicon pt-2">
                                        <center> <i className=" fas fa-futbol fa-2x fa-2x"></i></center>
                                    </div>
                                    <div  className="categorieslabel pt-3" >
                                        <h4> Over 1.5 Tips</h4>
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
                                <div className="categoriesemptybox col-sm-1"></div>
                                <div className="categoriesbox col-sm-3 mt-5 ">
                                    <div className="categoriesicon pt-2">
                                        <center><i className="fas fa-futbol fa-2x"></i></center>
                                    </div>
                                    <div  className="categorieslabel pt-3" >
                                        <h4>Football Tips</h4>
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
                                <div className="categoriesemptybox col-sm-1"></div>
                                <div className=" categoriesbox col-sm-3 mt-5  ">
                                    <div className="categoriesicon pt-2">
                                        <center> <i className=" fas fa-futbol fa-2x fa-2x"></i></center>
                                    </div>
                                    <div  className="categorieslabel pt-3" >
                                        <h4> One Odds Tips</h4>
                                    </div>
                                    <div  className="categoriesbtn pt-3"> 
                                        <center>
                                            <Link href="/v1/1.50oddtips">
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
              
         

       
     
    )
}
export default Tabhome;