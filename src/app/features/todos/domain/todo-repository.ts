import { Todo } from './todo'
import { CreateTodo } from './create-todo'

export interface TodoRepository {
  findAll(): Promise<Todo[]>
  update(todo: Todo): Promise<void>
  create(todo: CreateTodo): Promise<void>
}
