/* eslint-disable no-unused-vars */
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {

  const notesInitial = []

  const [notes, setNotes] = useState(notesInitial);

  const getNotes = async () => {
    const url = "https://inotebook-backend-lsgn.onrender.com/api/notes/fetchallnotes";

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      },

      // body: JSON.stringify({"title": title, "description": description, "tag" : tag})
    });

    const json = await response.json();
    // console.log(json);
    setNotes(json);

  }

  const addNote = async (title, description, tag) => {
    console.log("addnote");
    const url = "https://inotebook-backend-lsgn.onrender.com/api/notes/addnote";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      },

      body: JSON.stringify({ "title": title, "description": description, "tag": tag })
    });

    const json = await response.json();
    console.log(json);


  }

  const deleteNote = async (id) => {
    const newNotes = notes.filter((note) => { return note._id !== id });
    setNotes(newNotes);

    const url = `https://inotebook-backend-lsgn.onrender.com/api/notes/deletenote/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      },

      // body: JSON.stringify({"title": title, "description": description, "tag" : tag})
    });

    const json = await response.json();
    console.log(json);


  }

  const editNote = async (id, title, description, tag) => {
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
      break;
    }

    const url = `https://inotebook-backend-lsgn.onrender.com/api/notes/updatenote/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      },

      body: JSON.stringify({ "title": title, "description": description, "tag": tag })
    });




  }

  return (
    // eslint-disable-next-line react/jsx-pascal-case
    <NoteContext.Provider value={{ notes, setNotes, getNotes, deleteNote, editNote, addNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;