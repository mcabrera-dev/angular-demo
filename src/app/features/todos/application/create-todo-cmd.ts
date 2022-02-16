import { Inject, Injectable } from '@angular/core'
import { TodoRepository } from '../domain/todo-repository'
import { TODO_REPOSITORY } from '../../../core/injection-tokens/injection-tokens'
import { Command } from '@archimedes/arch'
import { CreateTodo } from '../domain/create-todo'

@Injectable({
  providedIn: 'root',
})
export class CreateTodoCmd extends Command<CreateTodo> {
  constructor(@Inject(TODO_REPOSITORY) private readonly todoRepository: TodoRepository) {
    super()
  }

  async internalExecute(createTodo: CreateTodo): Promise<void> {
    return this.todoRepository.create(createTodo)
  }
}
