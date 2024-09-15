import React, { useState, useRef, useEffect } from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const NewNoteInput = ({ onAddNote }) => {
  const [note, setNote] = useState({ title: '', content: '' });
  const [isFocused, setIsFocused] = useState(false);
  const contentRef = useRef(null); // Referencia para el campo de contenido

  // Foco automático en el campo "Contenido" al iniciar la creación de una nota
  useEffect(() => {
    if (isFocused && contentRef.current) {
      contentRef.current.focus();
    }
  }, [isFocused]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNote({
      ...note,
      [name]: value,
    });
  };

  const handleSaveNote = () => {
    if (note.title || note.content) {
      onAddNote(note); // Guarda la nota
      setNote({ title: '', content: '' }); // Limpia el formulario
      setIsFocused(false); // Cierra el formulario
    }
  };

  // Función para manejar el botón "Cerrar"
  const handleClose = () => {
    setIsFocused(false);
    onAddNote(note); // Guarda la nota cuando se cierra
    setNote({ title: '', content: '' }); // Limpia el formulario
  };

  return (
    <div
      className={`p-4 border rounded shadow-sm transition-all duration-300 ${isFocused ? 'bg-white' : 'bg-gray-100'}`}
      onClick={() => setIsFocused(true)}
      tabIndex={0} // Para que detecte cuando se pierde el foco
    >
      {isFocused && (
        <Input
          name="title"
          value={note.title}
          onChange={handleInputChange}
          placeholder="Título"
          className="mb-2"
          autoFocus
        />
      )}
      <Textarea
        ref={contentRef} // Referencia para foco en el contenido
        name="content"
        value={note.content}
        onChange={handleInputChange}
        placeholder={isFocused ? 'Contenido...' : 'Crear una nota...'}
        rows={isFocused ? 3 : 1}
      />
      {isFocused && (
        <div className="flex justify-end mt-2">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={handleClose} // Llamada al cerrar el formulario
          >
            Cerrar
          </button>
        </div>
      )}
    </div>
  );
};

export default NewNoteInput;
