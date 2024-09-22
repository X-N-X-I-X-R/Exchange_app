import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddTodo from './components/todo_app/AddTodo';
import GetTodo from './components/todo_app/GetTodo';
import UpdateTodo from './components/todo_app/UpdateTodo';
import DeleteTodo from './components/todo_app/DeleteTodo';

export default function App() {
  return (
    <View style={styles.container}>

<AddTodo />
<GetTodo />
<UpdateTodo />
<DeleteTodo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
