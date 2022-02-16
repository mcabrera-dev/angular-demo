import { Id } from '../../../core/types/id'

export interface Todo {
  id: Id
  title: string
  completed: boolean
  date: Date
}
