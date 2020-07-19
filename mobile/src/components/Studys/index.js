import React, { useState, useEffect } from 'react';
import { 
  Text, 
  View, 
  ScrollView, 
  TouchableOpacity, 
} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Feather as Icon } from '@expo/vector-icons';
import { AppLoading } from 'expo';
import { 
  useFonts, 
  Roboto_400Regular, 
  Roboto_700Bold 
} from '@expo-google-fonts/roboto';

import styles from './style';
import api from '../../services/api';

export default function Studys() {
  const [studys, setStudys] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });
  
  async function loadStudys() {
    if (loading) 
      return;
    
    setLoading(true);

    const res = await api.get('study/all', {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjljYTBlNWNhIiwibmFtZSI6InRlc3QxMzIiLCJlbWFpbCI6InRlc3QzMjFAIiwiaWF0IjoxNTkzNDgzNDE3fQ.nur6JngT0OnJl3GSo036qSyrWGSqri8HDhnm-XmX_ng'
      },
    });

    setLoading(false);
    setStudys(res.data);
  };

  useEffect(() => {
    loadStudys();
  }, []);

  function handleNavigateToMatters(topic_id, topic_name) {
    navigation.navigate('Matters', { topic_id, topic_name });
  }

  function handleNavigateToDetail(matter) {
    navigation.navigate('Detail',  matter);
  }
  
  function handleNavigateToCreateMatter(topic_id) {
    navigation.navigate('CreateMatter', { topic_id })
  }

  if (!fontsLoaded)
    return <AppLoading />;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={loadStudys}
        activeOpacity={0.6}
        style={{
          marginLeft: 10,
          marginBottom: 8,
          left: '85%'
        }}
      >
        <Icon name="refresh-ccw" color="#1DBA54" size={30} />
      </TouchableOpacity>
      <View>
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
            {study.matters.map(matter => (
              <TouchableOpacity 
                key={matter.id} 
                style={styles.matter}
                activeOpacity={0.6}
                onPress={() => handleNavigateToDetail(matter)}
              >
                <Text 
                  style={styles.matterTitle}
                >{matter.title.substring(0, 9)}
                </Text>
                <Text 
                  style={styles.nextStudy}
                >{matter.dateFormat}
                </Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity 
              style={styles.matter}
              activeOpacity={0.6}
              onPress={() => handleNavigateToCreateMatter(study.id)}
            >
              <Icon
                style={styles.iconAdd}
                name="book"
                color="#121212"
                size={45}
                color="#FFF"
              />
              <Icon 
                  name="plus"
                  size={20}
                  style={styles.iconPlus}
                  color="#FFF"
              />
            </TouchableOpacity>
            </ScrollView>
            <TouchableOpacity 
              style={styles.button}
              activeOpacity={0.6}
              onPress={() => handleNavigateToMatters(study.id, study.topicName)}
            >
              <Text style={styles.textButton}>Ver tudo</Text>
              <Icon 
                name="arrow-right" 
                size={18} 
                color="#FFFF"
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