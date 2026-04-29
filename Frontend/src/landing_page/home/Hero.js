import React, { Component } from 'react';

function Hero(){
    return(
        <div className='container pt-3'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt="hero-image" className='mb-2'/>
                <h1 className='mt-5'>Invest in everything</h1>
                <p className='mb-3'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='p-3 btn btn-primary'style={{width:"20%", margin:"0 auto"}}>Sign up for Free</button>
            </div>
        </div>
    );
}
export default Hero;