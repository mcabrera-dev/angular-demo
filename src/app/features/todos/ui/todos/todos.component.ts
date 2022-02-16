import { Component, OnDestroy, OnInit } from '@angular/core'
import { GetAllTodosQry } from '../../application/get-all-todos-qry'
import { CreateTodoCmd } from '../../application/create-todo-cmd'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit, OnDestroy {
  todos = this.getAllTodosQry.execute()
  private id!: number

  constructor(private readonly getAllTodosQry: GetAllTodosQry, private readonly createTodoCmd: CreateTodoCmd) {}

  ngOnInit(): void {
    this.id = this.createTodoCmd.subscribe(() => {
      this.todos = this.getAllTodosQry.execute()
    })
  }

  ngOnDestroy(): void {
    this.createTodoCmd.unsubscribe(this.id)
  }

  createTodo() {
    this.createTodoCmd.execute({ title: 'foo', date: new Date(), completed: false })
  }
}
