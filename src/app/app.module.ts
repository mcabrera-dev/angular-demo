import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { TODO_REPOSITORY } from './core/injection-tokens/injection-tokens'
import { TodoFakeRepository } from './features/todos/infrastructure/todo-fake-repository'
import { CacheInvalidations, CacheLink, CacheManager, ExecutorLink, LoggerLink, Runner } from '@archimedes/arch'
import { CreateTodoCmd } from './features/todos/application/create-todo-cmd'
import { GetAllTodosQry } from './features/todos/application/get-all-todos-qry'
import { TodosModule } from './features/todos/todos.module'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TodosModule],
  providers: [
    {
      provide: TODO_REPOSITORY,
      useClass: TodoFakeRepository,
    },
    { provide: LoggerLink, useFactory: () => new LoggerLink(console) },
    { provide: ExecutorLink, useClass: ExecutorLink },
    { provide: CacheManager, useClass: CacheManager },
    { provide: CacheLink, useClass: CacheLink, deps: [CacheManager] },
  ],
})
export class AppModule implements DoBootstrap {
  constructor(private readonly injector: Injector) {}

  ngDoBootstrap(applicationRef: ApplicationRef): void {
    const cacheLink = this.injector.get(CacheLink)
    const loggerLink = this.injector.get(LoggerLink)
    const executorLink = this.injector.get(ExecutorLink)

    CacheInvalidations.set(CreateTodoCmd.constructor.name, [GetAllTodosQry.constructor.name])

    Runner.createChain([cacheLink, executorLink, loggerLink])

    applicationRef.bootstrap(AppComponent)
  }
}
