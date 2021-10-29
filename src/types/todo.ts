export type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export interface ITodoList {
  /** タスクの一覧 */
  todos: TodoType[];
}

export interface IState {
  taskList: ITodoList;
}

export const SortTodo = {
  userId: "userId",
  id: "id",
  title: "title",
  completed: "completed",
} as const;
 
export type SortTodoType = typeof SortTodo[keyof typeof SortTodo];