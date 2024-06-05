/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import noteContext from '../context/notes/noteContext';
import { useContext } from 'react'



export default function AddNote() {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    function handleClick(e) {
        e.preventDefault();
        addNote(title, desc, "default");
        setTitle("");
        setDesc("");

    }

    

    function handleTitle(e){
        setTitle(e.target.value);
    }

    function handleDesc(e){
        setDesc(e.target.value);
    }

    // const onChange = (e) => {
    //     // setNote({...note, [e.target.name] : e.target.value});
    // }

    const context = useContext(noteContext);
    const { addNote } = context;

    
    return (
        <div>
            <div className='container'>
                <h2>Add a Note</h2>

                <form>
                    <div className="form-group my-5">
                        <label htmlFor="title">Enter Title</label>
                        <input type="text" className="form-control" id="title" name="title" value = {title} aria-describedby="emailHelp" placeholder="Enter title"  onChange={handleTitle}/>
                    </div>
                    <div className="form-group my-5">
                        <label htmlFor="description">Description</label>
                        <input type="text" className="form-control" id="description" name="description" value = {desc} placeholder="Description" onChange={handleDesc} />
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
                </form>


            </div>
        </div>
    )
}
