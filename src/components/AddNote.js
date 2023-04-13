import React, { useState } from "react";

export default function AddNote({ handleAddNote }) {
  const [noteText, setNoteText] = useState();
  const charcount = 200;
  const handleChange = (event) => {
    if (charcount - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };
  const handleSaveClick = (event) => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };

  // const handleKeyDown = (event) => {
  //   if (event.key === "Enter") {
  //     handleAddNote(noteText);
  //     setNoteText("");
  //   }
  // };
  return (
    <div className="note new">
      <textarea
        rows={8}
        cols={10}
        value={noteText}
        placeholder="Type to add a Note...."
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small> {charcount - noteText?.length || 0} Remaining </small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
}
