import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native'
import { Feather as Icon } from '@expo/vector-icons';

import styles from './style';



export default function InputMatter() {

  const navigation = useNavigation();
  const route = useRoute();
  const topic_id = route.params.topic_id;
  const pharases = [
    '"O aprendizado é conhecimento, e conhecimento é liberdade e poder." - Altaïr',
    '"Os investimentos em conhecimento geram os melhores dividendos" - Benjamin Franklin',
    '"Lembre-se que as pessoas podem tirar tudo de você menos o seu conhecimento" - Albert Einstein',
    '"Na ciência temos de nos interessar pelas coisas e não pelas pessoas." - Marie Curie',
  ];
  const numberPharase = Math.floor(Math.random() * pharases.length);

  function handleNavigationBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon 
          name="arrow-left"
          size={20}
          style={{ right: '44%', top: 20 }}
          onPress={handleNavigationBack}
        />
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
        style={styles.input}
      />
      
      <TextInput
        placeholder="Resumo"
        underlineColorAndroid="transparent"
        style={styles.input}
      />

      <TextInput
        placeholder="Tags"
        underlineColorAndroid="transparent"
        style={styles.input}
      />

      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.button}
      >
        <Text style={styles.textButton}>Criar</Text>
      </TouchableOpacity>
    </View>
  );
};
