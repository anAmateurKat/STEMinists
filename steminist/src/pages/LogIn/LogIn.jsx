import React from 'react';
import '../../App.css';
import './LogIn.scss';

export const LogIn = () => {
    return (
        <div className='login'>
            <div className='left-side'>
                <form action='#' method='GET' enctype='text/plain'>
                    <div className='google_button'>
                        {/*google icon*/}
                        <a href='#'> Continue with Google</a>
                    </div>

                    <p> OR </p>

                    <div className=''>
                        <label htmlFor="email">Email: </label>
                        <input type='text' id='email' name='email' required></input>
                    </div>
                    
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input type='text' id='password' name='password' required></input>
                    </div>

                    <input type='submit' value='Log In'></input>
                </form> 
            </div>

            <div className='right-side'>
                <div>
                    <h1>Working together to strengthen the STEM community.</h1>
                    <a href='#'>About Us</a>
                </div>
            </div>
        </div>
        
    )
}