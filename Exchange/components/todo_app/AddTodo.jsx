import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../src/store/todoSlice';
import { postData } from '../../services/generic_functions_CRUD/post';
import { ref, push, serverTimestamp } from 'firebase/database';
import { database } from '../../services/firebase';

const AddTodo = () => {
  const [loaded, setLoaded] = useState(false);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  // המרת חותמת הזמן לפורמט תאריך קריא
  const formatTime = (timestamp) => {
    if (!timestamp) return ''; 
    const date = new Date(timestamp);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    });
  }

  const handleAddTodo = async () => {
    if (!loaded) return;  // מוודאים שהנתונים נטענו

    const date = new Date().toLocaleString(
      'en-US', 
      {
            hour12: false,

        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      }
    ); // קביעת הזמן הנוכחי בפורמט המקומי

    const newTodo = {
      title,
      text,
      time: date,  // הוספת הזמן של השרת בצורה אוטומטית
      completed: false,
    };

    try {
      const newTodoRef = ref(database, 'todos');
      const newTodoWithId = push(newTodoRef);  // יצירת מזהה ייחודי

      await postData(`todos/${newTodoWithId.key}`, newTodo);
      dispatch(addTodo({ id: newTodoWithId.key, ...newTodo }));
      console.log('Task added successfully!');
    } catch (error) {
      console.error('Error adding task:', error);
    }

    setTitle('');
    setText('');
  }

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Add a task</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Text"
        value={text}
        onChangeText={setText}
      />
      <Pressable style={styles.button} onPress={handleAddTodo}>
        <Text style={styles.buttonText}>Add Task</Text>
      </Pressable>
    </View>
  );
}

export default AddTodo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
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