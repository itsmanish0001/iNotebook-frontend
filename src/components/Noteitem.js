/* eslint-disable no-unused-vars */
import React, {useContext} from 'react'
import noteContext from '../context/notes/noteContext';

export default function Noteitem(props) {
    const context = useContext(noteContext);
    const {deleteNote, editNote} = context;
    const { note, updateNote } = props;
    return (
        <div className='col-md-3 my-2'>

            <div className="card" >
            
                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text"> {note.description}</p>
                        <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id)}}></i>
                        <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateNote(note)}}></i>
                        
                    </div>
            </div>

        </div>
    )
}
