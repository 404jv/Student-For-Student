import React, { useState, useEffect } from 'react';
import { 
  Text, 
  View, 
  ScrollView, 
  TouchableOpacity, 
  TextInput 
} from 'react-native';
import { Feather as Icon } from '@expo/vector-icons'
import { AppLoading } from 'expo';
import { 
  useFonts, 
  Roboto_400Regular, 
  Roboto_700Bold 
} from '@expo-google-fonts/roboto';

import styles from './style';
import api from '../../services/api';

export default function Home() {
  const [studys, setStudys] = useState([]);
  const [findTopic, setFindTopic] = useState('');
  const [findTopics, setFindTopics] = useState([]);

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });
  
  useEffect(() => {
    api.get('study/all', {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMzMjJmZDZjIiwibmFtZSI6InRlc3QxIiwiZW1haWwiOiJ0ZXN0MUAiLCJpYXQiOjE1OTA2MjI5MDB9.2vA8PD21i5F5ZQkPztgXOOCv4idU8q4gQvHEyBFt2k8'
      },
    }).then(res => {
      setStudys(res.data);
    });
  }, []);

  function handleClearInput() {
    findTopic('');
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

  if (!fontsLoaded)
    return <AppLoading />;

  return (
    <View style={styles.container}>
      <View style={styles.groupTopics}>

        <View style={styles.searchContainer}>
          <Icon 
            name="search"
            size={20}
            style={styles.searchIcon}
          />
          <TextInput 
            style={styles.input}
            placeholder="Procurar um tópico"
            underlineColorAndroid="transparent"
            onChangeText={setFindTopic}
            onChange={handlefindTopic}
            value={findTopic}
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

        {studys.map(study => (
          <View key={study.id} style={study.topic}>
            <Text style={styles.topicTitle}>{study.topicName}</Text>
            <ScrollView
              style={styles.groupMatter}
              contentContainerStyle={{
                contentContainerStyle: 32
              }}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {
                study.matters.length === 0

                ? <View style={[styles.matter, { justifyContent: 'center' }]}>
                    <Icon 
                      name="plus" 
                      size={50}
                    />
                  </View> 
                : study.matters.map(matter => (
                  <TouchableOpacity 
                      key={matter.id} 
                      style={styles.matter}
                      activeOpacity={0.6}
                    >
                      <Text 
                        style={styles.matterTitle}
                      >{matter.title.substring(0, 11)}
                      </Text>
                      <Text 
                        style={styles.matterTags}
                      >{matter.nextStudy}
                      </Text>
                    </TouchableOpacity>
                ))
              }
            </ScrollView>
            <TouchableOpacity 
              style={styles.button}
              activeOpacity={0.6}
            >
              <Text style={styles.textButton}>Ver tudo</Text>
              <Icon 
                name="arrow-right" 
                size={18} 
                color="#0A0B0D"
                style={{
                  marginRight: 8
                }}
              />
            </TouchableOpacity>
          </View>
        ))
      }
      </View>
    </View>
  );
}
