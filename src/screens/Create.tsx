import React, { useState } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { CustomInput, CustomButton } from '../components';
import { reminder } from '../service';
import { Navigation } from 'react-native-navigation';

export default function Create(props: any) {
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [data, setData] = useState('')
  const [carregando, setCarregando] = useState(false)

  return (
    <View style={styles.view}>
      <Text>Cadastrar</Text>
      <CustomInput placeholder="Titulo" value={titulo} onTextChange={setTitulo} />
      <CustomInput placeholder="Descricao" value={descricao} onTextChange={setDescricao} />
      <CustomInput placeholder="Data do lembrete" value={data} onTextChange={setData} />
      <ActivityIndicator animating={carregando} />
      <CustomButton title="Salvar" onPress={async () => {
        setCarregando(true)
        await reminder.salvar({
          titulo,
          descricao,
          data
        })
        setCarregando(false)
        Navigation.push(props.componentId, {
          component: { name: 'List' },
        })
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    padding: 20,
    gap: 10,
  },
});
