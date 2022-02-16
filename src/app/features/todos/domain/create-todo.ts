import { Todo } from './todo'

export type CreateTodo = Omit<Todo, 'id'>
