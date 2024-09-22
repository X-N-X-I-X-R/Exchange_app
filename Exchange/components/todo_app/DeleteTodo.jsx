import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../../src/store/todoSlice';
import { deleteData } from '../../services/generic_functions_CRUD/remove';

const DeleteTodo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos); // Accessing the todos array correctly

  const handleDeleteTodo = async (id) => {
    try {
      await deleteData(`todos/${id}`);
      dispatch(deleteTodo(id));
      console.log('Task deleted successfully!');
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <View style={styles.container}>
      {Array.isArray(todos) && todos.length > 0 ? (
        todos.map((todo) => (
          <View key={todo.id} style={styles.todoContainer}>
            <Text style={styles.todoText}>{todo.title}</Text>
            <Pressable style={styles.button} onPress={() => handleDeleteTodo(todo.id)}>
              <Text style={styles.buttonText}>Delete Task</Text>
            </Pressable>
          </View>
        ))
      ) : (
        <Text>No tasks available</Text>
      )}
    </View>
  );
};

export default DeleteTodo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  todoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  todoText: {
    fontSize: 18,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#FF0000',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});