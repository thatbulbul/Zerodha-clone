import React, { Component } from 'react';
function Awards() {
    return (  
        <div className='container'>
            <div className='row'>
                <div className='col-6 mt-5'>
                    <img src='media/images/largestBroker.svg'></img>
                </div>
                <div className='col-6 mt-5 p-4'>
                    <h1>Largest Stock brocker in India</h1>
                    <p className='mt-4 mb-4'> That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments.</p>
                    <div className='row mt-4 mb-4'>
                        <div className='col-6 '>
                    <ul>
                        <li><p>profit</p></li>
                        <li><p>future</p></li>
                        <li><p>Good</p></li>
                    </ul>
                    </div>
                    <div className='col-6'>
                        <ul>
                        <li><p>plans</p></li>
                        <li><p>future secure</p></li>
                        <li><p>Good investments</p></li>
                    </ul>
                    </div>
                    <img src='media/images/pressLogos.png' alt='brands' style={{width:"90%"}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;