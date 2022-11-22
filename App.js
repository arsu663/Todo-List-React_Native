import { StyleSheet, Text, View, ScrollView, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState } from 'react';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import Sandbox from './components/sandbox';

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Play Cricket", key: '1' },
    { text: "Sing Song", key: '2' },
    { text: "Browse on the internet", key: '3' },
  ])

  const todoPressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          {
            text: text, key: Math.random().toString()
          },
          ...prevTodos
        ]
      })
    } else {
      Alert.alert('OOps!', 'Todos must be longer 3 characters long', [
        {
          text: 'understood',
          onPress: () => console.log('Alert closed')
        }
      ])
    }

  }
  return (
    // <Sandbox />
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content} >
          {/* form */}
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list} >
            <FlatList data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} todoPressHandler={todoPressHandler} />
              )} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: {
    padding: 40,
    backgroundColor: 'pink',
    flex: 1,
  },
  list: {
    marginTop: 20,
    backgroundColor: '#f2f2f2',
    flex: 1
  }

});
