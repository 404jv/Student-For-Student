import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native'
import { Feather as Icon } from '@expo/vector-icons';
import { differenceInDays, parseISO, isAfter } from 'date-fns';

import stylesMatters from '../Matters/style';
import styles from './style';

export default function Detail() {
  const [selectedMore, setSelectedMore] = useState(false);
  const [isToday, setIsToday] = useState(false);
  const [daysDiff, setDaysDiff] = useState(0);

  const route = useRoute();
  const navigation = useNavigation();
  const matter = route.params;

  useEffect(() => {
    setDaysDiff(differenceInDays(parseISO(matter.nextStudy), new Date));

    setIsToday(!isAfter(parseISO(matter.nextStudy), new Date));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon 
          name="arrow-left"
          size={20}
          style={{ right: 116}}
          onPress={() => {}}
        />
        <Text 
          style={styles.matterTitle}
        >{matter.title}</Text>
      </View>
      <View style={styles.lineBottom} />

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
            : <Text>{daysDiff} dias</Text>
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
                <Icon name="arrow-up" size={20} />
              </>
            :
              <>
                <Text style={stylesMatters.textButton}>Ver a resposta</Text>
                <Icon name="arrow-down" size={20} />
              </>
          }
        </TouchableOpacity>
      </View>
      {selectedMore &&
        <View style={styles.verse}>
          <Text style={styles.resume}>{matter.resume}</Text>
        </View>
      }
    </View>
  );
};
