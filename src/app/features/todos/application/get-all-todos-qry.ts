import { Inject, Injectable } from '@angular/core'
import { TodoRepository } from '../domain/todo-repository'
import { Todo } from '../domain/todo'
import { TODO_REPOSITORY } from '../../../core/injection-tokens/injection-tokens'
import { Query } from '@archimedes/arch'

@Injectable({
  providedIn: 'root',
})
export class GetAllTodosQry extends Query<Todo[]> {
  constructor(@Inject(TODO_REPOSITORY) private readonly todoRepository: TodoRepository) {
    super()
  }

  async internalExecute(): Promise<Todo[]> {
    return this.todoRepository.findAll()
  }
}
