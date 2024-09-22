// Update Todo component 

import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { updateData } from '../../services/crud/update';

const UpdateTodo = () => {
  const [completed, setCompleted] = useState(false);

  const handleUpdateTodo = () => {
    const id = 1;
    const path = `todos/${id}`;
    const data = {
      completed: !completed,
    };

    updateData(path, data)
      .then(() => {
        console.log(path, data, 'Task updated successfully!');
        setCompleted(!completed);
      })
      .catch((error) => {
        console.error('Error updating task:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text>Update a task</Text>
      <Pressable style={styles.button} onPress={handleUpdateTodo}>
        <Text style={styles.buttonText}>Update Task</Text>
      </Pressable>
    </View>
  );
}

export default UpdateTodo;

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
