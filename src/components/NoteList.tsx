import React from 'react';
import {Note as NoteType} from '../Types/note';
import Note from './Note';
import '../css/NoteList.css'
 

interface NoteListProps {   
    notes: NoteType[];
    onDeleteNote: (id: number) => void;
    onEditNote: (note: { id: number; title: string; content: string }) => void;
}

const NoteList: React.FC<NoteListProps> = ({notes, onDeleteNote, onEditNote}) => {
    return (
        <div className="note-list">
  {notes.map((note) => (
    <Note
      key={note.id}
      note={note}
      onDeleteNote={onDeleteNote}
      onEditNote={() => onEditNote(note)}
    />
  ))}
</div>
    );
};

export default NoteList;