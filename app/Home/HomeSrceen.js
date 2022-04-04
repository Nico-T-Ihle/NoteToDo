import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Alert, ImageBackground } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { TextInput, TouchableOpacity, FlatList } from 'react-native-gesture-handler';
const COLORS = {primary: '#1f145c', white: '#fff'};
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

import HeaderImageToDO from '../Home/masthead.png';

export function HomeSrceen() {
  const [value, setValue] = useState("");
  const [Add, setAdd] = useState([]);
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  const addTask = () => {
    try 
    {
    if(value == "")
    {
        Alert.alert("Error", "Pleas add a note ")
    }
    else
    {
      console.log(value);
        const newTodo =  {
          id:Math.random(),
          task: value,
          completed: false,
      };
      
      setAdd([...Add,newTodo]);
      setValue('');
    }

    } catch(error) {
        
        console.log(error);
    }   
  };

  const markTodoComplete = todoId => 
  {
      const newTodos = Add.map((item) => {
        if (item.id == todoId) {
          return { ...item, completed: true };
        }
        return item;
      });
      setAdd(newTodos);
  };

  const deleteTodo = (todoId) => 
  {
    if(deleteTodo)
    {
      Alert.alert(
        "Do you want to delete your task?",
        "",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { 
            text: "OK", onPress: () => {
              const newTodo = Add.filter(item => item.id != todoId);
               setAdd(newTodo);
            },
          },
        ]
      );
    } else {
      console.log("error");
    }
  };

  //Show the new Item
  const ListItem = ({todo}) => 
  {
    return (
      <View style={styles.ListItem}>
          <View>
          </View>
          {
              !todo?.completed && 
              (
              <TouchableOpacity onPress={() => markTodoComplete(todo?.id) }  >
               {/* <Icon name='check' size={25} color="white" /> */}
               <CheckBox tintColor={'#007aff'} animationDuration={0.5} value={toggleCheckBox} onValueChange={ () => markTodoComplete(todo?.id) }  style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }} />
              </TouchableOpacity>
              )
          }
          <TouchableOpacity onPress={ () => deleteTodo(todo?.id) } >
          <Text style={{ textDecorationLine: todo?.completed?"line-through" : "none", color: "white", padding: 5, marginLeft: 1, marginTop: 24,}} > {todo?.task} </Text>
          </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{ flex: 1,  backgroundColor: "#282828" }}>
      <ImageBackground style={styles.headerImageToDoApp} source={HeaderImageToDO} >
      <Text style={{color: 'white', fontSize: 25, marginTop: 195, padding: 25, fontWeight: 'bold' }} >Whats your next taks?</Text>
      </ImageBackground>
      <FlatList showsVerticalScrollIndicator={false}  data={Add} renderItem={({item})=> <ListItem todo={item} /> } />
      <View style={styles.TodoTaskBar} >
          <TextInput style={{ color: 'black', backgroundColor: 'white', marginLeft: 30, width: 248, borderRadius:  5, paddingLeft: 20,  }}  placeholderTextColor="#282828" placeholder="Add Todo" value={value} onChangeText={(text)=>setValue(text)} />
            <TouchableOpacity style={styles.AddTaskElement}  onPress={addTask} >
             <Icon color={'#2679f3'} name='add-circle-outline' size={36}></Icon> 
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  headerImageToDoApp: {
    width: '100%',
    height: 270,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },

  TodoTaskBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 50,
  },

  AddTaskElement: { 
    borderRadius: 0,
    marginRight: 30,
    //width: 240,
    // height: 50,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
    
  DeleteIcon: 
  {
    height: 24,
    width: 24, 
    backgroundColor: '#3F3D56',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    borderRadius: 3,
  },

  actionIcon: 
  {
    height: 24,
    width: 24, 
    backgroundColor: '#eaeaea94',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    borderRadius: 3,
  },

  ListItem: 
  {
    // backgroundColor: COLORS.white,
    flexDirection: 'row',
    margin: 3,
    borderRadius: 7,
    // backgroundColor: '#eaeaea94',
    padding: 5,
    marginLeft: 35,
    marginRight: 35,
  },

  header:
  {
      padding: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
  },

  footer: 
  {
    position: 'absolute',
    bottom: 72,
    color: 'black',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    right: 3,
  },  

  inputContainer:
  {
    backgroundColor: COLORS.white,
    elevation: 40,  
    flex: 1,
    height: 50,
    marginVertical: 20,
    marginRight: 20,
    borderRadius: 30,
    paddingHorizontal: 20,
    marginLeft: 30,
  },

  iconContainer:
  {
      height: 50,
      width: 50,
      backgroundColor: 'black',
      borderRadius: 25,
      elevation: 40,
      justifyContent: 'center',
      alignItems: 'center',

  }
})