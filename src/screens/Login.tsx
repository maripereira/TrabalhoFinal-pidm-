import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { CustomInput, CustomButton } from '../components';
import { Navigation } from 'react-native-navigation';
import { user } from '../service';



export default function Login(props: any) {
  let [login, setLogin] = useState("");
  let [senha, setSenha] = useState("");
  let [carregando, setCarregando] = useState(false);
  return (
    <View style={styles.container}>
      <Text>Entrar</Text>
      <CustomInput placeholder="Login" value={login} onTextChange={setLogin} />
      <CustomInput
        placeholder="Senha"
        password={true}
        onTextChange={setSenha}
        value={senha}
      />
      <CustomButton
        title="Entrar"
        onPress={() => {

          // setCarregando(true)
          // let resp = await user.login(login, senha);
          // setCarregando(false)
          // setLogin('')
          // setSenha('')
          // if (resp)
          try {
            Navigation.push(props.componentId, {
             component: { name: 'List' },
           });
          } catch (error) {
            console.log(error)
          }
}}
      />
      <Text
        style={styles.signUp}
        onPress={async () => {
          await Navigation.push(props.componentId, {
            component: { name: 'Signup' },
          });
        }}>
        Cadastre-se
      </Text>
      <ActivityIndicator animating={carregando} />
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
