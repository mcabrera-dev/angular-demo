import { CreateTodoCmd } from './create-todo-cmd'
import { anything, capture, instance, mock, when } from 'ts-mockito'
import { TodoRepository } from '../domain/todo-repository'

describe('CreateTodoCmd', () => {
  it('should create a todo', async () => {
    const { createTodoCmd, todoRepository } = setup()
    when(todoRepository.create(anything())).thenResolve()
    const date = new Date()

    await createTodoCmd.internalExecute({ date, title: 'foo', completed: false })

    const [actual] = capture(todoRepository.create).last()
    expect(actual).toEqual({ date, title: 'foo', completed: false })
  })
})

function setup() {
  const todoRepository = mock<TodoRepository>()

  return {
    todoRepository,
    createTodoCmd: new CreateTodoCmd(instance(todoRepository)),
  }
}
