import React, { useState, useRef, useEffect } from 'react';
import NoteList from './components/NoteList';
import KanbanBoard from './components/KanbanBoard';
import Header from './components/Header';
import NewNoteInput from './components/NewNoteInput';

function App() {
  const [notes, setNotes] = useState([]);
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'kanban'
  const [isCreatingNote, setIsCreatingNote] = useState(false); // Controla si el formulario está abierto
  const noteFormRef = useRef(null); // Referencia para el formulario

  // Para cuando se haga clic fuera del formulario
  useEffect(() => {
    function handleClickOutside(event) {
      if (noteFormRef.current && !noteFormRef.current.contains(event.target)) {
        handleFormClose(); // Cierra y guarda la nota si se hace clic fuera
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const addNote = (newNote) => {
    setNotes([...notes, { ...newNote, id: Date.now(), createdAt: new Date() }]);
  };

  const handleViewChange = (view) => {
    setViewMode(view === 'grid' ? 'list' : 'kanban');
  };

  // Función para abrir el formulario de creación de notas
  const handleCreateNote = () => {
    setIsCreatingNote(true);
  };

  // Función para cerrar el formulario y guardar la nota
  const handleFormClose = (newNote) => {
    if (newNote?.title && newNote?.content) {
      addNote(newNote);
    }
    setIsCreatingNote(false); // Cierra el formulario
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onViewChange={handleViewChange} currentView={viewMode === 'list' ? 'grid' : 'list'} />
      <div className="container mx-auto p-4 flex-grow">
        {/* Botón para crear una nueva nota */}
        <button onClick={handleCreateNote} className="btn btn-primary">
          Crear una nota
        </button>

        {/* Formulario para crear la nota */}
        {isCreatingNote && (
          <div ref={noteFormRef}>
            <NewNoteInput onAddNote={handleFormClose} />
          </div>
        )}

        {/* Muestra las notas en modo lista o Kanban */}
        {viewMode === 'list' ? (
          <NoteList notes={notes} />
        ) : (
          <KanbanBoard notes={notes} />
        )}
      </div>
    </div>
  );
}

export default App;
