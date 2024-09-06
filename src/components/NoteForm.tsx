import React, { useState, useEffect } from 'react';
import '../css/NoteForm.css'

interface NoteFormProps {
    initialNote?: {id:number; title: string; content: string};
    onAddNote?: (title: string, content: string) => void;
    onSaveNote?: (note: { id: number; title: string; content: string }) => void;
}

const NoteForm: React.FC<NoteFormProps> = ({initialNote, onAddNote, onSaveNote}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() =>{
        if(initialNote) {
            setTitle(initialNote.title)
            setContent(initialNote.content)
        }
    }, [initialNote])

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();


    if (onSaveNote && initialNote) {
        onSaveNote({
            id: initialNote.id, title, content
        }); 
      } else if (onAddNote) {
        onAddNote(title, content); // Se estiver no modo de adição
      }
  
      setTitle('');
      setContent('');
    };

    return (
        <form onSubmit={handleSubmit} className="note-form">
            <div className="form-area-inputs">
  <input
    type="text"
    placeholder="Title"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    required
    className="note-form__input input-alternative"
    />
  <input
    placeholder="Content"
    value={content}
    onChange={(e) => setContent(e.target.value)}
    required
    className="note-form__input"
    />
    </div>
    <div className ="form-area-button">
  <button type="submit" className="note-form__button">
    {initialNote ? 'Salvar Nota' : 'Adicionar Nota'}
  </button>
    </div>
</form>
    );
};


export default NoteForm;