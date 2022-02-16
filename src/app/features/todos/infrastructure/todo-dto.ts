import { Id } from '../../../core/types/id'

export interface TodoDto {
  id: Id
  title: string
  completed: boolean
  date: string
}
