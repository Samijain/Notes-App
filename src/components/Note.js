import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
const Note = (props) => {
  // const handleDeleteNote = (id) => {
  //   console.log(id);
  //   props.handleDeleteNote(id);
  // };
  return (
    <div className='note'>
      <span> {props.note.text}</span>
      <div className='note-footer'>
        <span>{props.note.date}</span>
        <MdDeleteForever
          onClick={(e) => props.handleDeleteNote(props.note.id)}
        ></MdDeleteForever>
      </div>
    </div>
  );
};

export default Note;
