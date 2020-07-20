import React, { useState } from 'react';
import { 
  View, 
  TouchableOpacity, 
  TextInput,
  Text,
  Image,
  FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Feather as Icon } from '@expo/vector-icons';

import styles from './style';
import api from '../../services/api';

export default function SearchTopic() {
  const [findTopic, setFindTopic] = useState('');
  const [findTopics, setFindTopics] = useState([]);

  const navigation = useNavigation();

  function handleClearInput() {
    setFindTopic('');
  }

  function handlefindTopic() {
    api.get('/topics/find', {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjljYTBlNWNhIiwibmFtZSI6InRlc3QxMzIiLCJlbWFpbCI6InRlc3QzMjFAIiwiaWF0IjoxNTkzMTQwNzg1fQ.gl1AJJC5UrqzErwjRW2Y0ObrpjqI3oCB1gs7Joxrm60'
      },
      params: {
        name: findTopic
      }
    }).then(res => {
      setFindTopics(res.data);
    })
  }

  function handleNavigateBack() {
    navigation.goBack('Home')
  }
  
  function handleNavigateToMatters(topic_id, topic_name) {
    navigation.navigate('Matters', { topic_id, topic_name });
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
          onChangeText={setFindTopic}
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

      <FlatList 
        data={findTopics}
        keyExtractor={topic => String(topic.id)}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.2}
        contentContainerStyle={{
          alignItems: 'center'
        }}
        renderItem={({ item: topic }) => (
          <View style={styles.topic}>
            <TouchableOpacity 
              activeOpacity={0.6}
              onPress={() => handleNavigateToMatters(topic.id, topic.name)}
            >
              <Image 
                source={{ uri: topic.image_url}}
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
