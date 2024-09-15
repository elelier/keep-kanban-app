import React from 'react';
import { Card, CardContent, CardHeader, CardFooter } from './ui/card';
import { Badge } from './ui/badge';

const Note = ({ title, content, category, status, createdAt, dueDate }) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex space-x-2">
          <Badge variant="secondary">{category}</Badge>
          <Badge variant="outline">{status}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{content}</p>
      </CardContent>
      <CardFooter className="text-xs text-gray-500">
        <div>Creado: {new Date(createdAt).toLocaleDateString()}</div>
        {dueDate && <div>Vence: {new Date(dueDate).toLocaleDateString()}</div>}
      </CardFooter>
    </Card>
  );
};

export default Note;