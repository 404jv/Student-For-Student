import React from 'react';
import { 
  Text, 
  View, 
  ScrollView, 
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import styles from './style';

export default function Matter() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: 'center'
        }}
      >
        <View style={styles.matter}>
          <Text style={styles.title}>Title</Text>
          
          <Text style={styles.strong}>Próxima revisão:</Text>
          <Text style={styles.span}>25/06/2020</Text>

          <View style={styles.reviewGroup}>
            <Text style={styles.strong}>Total de Revisões: </Text>
            <Text style={styles.spanReview}>4</Text>
          </View>

          <Text style={styles.tags}>Tags #Study</Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Estudar</Text>
            <Icon name="arrow-right" size={20} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
