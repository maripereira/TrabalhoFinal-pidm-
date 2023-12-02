/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

export default function CustomInput({
  placeholder = '',
  customStyle = null,
  password = false,
  value= '',
  onTextChange = (text: string) => {},
}) {
  return (
    <View style={styles.view}>
      <TextInput
        value={value}
        style={customStyle ?? styles.input}
        placeholder={placeholder}
        secureTextEntry={password}
        onChangeText={onTextChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    padding: 5,
    paddingLeft: 10,
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
  },
});
