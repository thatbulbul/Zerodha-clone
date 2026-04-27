import React from 'react'
function Awards() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <img src='media/images/largestBroker.svg' alt ='award' className='mb-4 p-4'/>
                </div>

                <div className='col-6'></div>
                <h1>Largest stock broker in India</h1>
                <p>1.5+ Crore Zerodha clients contribute to over 15% of all volumes.</p>
                <div className='row'>
                    <div className='col-6'>
                         <ul>
                    <li> <p>Future and option</p></li>
                    <li> <p>Commodity derivatives</p></li>
                    <li> <p>Currency derivatives</p></li>
                </ul>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                         <ul>
                    <li> <p>Stock and IPOs</p></li>
                    <li> <p>Direct Mutual Funds</p></li>
                    <li> <p>Bonds and others</p></li>
                </ul>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Awards;