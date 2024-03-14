import React from 'react';
import { useState } from 'react';

const AddNote = (props) => {
  const [text, setText] = useState('');
  let characterLimit = 200;
  const handleChange = (event) => {
    setText(event.target.value);
    //setRemaining(200-text.length-1);
  };
  const submitNote = (e) => {
    if (text.trim().length > 0) {
      props.handleNote(text);
      setText('');
    }
    if (text.trim().length === 0) setText('');
  };
  return (
    <div className='note new'>
      <textarea
        onChange={(e) => handleChange(e)}
        rows='8'
        cols='10'
        placeholder='Type to add a note...'
        className='textarea'
        maxLength={characterLimit}
        value={text}
      ></textarea>
      <div className='note-footer'>
        <small>{characterLimit - text.length} remaining</small>
        <button type='submit' className='save' onClick={submitNote}>
          save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
