import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { useRoute } from '@react-navigation/native'
import { Feather as Icon } from '@expo/vector-icons';

import styles from './style';



export default function InputMatter() {

  const route = useRoute();
  const topic_id = route.params.topic_id;
  const pharases = [
    '"O aprendizado é conhecimento, e conhecimento é liberdade e poder." - Altaïr',
    '"Os investimentos em conhecimento geram os melhores dividendos" - Benjamin Franklin',
    '"Lembre-se que as pessoas podem tirar tudo de você menos o seu conhecimento" - Albert Einstein',
    '"Na ciência temos de nos interessar pelas coisas e não pelas pessoas." - Marie Curie',
  ];
  const numberPharase = Math.floor(Math.random() * pharases.length);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View 
          style={styles.iconContainer}
          activeOpacity={0.6}
          onPress={() => handleNavigateToCreateMatter(study.id)}
        >
          <Icon 
            name="book"
            size={40}
          />
        </View>
        <Text style={styles.headerTitle}>Continue aprendendo!</Text>
        <Text style={styles.headerText}>{pharases[numberPharase]}</Text>
      </View>
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
