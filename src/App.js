import { useState } from 'react';
import NotesList from './components/NotesList';
import { nanoid } from 'nanoid';
import  Search  from './components/Search';
const App = () => {

    const [notes,setNotes] = useState([
            {
            id: nanoid(),
            text: "This yeet is ",
            date: "15/06/2021",
        },
        {
            id: nanoid(),
            text: "This second is ",
            date: "14/06/2021",
        },
        {
            id: nanoid(),
            text: "This third is ",
            date: "12/06/2021",
        },
    ]);

    const [searchText, setSearchText] = useState('');

    const addNote = (text) => {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString()
        }
        const newNotes = [...notes, newNote];
        setNotes(newNotes);
    };

    const deleteNote = (id) => {
        const newNotes = notes.filter((note)=>note.id !== id);
        setNotes(newNotes);
    }

    return (
    <div className='container'>
        <Search handleSearchNote = {setSearchText}/>
        <NotesList 
            notes={notes.filter((note)=> 
                note.text.toLowerCase().includes(searchText)
            )} 
            handleAddNote={addNote} 
            handleDeleteNote={deleteNote}/>
    </div>
    );
}

export default App;