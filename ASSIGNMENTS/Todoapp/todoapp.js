import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList, ScrollView } from 'react-native';

function TodoApp() {
  const [todoItems, setTodoItems] = useState([]);
  const [textInput, setTextInput] = useState('');

  const addTodoItem = () => {
    if (textInput.trim() !== '') {
      setTodoItems([...todoItems, textInput]);
      setTextInput('');
    }
  };

  const deleteTodoItem = index => {
    const newTodoItems = [...todoItems];
    newTodoItems.splice(index, 1);
    setTodoItems(newTodoItems);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={text => setTextInput(text)}
          value={textInput}
          placeholder="Add a new todo..."
        />
        <Button title="Add" onPress={addTodoItem} />
      </View>
      <ScrollView style={styles.scrollView}>
        <FlatList
          data={todoItems}
          renderItem={({ item, index }) => (
            <View style={styles.item}>
              <Text>{item}</Text>
              <Button title="X" onPress={() => deleteTodoItem(index)} />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  scrollView: {
    width: '100%',
  },
});

export default TodoApp;
