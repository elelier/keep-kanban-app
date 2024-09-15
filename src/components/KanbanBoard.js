import React from 'react';
import Note from './Note';

const KanbanBoard = ({ notes }) => {
  const columns = ['To Do', 'In Progress', 'Done'];

  return (
    <div className="flex space-x-4">
      {columns.map((column) => (
        <div key={column} className="flex-1">
          <h3 className="text-lg font-semibold mb-2">{column}</h3>
          <div className="space-y-4">
            {notes
              .filter((note) => note.status === column)
              .map((note) => (
                <Note key={note.id} {...note} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;