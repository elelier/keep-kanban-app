import React, { useState } from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const NoteForm = ({ onSubmit, initialNote = {} }) => {
  const [note, setNote] = useState({
    title: initialNote.title || '',
    content: initialNote.content || '',
    category: initialNote.category || '',
    status: initialNote.status || 'To Do',
    dueDate: initialNote.dueDate || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(note);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        name="title"
        value={note.title}
        onChange={handleChange}
        placeholder="Título"
        required
      />
      <Textarea
        name="content"
        value={note.content}
        onChange={handleChange}
        placeholder="Contenido"
        required
      />
      <Input
        name="category"
        value={note.category}
        onChange={handleChange}
        placeholder="Categoría"
      />
      <Select name="status" value={note.status} onValueChange={(value) => handleChange({ target: { name: 'status', value } })}>
        <SelectTrigger>
          <SelectValue placeholder="Selecciona un estado" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="To Do">To Do</SelectItem>
          <SelectItem value="In Progress">In Progress</SelectItem>
          <SelectItem value="Done">Done</SelectItem>
        </SelectContent>
      </Select>
      <Input
        type="date"
        name="dueDate"
        value={note.dueDate}
        onChange={handleChange}
      />
      <Button type="submit">Guardar Nota</Button>
    </form>
  );
};

export default NoteForm;