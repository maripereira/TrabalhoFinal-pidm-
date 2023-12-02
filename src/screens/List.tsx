import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Pressable, ActivityIndicator } from 'react-native';
import { Navigation } from 'react-native-navigation';
import CustomButton from '../components/custom-button';
import { reminder } from '../service';

export default function List(props: any) {
  let [data, setData] = useState<any[]>([])
  useEffect(() => {
    (async ()=> {
      setData(await reminder.listar()) 
    })()

  }, [])
  return (
    <View style={styles.container}>
      <Text>Lembretes</Text>
      <CustomButton
        title="Adicionar"
        onPress={() => {
          Navigation.push(props.componentId, {
            component: { name: 'Create' },
          });
        }}
      />
      <ActivityIndicator animating={data.length == 0} />
      <FlatList
        style={styles.list}
        data={data}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              Navigation.push(props.componentId, {
                component: { name: 'Reminder', passProps: { item } },
              });
            }}>
            <View style={styles.item}>
              <View style={styles.header}>
                <Text style={styles.title}>{item.titulo}</Text>
                <View style={styles.dataContainer}>
                  <Text style={styles.data}>
                    {item.data}
                  </Text>
                </View>
              </View>
              <Text>{item.descricao}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
  dataContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 4,
  },
  title: {
    fontSize: 8,
  },
  item: {
    backgroundColor: '#fffff1',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    borderColor: 'black',
    borderWidth: StyleSheet.hairlineWidth,
  },
  data: {
    fontSize: 8,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }, 
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#eef',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    paddingHorizontal: '15%',
  },
});
