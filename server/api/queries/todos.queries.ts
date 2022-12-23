export const createTodosTable = `
  DROP TABLE IF EXISTS todos;
  CREATE TABLE IF NOT EXISTS todos (
    _id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(1023),
    date TIMESTAMP,
    isImportant BOOLEAN NOT NULL DEFAULT false,
    state VARCHAR(15) NOT NULL DEFAULT 'to do',
    type VARCHAR(15) NOT NULL DEFAULT 'ordinary',
    userpoints SMALLINT
  );
`;

export const insertTodos = `
  INSERT INTO todos (name, description, date, isImportant, state, type, userpoints)
  VALUES 
         ('Example ToDo', 'Something about', TO_TIMESTAMP(${Date.now() / 1000}), true, 'in progress', 'ordinary', 2);
`;

export const getTodosQuery = `SELECT * FROM todos`;
export const insertTodoQuery = `INSERT INTO todos (name, description, date, isImportant, state, type, userpoints) VALUES ($1, $2, $3, $4, $5, $6, $7)`;
export const deleteTodoQuery = `DELETE FROM todos WHERE _id = $1`;

export const dropTodosTable = 'DROP TABLE todos';
