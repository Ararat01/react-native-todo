import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { Navbar } from './src/Navbar'
import { AddTodo } from './src/AddTodo'
import { Todo } from './src/Todo'

export default function App() {

  const [todos, setTodos] = useState([])

  const todoAdd = (title) => {
    setTodos((prevTodos) => ([
      {
        id: Date.now().toString(),
        title
      },
      ...prevTodos
    ])
    )
  }
  const todoDelete = (id) => {
    setTodos((prevTodos) => (
      prevTodos.filter(todo => todo.id !== id)
    )
    )
  }

  return (
    <View>
      <StatusBar
        heght=''
        backgroundColor="#3489eb"
      />
      <Navbar title="Todo App"/>
      
      <View style={styles.container}>
        <AddTodo onSubmit={todoAdd} />
        <FlatList
          style={styles.scroll}
          data={todos}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return <Todo todo={item} onRemove={todoDelete}/>
          }}
          contentContainerStyle={{
            flexGrow: 1,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  scroll: {
    paddingRight: 10
  }
});
