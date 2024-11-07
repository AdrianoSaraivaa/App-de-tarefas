// screens/HomeScreen.js
import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Button } from 'react-native';
import TaskInput from '../assets/components/TaskInput';
import TaskItem from '../assets/components/TaskItem';


export default function HomeScreen({ navigation }) {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (taskText) => {
    if (editingTask) {
      setTasks((currentTasks) =>
        currentTasks.map((t) =>
          t.key === editingTask.key ? { ...t, value: taskText } : t
        )
      );
      setEditingTask(null);
    } else {
      setTasks((currentTasks) => [
        ...currentTasks,
        { key: Math.random().toString(), value: taskText, completed: false },
      ]);
    }
  };

  const editTask = (task) => {
    setEditingTask(task);
  };

  const deleteTask = (taskKey) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.key !== taskKey)
    );
  };

  const viewTaskDetails = (task) => {
    navigation.navigate('TaskDetail', { task });
  };

  return (
    <View style={styles.container}>
      <TaskInput onAddTask={addTask} editingTask={editingTask} />
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onDelete={() => deleteTask(item.key)}
            onEdit={() => editTask(item)}
            onToggleComplete={() => viewTaskDetails(item)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#222',
  },
});
