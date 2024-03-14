import React from 'react';
import Note from './Note';
import AddNode from './AddNote';
const NotesList = (props) => {
  console.log(props.notes);
  return (
    <>
      <div className='notes-list'>
        <AddNode handleNote={props.handleNote} />
        {props.notes.map((note) => (
          <Note note={note} handleDeleteNote={props.handleDeleteNote} />
        ))}
      </div>
    </>
  );
};

export default NotesList;
