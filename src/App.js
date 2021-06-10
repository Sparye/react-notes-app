import { useState } from 'react';
import NotesList from './components/NotesList';
import { nanoid } from 'nanoid';
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

    const addNote = (text) => {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString()
        }
        const newNotes = [...notes, newNote];
        setNotes(newNotes);
    }
    return (
    <div className='container'>
        <NotesList notes={notes} handleAddNote={addNote}/>
    </div>
    );
}

export default App;