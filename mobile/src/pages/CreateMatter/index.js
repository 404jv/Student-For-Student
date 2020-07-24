import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native'
import { Feather as Icon } from '@expo/vector-icons';

import api from '../../services/api';

import styles from './style';

export default function InputMatter() {
  const [title, setTitle] = useState('');
  const [resume, setResume] = useState('');
  const [tags, setTags] = useState('');


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

  function handleSubmit() {
    api.post(`/matters?topic_id=${topic_id}`, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjljYTBlNWNhIiwibmFtZSI6InRlc3QxMzIiLCJlbWFpbCI6InRlc3QzMjFAIiwiaWF0IjoxNTkzMTQwNzg1fQ.gl1AJJC5UrqzErwjRW2Y0ObrpjqI3oCB1gs7Joxrm60'
      },

      title: title,
      resume: resume,
      tags: tags,
    }).catch(err => console.log(err));
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon 
          name="arrow-left"
          size={24}
          color="#C8C8C8"
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
            color="#FFF"
            size={40}
          />
        </View>
        <Text style={styles.headerTitle}>Continue aprendendo!</Text>
        <Text style={styles.headerText}>{pharases[numberPharase]}</Text>
      </View>
      <TextInput
        placeholder="Título"
        placeholderTextColor="#C8C8C8"
        underlineColorAndroid="transparent"
        style={styles.input}
        onChangeText={setTitle}
      />
      
      <TextInput
        placeholder="Resumo"
        placeholderTextColor="#C8C8C8"
        underlineColorAndroid="transparent"
        style={styles.input}
        onChangeText={setResume}
      />

      <TextInput
        placeholder="Tags"
        placeholderTextColor="#C8C8C8"
        underlineColorAndroid="transparent"
        style={styles.input}
        onChangeText={setTags}
      />

      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.button}
        onPress={handleSubmit}
      >
        <Text style={styles.textButton}>Criar</Text>
      </TouchableOpacity>
    </View>
  );
};
