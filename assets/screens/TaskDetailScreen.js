// screens/TaskDetailScreen.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function TaskDetailScreen({ route, navigation }) {
  const { task } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes da Tarefa</Text>
      <Text style={styles.taskText}>Descrição: {task.value}</Text>
      <Text style={styles.taskText}>Concluída: {task.completed ? 'Sim' : 'Não'}</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#222',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 10,
  },
  taskText: {
    fontSize: 18,
    color: '#ccc',
    marginBottom: 5,
  },
});
