import React from 'react';
import '../../App.css';
import './PersonBlock.scss';

const PersonBlock = ({person}) => {
    return (
        <div className='person'>
            <div className='picture'>
                <img src='https://www.stellarkids.com/wp-content/uploads/2019/09/girl-smile.png'></img>
            </div>
            <div className='text'>
                <div>
                    <h1>{person.name}</h1>
                    <h1>{person.percent}%</h1>
                </div>
                <h3>{person.email}</h3>
                <p>{person.text}</p>
            </div>
        </div>
    )
}

export default PersonBlock