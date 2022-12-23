export const createTodosTable = `
  DROP TABLE IF EXISTS todos;
  CREATE TABLE IF NOT EXISTS todos {
    _id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(1023),
    date DATETIME NOT NULL,
    isImportant BOOLEAN NOT NULL,
    state VARCHAR(15) NOT NULL,
    type VARCHAR(15) NOT NULL,
    userpoints NUMBER
  };
`;

export const insertTodos = `
  INSERT INTO todos (name, description, date, isImportant, state, type, userpoints)
  VALUES 
         ('Example to do', 'Something about', ${new Date}, true, 'in progress', 'ordinary', 2),;
`;

export const getTodosQuery = `SELECT * FROM todos`;
export const insertTodoQuery = `INSERT INTO todos (name, description, date, isImportant, state, type, userpoints) VALUES ($1, $2, $3, $4, $5, $6, $7)`;
export const deleteTodoQuery = `DELETE FROM todos WHERE _id = $1`;

export const dropTodosTable = 'DROP TABLE todos';
