import React, { useState, useEffect } from 'react';
import { 
  View, 
  TouchableOpacity, 
  TextInput,
  Text,
  Image,
  FlatList
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
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ2NDg3ZjY4IiwibmFtZSI6InRlc3QxMiIsImVtYWlsIjoidGVzdDIxQCIsImlhdCI6MTU5MzEzNDg5NX0.AdITwp9woCIbS1CBZl2nGPiSxRPk4fO6P-6pVGo3nNU'
      },
      params: {
        name: findTopic
      }
    }).then(res => {
      setFindTopics(res.data);
    })
  }

  function handleNavigateBack() {
    handleSelectedInput(false);
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

      <FlatList 
        data={findTopics}
        style={styles.groupTopics}
        keyExtractor={topic => String(topic.id)}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.2}
        renderItem={({ item: topic }) => (
          <View style={styles.topic}>
            <TouchableOpacity 
              activeOpacity={0.6}
            >
              <Image 
                source={require('./uploads/art.jpg')}
                style={styles.topicImage}
              />
              <View style={styles.topicInfo}>
              <Text style={styles.topicName}>{topic.name}</Text>
                <Icon 
                  name="arrow-right"
                  size={20}
                  style={styles.button}
                />
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
