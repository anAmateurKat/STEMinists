import React from 'react';
import '../../App.css';
import './Home.scss';

export const Home = () => {
    return (
        <div className='home'>
            <div className='content'>
                <h1>Welcome to STEMinists! Here you can be connected as a mentor or mentee with other women with similar interests in STEM.</h1>
                <a href='../Form'>Sign Up!</a>
            </div>
        </div>
    )
}
