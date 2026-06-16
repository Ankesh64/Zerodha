import React from 'react';
import { useNavigate } from 'react-router-dom';

function Universe() {
    const navigate = useNavigate();

    return (
        <div className='container mt-5'>
            <div className='row text-center'>
                <h1>The Zerodha Universe</h1>
                <p>Eplore your trading and investment experience even further with our partner platforms</p>

                <div className="col-4 p-3 mt-5">
                    <img src="media/images/smallcaseLogo.png"  className="partner-logo" />
                    <p className="text-small text-muted">Thematic investment platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/streakLogo.png"  className="partner-logo" />
                    <p className="text-small text-muted">Algo & strategy platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/sensibullLogo.svg"  className="partner-logo" />
                    <p className="text-small text-muted">Options trading platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/zerodhaFundhouse.png"  className="partner-logo" />
                    <p className="text-small text-muted">Asset management</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/goldenpiLogo.png"  className="partner-logo" />
                    <p className="text-small text-muted">Bonds trading platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/dittoLogo.png"  className="partner-logo" />
                    <p className="text-small text-muted">Insurance</p>
                </div>
                <button onClick={() => navigate("/signup")} className='p-2 btn btn-primary fs-5 mb-5' style={{width: "20%", margin: "0 auto"}}>Signup Now</button>
            </div>
        </div>
    );
}

export default Universe;