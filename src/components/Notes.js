/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useRef , useState} from 'react'
import { useNavigate } from 'react-router-dom';
import noteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';


export default function Notes() {
    const navigate = useNavigate();
    const context = useContext(noteContext);
    const { notes, getNotes, addNote, editNote } = context;

    useEffect(() => {
       if(localStorage.getItem("token")){
        getNotes();
       }
       else{
        navigate("/login");
       }
    })

    const ref = useRef(null);
    const refClose = useRef(null);

    const updateNote = (currentNote) => {
        ref.current.click();
        setTitle(currentNote.title);
        setDesc(currentNote.description);
        setId(currentNote._id);
    
    }



    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [id, setId] = useState("");

    function handleClick(e) {
        e.preventDefault();
        // addNote(title, desc, "default");
        editNote(id, title, desc,"defaultt");
        refClose.current.click();


    }

    function handleTitle(e){
        setTitle(e.target.value);
    }

    function handleDesc(e){
        setDesc(e.target.value);
    }




    return (
        <>
            <AddNote />
            
            
<button type="button" ref = {ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div className="modal fade" id="exampleModal" tabIndex="-1"  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
        </button>
      </div>
      <div className="modal-body">
        
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
                </form>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" ref = {refClose} data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick = {handleClick}>Update Note</button>
      </div>
    </div>
  </div>
</div>

            <div className='row my-3'>
                <h2>Your Notes</h2>
                {
                    notes.map((note) => {
                        return <Noteitem key={note._id} note={note} updateNote={updateNote} />
                    })
                }

            </div>

        </>
    )
}
