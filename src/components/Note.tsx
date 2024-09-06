import React from 'react';
import {Note as NoteType} from '../Types/note';
import '../css/Note.css'

interface NoteProps {
     note: NoteType;
     onDeleteNote: (id: number) => void;
     onEditNote: () => void;
}

const Note: React.FC <NoteProps> = ({note, onDeleteNote, onEditNote}) => {
    return (
<div className="note">
    <div className="table">
    <div className ="note-title-content">
        
  <h3 className="note__title note-h-p"> {note.title}</h3>
  <p className="note__content note-h-p"> {note.content}</p>
  </div>
  <div className='note-area-button'>
  <button onClick={() => onDeleteNote(note.id)} className="note__button note__button--delete">
    Delete
  </button>
  <button onClick={onEditNote} className="note__button note__button--edit">
    Edit
  </button>
    </div>
    </div>
</div>
    )
}

export default Note;