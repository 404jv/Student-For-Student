import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native'
import { Feather as Icon } from '@expo/vector-icons';
import { differenceInDays, parseISO, isAfter } from 'date-fns';

import stylesMatters from '../Matters/style';
import styles from './style';

import api from '../../services/api';

export default function Detail() {
  const [matter, setMatter] = useState({})
  const [selectedMore, setSelectedMore] = useState(false);
  const [isToday, setIsToday] = useState(false);
  const [daysDiff, setDaysDiff] = useState(0);

  const route = useRoute();
  const navigation = useNavigation();
  const matterParams = route.params;
  
  useEffect(() => {
    setMatter(matterParams);
  }, []);

  useEffect(() => {
    setDaysDiff(differenceInDays(parseISO(matter.nextStudy), new Date));

    setIsToday(!isAfter(parseISO(matter.nextStudy), new Date));
  }, [matter]);

  function handleNavigationBack() {
    navigation.goBack();
  }

  function handleCompleteStudy(id) {
    api.get(`/study/${id}`, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjljYTBlNWNhIiwibmFtZSI6InRlc3QxMzIiLCJlbWFpbCI6InRlc3QzMjFAIiwiaWF0IjoxNTkzMTQwNzg1fQ.gl1AJJC5UrqzErwjRW2Y0ObrpjqI3oCB1gs7Joxrm60'
      },
    })
      .then(res => {
        setMatter(res.data);
        console.log(res.data)
      });
  }

  return (
    <View style={styles.container}>
      <Icon 
        name="arrow-left"
        size={24}
        color="#C8C8C8"
        onPress={handleNavigationBack}
        style={{ marginLeft: 8, top: -15 }}
      />

      <View 
        style={styles.matter}
      >
        
        <Text 
          style={[
            stylesMatters.strong, 
            { marginLeft: 8}
          ]}
        > Sobre: 
        </Text>
        <Text style={[stylesMatters.span, styles.span]}>{matter.title}</Text>
        
        <Text style={[stylesMatters.strong, { marginLeft: 8}]}>Próxima revisão:</Text>
        <Text 
          style={[stylesMatters.span, styles.span]
        }>
          {isToday 
            ? <Text>Hoje</Text>
            : daysDiff !== 0 ? <Text>{daysDiff} dias</Text> : <Text>Amanhã</Text>
          } 
        </Text>

        <View style={stylesMatters.reviewGroup}>
          <Text style={[stylesMatters.strong, { marginLeft: 8}]}>Total de revisões: </Text>
          <Text style={stylesMatters.spanReview}>{matter.totRevisions}</Text>
        </View>

        <Text style={stylesMatters.tags}>{matter.tags}</Text>

        <TouchableOpacity 
          style={[stylesMatters.button, styles.button]}
          onPress={() => setSelectedMore(!selectedMore)}
        >
          
          {selectedMore
            ?
              <>
                <Text style={stylesMatters.textButton}>Esconder a resposta</Text>
                <Icon name="arrow-up" color="#C8C8C8" size={20} />
              </>
            :
              <>
                <Text style={stylesMatters.textButton}>Ver a resposta</Text>
                <Icon name="arrow-down" color="#C8C8C8" size={20} />
              </>
          }
        </TouchableOpacity>
      </View>
      {selectedMore &&
        <View style={styles.verse}>
          <Text style={[stylesMatters.span, styles.span]}>{matter.resume}</Text>
          {isToday && 
            <TouchableOpacity
              style={styles.buttonRev}
              activeOpacity={0.5}
              onPress={() => handleCompleteStudy(matter.id)}
            >
              <Text style={styles.textButton}>Revisado</Text>
            </TouchableOpacity>
          }
        </View>
      }
    </View>
  );
};
