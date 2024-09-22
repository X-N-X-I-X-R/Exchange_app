import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'; 
import { fetchTodosAsync } from '../../src/store/todoSlice';

const GetTodo = () => {
  const dispatch = useDispatch();
  const { todos, loading, error } = useSelector((state) => state.todos);
  const [allTodos, setAllTodos] = useState([]);

  useEffect(() => {
    dispatch(fetchTodosAsync());
  }, [dispatch]);

  const handleGetTodo = () => {
    dispatch(fetchTodosAsync()).then((action) => {
      if (action.payload) {
        setAllTodos(action.payload);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text>Get all tasks with their completion status</Text>
      <Pressable style={styles.button} onPress={handleGetTodo}>
        <Text style={styles.buttonText}>Refresh Tasks</Text>
      </Pressable>

      {loading && <Text>Loading...</Text>}
      {error && <Text>Error: {error}</Text>}
      {Array.isArray(allTodos) && allTodos.length > 0 ? (
        allTodos.map((todo, index) => (
          <View key={`${todo.id}-${index}`} style={styles.todoContainer}>
            <Text>{todo.title} - {todo.completed ? 'Completed' : 'Not Completed'}</Text>
          </View>
        ))
      ) : (
        !loading && <Text>No tasks available</Text>
      )}
    </View>
  );
};

export default GetTodo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  todoContainer: {
    marginTop: 10,
  },
});