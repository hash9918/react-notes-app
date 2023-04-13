import React from "react";
import { MdDeleteForever } from "react-icons/md";
export default function Note({ id, text, date, handleDeleteNote }) {
  const temp = date.indexOf("T");
  console.log(temp);

  // date.splice(0, temp);
  const datem = date.substr(0, temp);
  console.log(datem);

  return (
    <div className="note">
      <span> {text}</span>
      <div className="note-footer">
        <small>{datem}</small>
        <MdDeleteForever
          onClick={() => {
            console.log(id);
            handleDeleteNote(id);
          }}
          className="delete-icon"
          size="1.3em"
        />
      </div>
    </div>
  );
}
