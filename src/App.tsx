import { useState } from 'react'
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import {Note} from './Types/note'
import './css/App.css'

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [editingNote, setEditingNote] = useState<Note | null>(null);

  const addNote = (title: string, content: string) => {
    const newNote: Note = {
      id: Date.now(),
      title,
      content
    }
    setNotes((prevNotes) => [...prevNotes, newNote])

  }

  const deleteNote = (id: number) => {
    const updateNotes = notes.filter((note) => note.id !== id);
    setNotes(updateNotes)
  }

  const editNote = (note: Note) => {
    setEditingNote(note);
  }

  const saveEditedNote = (updateNote: Note) => {
    setNotes(notes.map(note => note.id === updateNote.id ? updateNote: note))    
    setEditingNote(null);
  }

  return (
    <div className="app-container"> {/* Classe para estilizar o contêiner principal */}
      <h1 className="app-title">Notes App</h1> {/* Classe para estilizar o título */}
      <NoteForm  onAddNote={addNote}  /> {/* Componente de formulário com classe */}
      <NoteList notes={notes} onDeleteNote={deleteNote} onEditNote={editNote} />
      {editingNote && (
        <NoteForm
          initialNote={editingNote}
          onSaveNote={saveEditedNote}
        />
      )}
    </div>
  );
}
export default App
