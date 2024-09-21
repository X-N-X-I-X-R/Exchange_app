import { StyleSheet, Text, View,Pressable} from 'react-native'
import React from 'react'
import { getData } from '../../services/crud/get'

const GetTodo = () => {
const handleGetTodo = () =>{
  const path = 'todos/1'; // יצירת הנתיב
  getData(path)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error('Error getting task:', error);
    });
  
};
return (
  <View style={styles.container}>
    <Text>Get a task</Text>
    <Pressable style={styles.button} onPress={handleGetTodo}>
      <Text style={styles.buttonText}>Get Task</Text>
    </Pressable>
  </View>
);
}

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
});
