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

  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });
  
  async function loadStudys() {
    const res = await api.get('study/all', {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjljYTBlNWNhIiwibmFtZSI6InRlc3QxMzIiLCJlbWFpbCI6InRlc3QzMjFAIiwiaWF0IjoxNTkzNDgzNDE3fQ.nur6JngT0OnJl3GSo036qSyrWGSqri8HDhnm-XmX_ng'
      },
    });

    setStudys(res.data);
  };

  useEffect(() => {
    loadStudys();
  }, []);

  function handleNavigateToMatters(topic_id, topic_name) {
    navigation.navigate('Matters', { topic_id, topic_name });
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
        <Icon name="refresh-ccw" size={30} />
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
              onPress={() => handleNavigateToMatters(study.id, study.topicName)}
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