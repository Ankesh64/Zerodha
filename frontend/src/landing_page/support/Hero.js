import React from 'react';

function Hero() {
    return ( 
        <section className="container-fluid" id="supportHero">             {/*using container fluid ,it gives use end to end container without leaving margin to left and right end of the page*/}
            <div className="px-5 pt-5 pb-2" id="supportWrapper">
                <h4>Support Portal</h4>
                <a href="" >Track Tickets</a>
            </div>

            <div className="row p-2" style={{marginLeft: "100px"}}>
                <div className="col-6 p-5" style={{marginLeft: "90px"}}>
                    <h4 className="mb-3 fs-3">Search for an answer or browse help topics to create a ticket</h4>
                    <input placeholder="Eg: how do I activate F&O. why is my order getting rejected.." className="w-100 mb-4 text-center" style={{height: "70px", borderRadius:"5px",border:"none"}}/>
                    <a href="">Track account opening</a>
                    &nbsp;&nbsp;&nbsp;
                    <a href="">Track segment activation</a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="">Intraday</a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="">margin</a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="">Kite user manual</a>
                </div>
                <div className="col-5 p-5" style={{marginLeft: "25px"}}>
                    <h4 className="mb-2 fs-3">Featured</h4>
                    <ol>
                        <li className="mb-2">
                            <a href="">Current Takeovers and Delisting - January 2024</a>
                        </li>
                        <li>
                            <a href="">Latest Intraday leverages = MIS & CO</a>
                        </li>
                    </ol>  
                </div>
            </div>
        </section>
     );
}

export default Hero;