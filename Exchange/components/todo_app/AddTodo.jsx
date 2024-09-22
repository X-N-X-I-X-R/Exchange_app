import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import { postData} from '../../services/crud/post';
import { getData } from '../../services/crud/get';

let currentId = 0;

const AddTodo = () => {
  const [loaded, setLoaded] = useState(false);  // נשתמש במצב כדי לדעת מתי הטעינה הסתיימה

  // פונקציה לבדיקת המזהה הגבוה ביותר לפני הוספת משימה חדשה
  const getMaxId = async () => {
    const todos = await getData('todos');  // קריאה לקבלת כל המשימות מה-Database
    if (todos) {
      const keys = Object.keys(todos);  // לוקחים את כל המפתחות (המזהים)
      if (keys.length > 0) {
        currentId = Math.max(...keys.map(Number));  // המזהה הגבוה ביותר
      } else {
        currentId = 0;  // אם אין משימות, נתחיל מ-0
      }
    }
    setLoaded(true);  // טעינה הסתיימה
  };

  useEffect(() => {
    getMaxId();  // מבצעים את בדיקת המזהים כשהקומפוננטה נטענת
  }, []);

  const handleAddTodo = () => {
    if (!loaded) return;  // נוודא שהמידע נטען לפני הוספת משימה חדשה

    currentId += 1;  // מגדילים את המזהה במספר אחד

    const id = currentId;
    const title = 'Learn React Native';
    const completed = false;

    const path = `todos/${id}`;  // יצירת הנתיב עם המזהה הרץ
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
