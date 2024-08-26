import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState(null);
  
  const validateInput = () => {
    if (isNaN(number1) || isNaN(number2)) {
      Alert.alert('Invalid input', 'Please enter valid numbers.');
      return false;
    }
    return true;
  };

  const handleAdd = () => {
    if (!validateInput()) return;
    setResult(parseFloat(number1) + parseFloat(number2));
  };

  const handleSubtract = () => {
    if (!validateInput()) return;
    setResult(parseFloat(number1) - parseFloat(number2));
  };

  const handleMultiply = () => {
    if (!validateInput()) return;
    setResult(parseFloat(number1) * parseFloat(number2));
  };

  const handleDivide = () => {
    if (!validateInput()) return;
    if (parseFloat(number2) === 0) {
      Alert.alert('Error', 'Division by zero is not allowed.');
      return;
    }
    setResult(parseFloat(number1) / parseFloat(number2));
  };

  const handlePower = () => {
    if (!validateInput()) return;
    setResult(Math.pow(parseFloat(number1), parseFloat(number2)));
  };

  const handleSquareRoot = () => {
    if (!validateInput()) return;
    if (parseFloat(number1) < 0) {
      Alert.alert('Error', 'Cannot calculate the square root of a negative number.');
      return;
    }
    setResult(Math.sqrt(parseFloat(number1)));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Simple Calculator</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter first number"
        value={number1}
        onChangeText={text => setNumber1(text)}
      />

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter second number"
        value={number2}
        onChangeText={text => setNumber2(text)}
      />

      <View style={styles.buttonRow}>
        <Button title="Add" onPress={handleAdd} />
        <Button title="Subtract" onPress={handleSubtract} />
      </View>

      <View style={styles.buttonRow}>
        <Button title="Multiply" onPress={handleMultiply} />
        <Button title="Divide" onPress={handleDivide} />
      </View>

      <View style={styles.buttonRow}>
        <Button title="Power Of" onPress={handlePower} />
        <Button title="Square Root" onPress={handleSquareRoot} />
      </View>

      {result !== null && (
        <Text style={styles.result}>Result: {result}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    fontSize: 18,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  result: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 20,
  },
});
