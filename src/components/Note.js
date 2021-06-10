import { MdDeleteForever } from 'react-icons/md';

const Note = () => {
    return(
        <div className='note'>
            <span>Hello! GG</span>
            <div className='note-footer'>
                <small>13/06/2021</small>
                <MdDeleteForever className='delete-icon' size='1.3em' />
            </div>
        </div>
    );
};
export default Note;