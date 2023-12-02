import React, { useState } from 'react';
import {ActivityIndicator, Alert, StyleSheet, Text, View} from 'react-native';
import {CustomInput, CustomButton} from '../components';
import {Navigation} from 'react-native-navigation';
import { reminder } from '../service';

export default function Reminder(props: any) {
  let {item} = props;
  const [titulo, setTitulo] = useState(item.titulo)
  const [descricao, setDescricao] = useState(item.descricao)
  const [carregando, setCarregando] = useState(false)
  return (
    <View style={styles.container}>
      <Text>Lembrete</Text>
      <Text>{titulo}</Text>
      <CustomInput placeholder="Descrição" value={descricao} onTextChange={setDescricao}/>
      <Text>{item.data}</Text>
      <ActivityIndicator animating={carregando} />

      <CustomButton
        title="Atualizar"
        onPress={async () => {
          setCarregando(true)
          await reminder.atualizar({titulo, descricao, data: item.data})
          await Navigation.push(props.componentId, {
            component: {name: 'List'},
          });
          setCarregando(false)
        }}
      />

      <CustomButton title="Deletar" onPress={() => showAlert(props)} />
    </View>
  );
}

const showAlert = (props: any) =>
  Alert.alert(
    'Deletar Lembrete',
    'Deseja deletar este lembrete?',
    [
      {
        text: 'Sim',
        onPress: async () => {
          await reminder.deletar(props.item.titulo)
          await Navigation.push(props.componentId, {
            component: {name: 'List'},
          });
        },
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          'This alert was dismissed by tapping outside of the alert dialog.',
        ),
    },
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    paddingHorizontal: '10%',
  },
  signUp: {
    fontSize: 12,
    fontWeight: '400',
  },
});
