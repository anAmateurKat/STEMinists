import React from 'react';
import '../../App.css';
import './Recommendations.scss';
import PersonBlock from '../../components/PersonBlock/index';

const person = [
    {
        name: 'John Snow', 
        percent: 87, 
        email: 'jsnow@email.com',
        text: 'Hi! My name is John Snow.',
    },
    {
        name: 'Debbie Ryan', 
        percent: 68, 
        email: 'dryan@email.com',
        text: 'Hi! My name is Debbi Ryan.',
    },
    {
        name: 'Emily Watson', 
        percent: 98, 
        email: 'ewatson@email.com',
        text: 'Hi! My name is Emily Watson.',
    },
];

export const Recommendations = () => {
    var num = Math.floor(Math.random * 5 + 1)
    return (
        <div className='recommendations'>
            <div>
                {person.map((person) => {
                    return <PersonBlock person={person} />;
                })}
            </div>
        </div>
    )
}
