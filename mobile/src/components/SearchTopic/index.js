import React, { useState, useEffect } from 'react';
import { 
  View, 
  TouchableOpacity, 
  TextInput,
  Text,
} from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import styles from './style';
import api from '../../services/api';

export default function SearchTopic({ handleSelectedInput }) {
  const [findTopic, setFindTopic] = useState('');
  const [findTopics, setFindTopics] = useState([]);
  const [selectedInput, setSelectedInput] = useState(false);

  function handleClearInput() {
    setFindTopic('');
  }

  function handlefindTopic() {
    api.get('/topics/find', {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMzMjJmZDZjIiwibmFtZSI6InRlc3QxIiwiZW1haWwiOiJ0ZXN0MUAiLCJpYXQiOjE1OTA2MjI5MDB9.2vA8PD21i5F5ZQkPztgXOOCv4idU8q4gQvHEyBFt2k8'
      },
      params: {
        name: findTopic
      }
    }).then(res => {
      setFindTopics(res.data);
    })
  }

  function handleNavigateBack() {
    handleSelectedInput(false)
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={handleNavigateBack}
        >
          <Icon 
            name="arrow-left"
            size={20}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
        <TextInput 
          style={styles.input}
          placeholder="Procurar um tópico"
          underlineColorAndroid="transparent"
          onChangeText={(text) => {
            setFindTopic(text);
            setSelectedInput(true);
          }}
          onChange={handlefindTopic}
          value={findTopic}
          autoFocus
        />
        
        <TouchableOpacity
          onPress={handleClearInput}
          activeOpacity={0.6}
        >
          <Icon 
            name="x"
            size={20}
            style={styles.searchIcon}
            color="#808080"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.lineBottom} />

      <View style={styles.groupTopics}>
        {findTopics.map(topic => (
          <>
            <TouchableOpacity 
              key={topic.id} 
              style={styles.topic}
              activeOpacity={0.6}
            >
                <Text style={styles.topicName}>{topic.name}</Text>
                <Icon 
                  name="arrow-right"
                  size={20}
                />
            </TouchableOpacity>
            <View style={styles.lineBottom} />
          </>
        ))}
      </View>
    </View>
  );
}
