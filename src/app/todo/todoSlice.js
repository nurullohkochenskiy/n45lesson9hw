import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    create: (state, action) => {
      state.todos.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    delete: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    toggle: (state, action) => {
      const toggledTodo = state.todos.find((todo) => todo.id == action.payload);
      if (toggledTodo) {
        toggledTodo.isCompleted = !toggledTodo.isCompleted;
        localStorage.setItem("todos", JSON.stringify(state.todos));
      }
    },
  },
});

export const todoReducer = todoSlice.reducer;
export const todoActions = todoSlice.actions;
