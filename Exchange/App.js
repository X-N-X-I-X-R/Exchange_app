// App.js
import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store/todoStore';
import AddTodo from './components/todo_app/AddTodo';
import GetTodo from './components/todo_app/GetTodo';
import UpdateTodo from './components/todo_app/UpdateTodo';
import DeleteTodo from './components/todo_app/DeleteTodo';


export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>

      <View style={styles.container}>
        <AddTodo />
        <GetTodo />
        <UpdateTodo />
        <DeleteTodo />
      </View>
      </SafeAreaView>
    </Provider>
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
