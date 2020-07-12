import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { useRoute } from '@react-navigation/native'

import styles from './style';

export default function InputMatter() {

  const route = useRoute();
  const topic_id = route.params.topic_id;

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Título"
        underlineColorAndroid="transparent"
      />
      
      <TextInput
        placeholder="Resumo"
        underlineColorAndroid="transparent"
      />

      <TextInput
        placeholder="Tags"
        underlineColorAndroid="transparent"
      />
    </View>
  );
};
