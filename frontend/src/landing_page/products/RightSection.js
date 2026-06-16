import React from 'react';

function RightSection({imageURL, productName, productDescription, learnMore}) {                        // declearing the props that we are going to use in this component.this makes it reusable for all the products by just passing different props to it.
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className="col-6 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={learnMore} >Learn More</a>
                    </div> 
                </div>
                <div className="col-6">
                    <img src={imageURL} />
                </div>
            </div>
        </div>
     );
}

export default RightSection;