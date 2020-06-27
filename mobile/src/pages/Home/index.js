import React from 'react';
import { 
  View, 
  TouchableOpacity, 
  TextInput 
} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Feather as Icon } from '@expo/vector-icons';

import styles from './style';

import Studys from '../../components/Studys';

export default function Home() {
  const navigation = useNavigation();

  function handleNavigateToSearchTopic() {
    navigation.navigate('SearchTopic');
  }

  return (
    <View style={styles.container}>
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
          onTouchStart={handleNavigateToSearchTopic}
        />
        
        <TouchableOpacity
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

      <Studys />
    </View>
  );
}
