// import React from 'react';
// import '../../App.css';
// import './Recommendations.scss';
// import PersonBlock from '../../components/PersonBlock/index';

// const person = [
//     {
//         name: 'John Snow', 
//         percent: 87, 
//         email: 'jsnow@email.com',
//         text: 'Hi! My name is John Snow.',
//     },
//     {
//         name: 'Debbie Ryan', 
//         percent: 68, 
//         email: 'dryan@email.com',
//         text: 'Hi! My name is Debbi Ryan.',
//     },
//     {
//         name: 'Emily Watson', 
//         percent: 98, 
//         email: 'ewatson@email.com',
//         text: 'Hi! My name is Emily Watson.',
//     },
// ];

// export const Recommendations = () => {
//     var num = Math.floor(Math.random * 5 + 1)
//     return (
//         <div className='recommendations'>
//             <div>
//                 {person.map((person) => {
//                     return <PersonBlock person={person} />;
//                 })}
//             </div>
//         </div>
//     )
// }
// // Import Firestore database

import {db,collection, addDoc} from '../../firebase';
import { React, useState } from 'react';
import '../../App.css';
import './Recommendations.scss';
  
const Recommendations = () => {
  
    const [info , setInfo] = useState([]);
  
    // Start the fetch operation as soon as
    // the page loads
    window.addEventListener('load', () => {
        Fetchdata();
      });
  
    // Fetch the required data using the get() method
    const Fetchdata = ()=>{
        // db.collection("data").get().then((querySnapshot) => {
             
        //     // Loop through the data and store
        //     // it in array to display
        //     querySnapshot.forEach(element => {
        //         var data = element.data();
        //         setInfo(arr => [...arr , data]);
                  
        //     });


            db.collection("users").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                   console.log(`${doc.id} => ${doc.data()}`);
                });




        })
    }
      
    // Display the result on the page
    return (
        <div>
            <center>
            <h2>Matches</h2>
            </center>
          
        {
            info.map((data) => (
            <Frame type= {data.type}
                   fName={data.fName}
                   lName={data.lName}
                   email={data.email}
                   location={data.location}
                   pronouns={data.pronouns}
                   interests={data.interests}
                   linkedin={data.linkedin}
                   intro={data.intro}/>
            ))
        }
        </div>
  
    );
}
  
// Define how each display entry will be structured
const Frame = ({type , fName , lName,email , location,pronouns ,interests ,linkedin,intro}) => {
    console.log(type + " " + fName + " " + lName+ " " +  email + " " +  location+ " " + pronouns + " " + interests + " " + linkedin+ " " + intro);
    return (
        <center>
            <div className="div">
                  
<p>FirstName : {fName}</p>
   
                  
<p>LastName : {lName}</p>
  
                  
<p>Email : {email}</p>

<p>Location : {location}</p>
   
                  
<p>Pronouns : {pronouns}</p>
  
                  
<p>Interests : {interests}</p>

<p>Linkedln : {linkedin}</p>
   
                  
<p>Intro : {intro}</p>
  
                  
<p>Type : {type}</p>
   
            </div>
        </center>
    );
}
  
export default Recommendations;