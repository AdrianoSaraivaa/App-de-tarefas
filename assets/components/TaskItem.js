// components/TaskItem.js
import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function TaskItem({ task, onDelete, onEdit, onToggleComplete }) {
  return (
    <View style={[styles.taskContainer, task.completed && styles.completedTask]}>
      <TouchableOpacity onPress={onToggleComplete}>
        <Text style={styles.taskText}>{task.value}</Text>
      </TouchableOpacity>
      <View style={styles.buttonGroup}>
        <Button title="Editar" onPress={onEdit} color="#1e90ff" />
        <Button title="Excluir" onPress={onDelete} color="#ff6347" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#2D2D2D',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  taskText: {
    color: '#E5E5E5',
    fontSize: 16,
  },
  buttonGroup: {
    flexDirection: 'row',
  },
  completedTask: {
    backgroundColor: '#2A2A2A',
    textDecorationLine: 'line-through',
  },
});
