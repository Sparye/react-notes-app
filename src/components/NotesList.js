import Note from './Note';

const NotesList = ({ notes }) => {
    return(
        <div className='notes-list'>
            <Note />
            <Note />
            <Note />
            <Note />
        </div>
    );
};

export default NotesList;