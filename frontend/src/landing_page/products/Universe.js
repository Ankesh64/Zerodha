import React from 'react';
import { useNavigate } from 'react-router-dom';

function Universe() {
    const navigate = useNavigate();

    return (
        <div className='container mt-5'>
            <div className='row text-center'>
                <h1 className='fs-2 fs-md-1'>The Zerodha Universe</h1>
                <p className='px-3 px-md-0'>Explore your trading and investment experience even further with our partner platforms</p>

                <div className="col-6 col-md-4 p-3 mt-3 mt-md-5">
                    <img src="media/images/smallcaseLogo.png" alt="Smallcase" className="partner-logo img-fluid" />
                    <p className="text-small text-muted">Thematic investment platform</p>
                </div>
                <div className="col-6 col-md-4 p-3 mt-3 mt-md-5">
                    <img src="media/images/streakLogo.png" alt="Streak" className="partner-logo img-fluid" />
                    <p className="text-small text-muted">Algo & strategy platform</p>
                </div>
                <div className="col-6 col-md-4 p-3 mt-3 mt-md-5">
                    <img src="media/images/sensibullLogo.svg" alt="Sensibull" className="partner-logo img-fluid" />
                    <p className="text-small text-muted">Options trading platform</p>
                </div>
                <div className="col-6 col-md-4 p-3 mt-3 mt-md-5">
                    <img src="media/images/zerodhaFundhouse.png" alt="Zerodha Fundhouse" className="partner-logo img-fluid" />
                    <p className="text-small text-muted">Asset management</p>
                </div>
                <div className="col-6 col-md-4 p-3 mt-3 mt-md-5">
                    <img src="media/images/goldenpiLogo.png" alt="Goldenpi" className="partner-logo img-fluid" />
                    <p className="text-small text-muted">Bonds trading platform</p>
                </div>
                <div className="col-6 col-md-4 p-3 mt-3 mt-md-5">
                    <img src="media/images/dittoLogo.png" alt="Ditto" className="partner-logo img-fluid" />
                    <p className="text-small text-muted">Insurance</p>
                </div>

                <div className="mt-4 mt-md-5">
                    <button
                        onClick={() => navigate("/signup")}
                        className='p-2 btn btn-primary fs-6 fs-md-5 mb-5'
                        style={{width: "60%", maxWidth: "200px", margin: "0 auto"}}
                    >
                        Signup Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Universe;