import React from 'react';
import {StyleSheet, View, Pressable, Text} from 'react-native';

export default function CustomButton({title = '', onPress = () => {}}) {
  return (
    <View>
      <Pressable
        onPress={onPress}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.button,
        ]}>
        {({}) => <Text style={styles.text}>{title}</Text>}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
  button: {
    borderRadius: 8,
    padding: 10,
    paddingHorizontal: 20,
    elevation: 1,
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
  },
});
