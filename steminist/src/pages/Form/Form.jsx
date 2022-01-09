import React, {useState} from 'react';
import '../../App.css';
import './Form.scss';
import {db} from '../../firebase';
import { collection, addDoc } from "@firebase/firestore";
import { Navigate } from 'react-router-dom';

export const Form = () => {
    const[type, setType] = useState("");
    const[fName, setFName] = useState("");
    const[lName, setLName] = useState("");
    const[email, setEmail] = useState("");
    const[location, setLocation] = useState("");
    const[pronouns, setPronouns] = useState("");
    const[interests, setInterests] = useState("");
    const[linkedin, setLinkedin] = useState("");
    const[intro, setIntro] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        const docRef = await addDoc(collection(db, "members"),{
            type: type,
            fName:fName,
            lName:lName,
            email:email,
            location:location,
            pronouns:pronouns,
            interests:interests,
            linkedin:linkedin,
            intro:intro
        });
        alert("Form has been submitted");
        
        setFName('');
        setLName('');
        setEmail('');
        setLocation('');
        setPronouns('');
        setInterests('');
        setLinkedin('');
        setIntro('');

        return (
            window.location.href='../recommendations'
        )
    };


    return (
        <form className='form' onSubmit={handleSubmit} >
            <div className='row'>
                <h2>Please fill this form to update your profile</h2>
                <div className='member-type'>
                        <label>Member Type: </label>
                        <select name="dropdown" value={type} onChange={(e) => setType(e.target.value)}>
                            <option value="N/A"> Select Mentor/Mentee...</option>
                            <option value="Mentor"> Mentor</option>
                            <option value="Mentee"> Mentee</option>
                        </select>
                </div>
                <div className='firstname'>
                    <label>First Name: </label>
                    <input type={"text"} placeholder='First Name' value={fName} onChange={(e) => setFName(e.target.value)}/>
                </div>
                <div className='lastname'>
                    <label>Last Name: </label>
                    <input type={"text"} placeholder='Last Name' value={lName} onChange={(e) => setLName(e.target.value)}/>
                </div>
                <div className='email'>
                    <label>Email: </label>
                    <input type={"text"} placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='location'>
                    <label>Location: </label>
                    <input type={"text"} placeholder='Location' value={location} onChange={(e) => setLocation(e.target.value)}/>
                </div>
                <div className='pronouns'>
                    <label>Pronouns: </label>
                    <input type={"text"} placeholder='Pronouns' value={pronouns} onChange={(e) => setPronouns(e.target.value)}/>
                </div>
                <div className='interests'>
                    <label>Area of Interests: </label>
                    <input type={"text"} placeholder='Tech Interests' value={interests} onChange={(e) => setInterests(e.target.value)}/>
                </div>
                <div className='linkedin'>
                    <label>Linkedin Url: </label>
                    <input type={"text"} placeholder='Linkedin profile Url' value={linkedin} onChange={(e) => setLinkedin(e.target.value)}/>
                </div>
                <div className='intro'>
                    <label>Introduction/Summary: </label>
                    <input type={"text"} placeholder='Introduction' value={intro} onChange={(e) => setIntro(e.target.value)}/>
                </div>
                <button type="submit">Submit</button>
            </div>
         
        </form>
    )
}