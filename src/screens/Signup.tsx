import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CustomInput, CustomButton} from '../components';
import {Navigation} from 'react-native-navigation';

export default function Singup(props: any) {
  return (
    <View style={styles.container}>
      <Text>Cadastro</Text>
      <CustomInput placeholder="Login" />
      <CustomInput placeholder="Senha" />
      <CustomButton
        title="Cadastrar"
        onPress={
          //TODO Fazer cadastro na nuvem
          async () => {
            Navigation.push(props.componentId, {
              component: {name: 'Login'},
            });
          }
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    paddingHorizontal: '15%',
  },
  signUp: {
    fontSize: 12,
    fontWeight: '400',
  },
});
