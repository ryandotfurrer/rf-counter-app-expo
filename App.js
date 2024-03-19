import { StatusBar } from 'expo-status-bar';
import { Pressable, Button, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';

const App= () => {
  const [count, setCount] = useState(0);

  const subtractOne = () => {
    setCount(count - 1);
    // console.log(count);
  }
  const addOne = () => {
    setCount(count + 1);
    // console.log(count);
  }
  return (
    <View style={styles.container}>
      <Pressable 
        onPress={subtractOne}
        aria-label='Subtract One from Count' 
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#DD92AA' : '#F0D1DB',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          },
          styles.wrapperCustom,
        ]}>
        <Text style={styles.buttonText}>-1</Text>
      </Pressable>
    <View style={styles.container2}>
      <Text style={styles.count}>{count}</Text>
      </View>
      <Pressable 
        onPress={addOne}
        aria-label='Subtract One from Count' 
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#80ED99' : '#C8F9CD',
            flex: 1,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          },
          styles.wrapperCustom,
        ]}>
        <Text style={styles.buttonText}>+1</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: 'rgba(0,0,0,1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    // padding: 16,
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.25)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 6,
    margin: 16,
    width: '100%',
  },
  bodyText: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.95)',
  },
  count: {
    fontSize: 48,
    color: 'rgba(255,255,255,0.95)',
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  buttonText: {
    fontSize: 48,}
});

export default App;