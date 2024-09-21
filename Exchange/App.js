import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddTodo from './components/todo_app/AddTodo';
import GetTodo from './components/todo_app/GetTodo';

export default function App() {
  return (
    <View style={styles.container}>

<AddTodo />
<GetTodo />
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
