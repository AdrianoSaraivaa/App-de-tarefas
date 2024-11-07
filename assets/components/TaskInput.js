// components/TaskInput.js
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

export default function TaskInput({ onAddTask, editingTask }) {
  const [task, setTask] = useState('');

  useEffect(() => {
    if (editingTask) {
      setTask(editingTask.value);
    }
  }, [editingTask]);

  const handleAddTask = () => {
    onAddTask(task);
    setTask('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Nova Tarefa"
        placeholderTextColor="#bbb"
        style={styles.input}
        value={task}
        onChangeText={setTask}
      />
      <View style={styles.buttonContainer}>
        <Button title={editingTask ? "Salvar" : "Adicionar"} onPress={handleAddTask} color="#556677" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderColor: '#333',
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
    borderRadius: 10,
    color: '#E5E5E5', // Cinza claro
    backgroundColor: '#1B1B1B',
  },
  buttonContainer: {
    backgroundColor: '#32CD32', // Verde
    borderRadius: 10,
    overflow: 'hidden',
  },
});
