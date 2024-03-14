import { useState } from 'react';
import NotesList from './components/NotesList';
import { nanoid } from 'nanoid';
import Search from './components/Search';

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'Heyy',
      date: new Date().toLocaleDateString(),
    },
    {
      id: nanoid(),
      text: 'Good Morning',
      date: new Date().toLocaleDateString(),
    },
    {
      id: nanoid(),
      text: 'Samyak',
      date: new Date().toLocaleDateString(),
    },
    {
      id: nanoid(),
      text: 'Have A Good Day!!!',
      date: new Date().toLocaleDateString(),
    },
  ]);

  const [searchText, setSearchText] = useState('');
  console.log(notes);
  const handleNote = (textt) => {
    setNotes((curr) => [
      {
        id: nanoid(),
        text: textt,
        date: new Date().toLocaleDateString(),
      },
      ...curr,
    ]);
    console.log(textt);
  };
  const handleDeletNote = (id) => {
    let items = notes.filter((x) => x.id !== id);
    console.log(items);
    setNotes(items);
    console.log(id);
  };
  const handleSearch = (value) => {
    setSearchText(value);
  };
  return (
    <div className='container'>
      <div className='header'>
        <p
          style={{
            fontFamily: 'cursive',
            paddingLeft: '40%',
            fontSize: 'larger',
            fontWeight: 600,
          }}
        >
          Notes List
        </p>
      </div>
      <Search handleSearch={handleSearch} />
      <NotesList
        notes={notes.filter((n) =>
          n.text.toLowerCase().includes(searchText.toLowerCase())
        )}
        handleNote={handleNote}
        handleDeleteNote={handleDeletNote}
      />
    </div>
  );
}

export default App;
