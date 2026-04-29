import React from 'react'
function Pricing() {
    return ( 
        <div className='container p-3'>
            <div className='row p-3'>
                <div className='col-6 p-3'>
                    <h2 className='fs-3 mt-3'>Unbeatable pricing</h2>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href=''style={{textDecoration:"none"}}>See Pricing</a>
                </div>
                <div className='col-6'>
                    <div className='row'>
                <div className='col-4 p-2 d-flex align-items-center'>
                    <img src='media/images/pricing-eq.svg'style={{width:"50%"}}/>
                    <p className='mb-0' style={{fontsize:"14px"}}>Free Account <br/>Opening</p>
                </div>
                <div className='col-4 p-2 d-flex'>
                    <img src='media/images/pricing-eq.svg' style={{width:"50%"}}/>
                    <p className='mb-0'style={{fontsize:"14px"}}>Free equity delivery <br/>and direct mutual funds</p>
                </div>
                <div className='col-4 p-2 d-flex'>
                    <img src='media/images/other-trades.svg'style={{width:"50%"}}/>
                    <p className='mb-0' style={{fontsize:"14px"}}> Intraday and<br/> F&O</p>
                </div>
                    </div>
                </div>
                
            </div>
        </div>
     );
}

export default Pricing;