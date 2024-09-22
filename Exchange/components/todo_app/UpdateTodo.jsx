import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateTodoAsync, fetchTodosAsync } from '../../src/store/todoSlice';

const UpdateTodo = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todos);
    const [completedTasks, setCompletedTasks] = useState({});

    useEffect(() => {
        dispatch(fetchTodosAsync());
    }, [dispatch]);

  const handleUpdateTodo = async (id, currentStatus) => {
    const newStatus = !currentStatus;

    try {
        await dispatch(updateTodoAsync({ id, data: { completed: newStatus } })).unwrap();  // שימוש ב-id ולא ב-path
        console.log('Task updated successfully!');

        setCompletedTasks((prevCompletedTasks) => ({
            ...prevCompletedTasks,
            [id]: newStatus,
        }));

        dispatch(fetchTodosAsync());
    } catch (error) {
        console.error('Error updating task:', error);
    }
};


    return (
        <View style={styles.container}>
            {Array.isArray(todos) && todos.length > 0 ? (
                todos.map((todo) => (
                    <View key={todo.id} style={styles.todoContainer}>
                        <Text style={styles.todoText}>{todo.title}</Text>
                        <Pressable 
                            style={styles.button} 
                            onPress={() => handleUpdateTodo(todo.id, completedTasks[todo.id] !== undefined ? completedTasks[todo.id] : todo.completed)}
                        >
                            <Text style={styles.buttonText}>
                                {completedTasks[todo.id] !== undefined ? (completedTasks[todo.id] ? 'Mark as Incomplete' : 'Mark as Complete') : (todo.completed ? 'Mark as Incomplete' : 'Mark as Complete')}
                            </Text>
                        </Pressable>
                    </View>
                ))
            ) : (
                <Text>No tasks available</Text>
            )}
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
        backgroundColor: '#FFA500',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});