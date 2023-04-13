import React, { useEffect, useState } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";
import axios from "axios";

export default function App() {
  const [darkmode, setDarkMode] = useState(true);
  const [notes, setNotes] = useState([]);
  const [hasRendered, setHasRendered] = useState(false);

  const [searchText, setSearchText] = useState("");

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    // console.log(newNote);
    sendNotes(newNote);
    // setNotes(newNote);
  };

  const deleteNote = (id) => {
    deleteNotes(id);
  };

  const deleteNotes = async (id) => {
    // the bug was here it would not send the response to the server and moves to setnotes due to which the component got rendered without the data being send it was solve by using async and await
    console.log(id);
    const res = await axios.delete(`http://localhost:8080/note/delete/${id}`);
    setHasRendered(false);
    setNotes([]);
  };
  const getNotes = async () => {
    await axios
      .get(`http://localhost:8080/notes`)
      .then((response) => {
        console.log("should render 2 time");
        console.log(response.data);
        setNotes(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    // setNotes(res.data.notes);
  };
  const sendNotes = async (data) => {
    // the bug was here it would not send the response to the server and moves to setnotes due to which the component got rendered without the data being send it was solve by using async and await

    const res = await axios.post("http://localhost:8080/add", data);
    setHasRendered(false);
    setNotes([]);
  };

  useEffect(() => {
    if (hasRendered) {
      console.log("rendered");
    } else {
      setHasRendered(true);

      getNotes();
    }
  }, [notes]);
  {
    console.log(notes);
  }
  // useEffect(() => {
  //   getNotes();
  // }, [notes]);
  return (
    <div className={`${darkmode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        {/* {console.log(notes)} */}
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}
