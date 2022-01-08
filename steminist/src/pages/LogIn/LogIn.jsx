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
                    
                    <div className='linkedIn_button'>
                        {/*linkedIn icon*/}
                        <a href='#'> Continue with Google</a>
                    </div>

                    <p> OR </p>

                    <div className=''>
                        <label htmlFor="email"> Your email</label>
                        <input type='text' id='email' name='email' required></input>
                    </div>
                    
                    <div>
                        <label htmlFor="password"> Enter your password</label>
                        <input type='text' id='password' name='password' required></input>
                    </div>

                    <input type='submit' value='Log In'></input>
                </form> 
            </div>

            <div className='right-side'>
                <div>
                    <h1>Some Catch Phrase</h1>
                    <a href='#'>About us</a>
                </div>
            </div>
        </div>
        
    )
}