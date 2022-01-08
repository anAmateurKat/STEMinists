import React from 'react';
import '../../App.css';
import './Form.scss';

export const Form = () => {
    return (
        <div className='form'>
         <div className='row'>
             <h2>Please fill this form to update your profile</h2>
             <div className='firstname'>
                 <label>First Name: </label>
                 <input type={"text"} placeholder='First Name' />
             </div>
             <div className='lastname'>
                 <label>Last Name: </label>
                 <input type={"text"} placeholder='Last Name' />
             </div>
             <div className='email'>
                 <label>Email: </label>
                 <input type={"text"} placeholder='Email' />
             </div>
             <div className='location'>
                 <label>Location: </label>
                 <input type={"text"} placeholder='Location' />
             </div>
             <div className='pronouns'>
                 <label>Pronouns: </label>
                 <input type={"text"} placeholder='Pronouns' />
             </div>
             <div className='tech-interest'>
                 <label>Tech Interests: </label>
                 <input type={"text"} placeholder='Tech Interests' />
             </div>
             <div className='Area-of-discussion'>
                 <label>Areas of Discussion: </label>
                 <input type={"text"} placeholder='Areas of Discussion' />
             </div>
             <div className='linkedin'>
                 <label>Linkedin Url: </label>
                 <input type={"text"} placeholder='Linkedin profile Url' />
             </div>
             <div className='intro'>
                 <label>Introduction/Summary: </label>
                 <input type={"text"} placeholder='Introduction' />
             </div>
         </div>
        </div>
    )
}