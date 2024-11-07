// App.js
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, StatusBar, Text } from 'react-native';
import TaskInput from './assets/components/TaskInput';
import TaskItem from './assets/components/TaskItem';

export default function App() {
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

  const toggleCompleteTask = (taskKey) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.key === taskKey ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>APP de Tarefas</Text>
        <Text style={styles.headerSubtitle}>Adriano Saraiva</Text>
      </View>
      <TaskInput onAddTask={addTask} editingTask={editingTask} />
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onDelete={() => deleteTask(item.key)}
            onEdit={() => editTask(item)}
            onToggleComplete={() => toggleCompleteTask(item.key)}
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
  header: {
    padding: 20,
    backgroundColor: '#556677',
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
  },
});
