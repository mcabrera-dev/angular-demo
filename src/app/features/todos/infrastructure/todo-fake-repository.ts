import { TodoRepository } from '../domain/todo-repository'
import { Injectable } from '@angular/core'
import { Todo } from '../domain/todo'
import { CreateTodo } from '../domain/create-todo'

@Injectable({
  providedIn: 'root',
})
export class TodoFakeRepository implements TodoRepository {
  create(_todo: CreateTodo): Promise<void> {
    return Promise.resolve(undefined)
  }

  async findAll(): Promise<Todo[]> {
    return [{ id: 'ldj-dnsr-jpc', date: new Date(), completed: true, title: 'Learn Archimedes' }]
  }

  update(_todo: Todo): Promise<void> {
    return Promise.resolve(undefined)
  }
}
