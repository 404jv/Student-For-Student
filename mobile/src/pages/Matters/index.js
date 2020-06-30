import React, { useEffect, useState } from 'react';
import { 
  Text, 
  View, 
  ScrollView, 
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useRoute } from '@react-navigation/native'
import { Feather as Icon } from '@expo/vector-icons';

import api from '../../services/api';

import styles from './style';

export default function Matter() {
  const [matters, setMatters] = useState([]);
  const route = useRoute();

  const topic_id = route.params.topic_id;

  useEffect(() => {
    api.get('matters', {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjljYTBlNWNhIiwibmFtZSI6InRlc3QxMzIiLCJlbWFpbCI6InRlc3QzMjFAIiwiaWF0IjoxNTkzMTQwNzg1fQ.gl1AJJC5UrqzErwjRW2Y0ObrpjqI3oCB1gs7Joxrm60'
      },
      params: {
        topic_id: topic_id
      },
    }).then(res => {
      setMatters(res.data);
    });
  }, []);
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: 'center'
        }}
      >
        {matters.map(matter => (
          <View 
            key={matter.id} 
            style={styles.matter}
          >
            <Text style={styles.title}>{matter.title}</Text>
            
            <Text style={styles.strong}>Próxima revisão:</Text>
            <Text style={styles.span}>{matter.nextStudy}</Text>

            <View style={styles.reviewGroup}>
              <Text style={styles.strong}>Total de Revisões: </Text>
              <Text style={styles.spanReview}>{matter.totRevisions}</Text>
            </View>

            <Text style={styles.tags}>{matter.tags}</Text>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>Estudar</Text>
              <Icon name="arrow-right" size={20} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
