import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { update, ref, get } from 'firebase/database';  
import { database } from '../../services/firebase'; 

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

export const fetchTodosAsync = createAsyncThunk(
  'todos/fetchTodosAsync',
  async (_, { rejectWithValue }) => {
    try {
      const snapshot = await get(ref(database, 'todos'));
      const todos = snapshot.val();
      if (todos) {
        console.log('Fetched todos:', todos);
        return Object.entries(todos).map(([id, todo]) => ({ id, ...todo }));
      } else {
        return [];
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateTodoAsync = createAsyncThunk(
  'todos/updateTodoAsync',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const todoRef = ref(database, `todos/${id}`);  // עדכון ישיר לרשומה עם ה-id הקיים
      await update(todoRef, data);
      return { id, data };  // החזר את ה-id והנתונים המעודכנים
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const index = state.todos.findIndex(todo => todo.id === action.payload.id);
      }
  
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodosAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodosAsync.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.loading = false;
      })
      .addCase(fetchTodosAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
.addCase(updateTodoAsync.fulfilled, (state, action) => {
  const index = state.todos.findIndex(todo => todo.id === action.payload.id);
  if (index !== -1) {
    state.todos[index] = { ...state.todos[index], ...action.payload.data };
  }
});

  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;