import React from 'react';
import Note from './Note';

const NoteList = ({ notes }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {notes.map((note) => (
        <Note key={note.id} {...note} />
      ))}
    </div>
  );
};

export default NoteList;