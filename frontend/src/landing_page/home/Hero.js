import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
    const navigate = useNavigate();
    return ( 
        <div className='container p-3 p-md-5 mb-5'>
            <div className='row text-center'>
                <img 
                    src='media/images/homeHero.png' 
                    alt='Hero Image' 
                    className='mb-5 img-fluid'  
                />
                <h1 className='mt-3 mt-md-5 fs-2 fs-md-1'>Invest in everything</h1>
                <p className='px-3 px-md-0'>Online platform for invest in stocks, derivatives, mutual funds</p>
                <button 
                    onClick={() => navigate("/signup")} 
                    className='p-2 btn btn-primary fs-6 fs-md-5 mb-5' 
                    style={{width: "60%", maxWidth: "200px", margin: "0 auto"}}
                >
                    Signup Now
                </button>
            </div>
        </div>
     );
}

export default Hero;