import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';  // ודא שאתה מייבא את ה-reducer

const store = configureStore({
  reducer: {
    todos: todoReducer,  // מוסיף את ה-reducer תחת todos
  },
});

export default store;
