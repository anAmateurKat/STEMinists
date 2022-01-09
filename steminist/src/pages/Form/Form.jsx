import React, {useState} from 'react';
import '../../App.css';
import './Form.scss';
import {db} from '../../firebase';

export const Form = () => {
    const[fName, setFName] = useState("");
    const[lName, setLName] = useState("");
    const[email, setEmail] = useState("");
    const[location, setLocation] = useState("");
    const[pronouns, setPronouns] = useState("");
    const[interests, setInterests] = useState("");
    const[discussion, setDiscussion] = useState("");
    const[linkedin, setLinkedin] = useState("");
    const[intro, setIntro] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection('members').add({
            fName:fName,
            lName:lName,
            email:email,
            location:location,
            pronouns:pronouns,
            interests:interests,
            discussion:discussion,
            linkedin:linkedin,
            intro:intro,
        })
        .then(() => {
            alert("Form has been submitted ");
        })
        .catch((error) => {
            alert(error.message);
        });

        setFName('');
        setLName('');
        setEmail('');
        setLocation('');
        setPronouns('');
        setInterests('');
        setDiscussion('');
        setLinkedin('');
        setIntro('');
    };


    return (
        <form className='form' onSubmit={handleSubmit} >
            <div className='row'>
                <h2>Please fill this form to update your profile</h2>
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
                <div className='tech-interest'>
                    <label>Tech Interests: </label>
                    <input type={"text"} placeholder='Tech Interests' value={interests} onChange={(e) => setInterests(e.target.value)}/>
                </div>
                <div className='Area-of-discussion'>
                    <label>Areas of Discussion: </label>
                    <input type={"text"} placeholder='Areas of Discussion' value={discussion} onChange={(e) => setDiscussion(e.target.value)}/>
                </div>
                <div className='linkedin'>
                    <label>Linkedin Url: </label>
                    <input type={"text"} placeholder='Linkedin profile Url' value={linkedin} onChange={(e) => setLinkedin(e.target.value)}/>
                </div>
                <div className='intro'>
                    <label>Introduction/Summary: </label>
                    <input type={"text"} placeholder='Introduction' value={intro} onChange={(e) => setIntro(e.target.value)}/>
                </div>
            </div>
         <button type="submit">Submit</button>
        </form>
    )
}