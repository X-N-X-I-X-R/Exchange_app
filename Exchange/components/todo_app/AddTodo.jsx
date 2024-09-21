import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import { postData } from '../../services/crud/post';

const AddTodo = () => {
  const handleAddTodo = () => {
    const id = 1;  // כאן id מוגדר כמספר
    const title = 'Learn React Native';
    const completed = false;

    const path = `todos/${id}`;  // יצירת הנתיב
    const data = {
      title: title,
      completed: completed,
    };

    postData(path, data)
      .then(() => {
        console.log(path, data, 'Task added successfully!');
      })
      .catch((error) => {
        console.error('Error adding task:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text>Add a new task</Text>
      <Pressable style={styles.button} onPress={handleAddTodo}>
        <Text style={styles.buttonText}>Add Task</Text>
      </Pressable>
    </View>
  );
};

export default AddTodo;

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
});