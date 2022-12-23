import pool from "../../db/database";
import { Request, Response } from "express";
import {
  getTodosQuery,
  insertTodoQuery,
  deleteTodoQuery,
} from "../queries/todos.queries"

const getTodos = async (req: Request, res: Response) => {
  try {
    const todos = await pool.query(getTodosQuery)
    res.status(200).json(todos.rows)
  } catch (err: any) {
    console.error(`Error in getting todos from db: ${err}`)
    res.status(500).json({ ...err, message: err.toString() })
  }
}

const createTodo = async (req: Request, res: Response) => {
  try {
    const { name, description, date, isImportant, state, type, userpoints } = req.body
    await pool.query(insertTodoQuery, [name, description, date, isImportant, state, type, userpoints])
    try {
      const playlists = await pool.query(getTodosQuery)
      res.status(200).json(playlists.rows)
    } catch (getError: any) {
      console.error(`Error in getting todos from db: ${getError}`)
      res.status(500).json({ ...getError, message: getError.toString() })
    }
  } catch (postError: any) {
    console.error(`Error in creating new todo in db: ${postError}`)
    res.status(500).json({ ...postError, message: postError.toString() })
  }
}

const deleteTodo = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)

  try {
    await pool.query(deleteTodoQuery, [id])
    res.status(200).json(`Todo with id=${id} deleted`)
  } catch (err: any) {
    console.error(`Error in deliting todo from db: ${err}`)
    res.status(500).json({ ...err, message: err.toString() })
  }
}

module.exports = {
  getTodos,
  createTodo,
  deleteTodo,
}