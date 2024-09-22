import { StyleSheet, Text, View, Pressable } from 'react-native';  // ייבוא Pressable
import React from 'react';
import { deleteData } from '../../services/crud/delete';

const DeleteTodo = () => {
  const handleDeleteTodo = () => {
    const id = 1;  // ניתן להגדיר כאן מזהה דינמי אם יש צורך
    if (id) {  // וידוא שהמזהה תקין לפני מחיקה
      const path = `todos/${id}`;  // יצירת הנתיב עם המזהה
      deleteData(path)
        .then(() => {
          console.log(path, 'Task deleted successfully!');
        })
        .catch((error) => {
          console.error('Error deleting task:', error);
        });
    } else {
      console.error('Invalid ID, cannot delete task');
    }
  };

const handleDeleteAllTodos = () => {
  const path = 'todos';  // יצירת הנתיב למחיקת כל המשימות
  deleteData(path)
    .then(() => {
      currentId = 0;  // לאתחל את ה-currentId ל-0 לאחר מחיקת כל המשימות
      setLoaded(false); // לבטל את המצב של טוען כדי שנרענן את המידע מחדש
      getMaxId(); // קריאה כדי לוודא שהמזהה מתחיל מאפס שוב
      console.log(path, 'All tasks deleted successfully!');
    })
    .catch((error) => {
      console.error('Error deleting all tasks:', error);
    });
};



  return (
    <View style={styles.container}>
      <Text>Delete a task</Text>
      <Pressable style={styles.button} onPress={handleDeleteTodo}>
        <Text style={styles.buttonText}>Delete Task</Text>
      </Pressable>
      <Pressable style={[styles.button, styles.deleteAllButton]} onPress={handleDeleteAllTodos}>
        <Text style={styles.buttonText}>Delete All Tasks</Text>
      </Pressable>
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
  button: {
    backgroundColor: '#FF3E3E',  // צבע כפתור מחיקה אדום
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    margin: 10,
  },
  deleteAllButton: {
    backgroundColor: '#DC143C',  // צבע כהה יותר למחיקת כל המשימות
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});
