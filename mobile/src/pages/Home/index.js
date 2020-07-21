import React from 'react';
import { 
  View, 
  TouchableOpacity, 
  TextInput,
  Text,
  StatusBar
} from 'react-native';
import { AppLoading } from 'expo';
import { 
  useFonts, 
  Roboto_400Regular, 
  Roboto_700Bold 
} from '@expo-google-fonts/roboto';
import { useNavigation } from '@react-navigation/native'
import { Feather as Icon } from '@expo/vector-icons';

import styles from './style';

import Studys from '../../components/Studys';

export default function Home() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });
  const navigation = useNavigation();

  function handleNavigateToSearchTopic() {
    navigation.navigate('SearchTopic');
  }
  
  if (!fontsLoaded)
    return <AppLoading />;

  return (
    <View style={styles.container}>
      <StatusBar 
        backgroundColor="#121212"
      />
      <View 
        style={styles.searchContainer} 
        onTouchStart={handleNavigateToSearchTopic}
      >
        <Icon 
          name="search"
          size={20}
          color="#C8C8C8"
          style={styles.searchIcon}
        />
        <View 
          placeholder=""
          underlineColorAndroid="transparent"
          onPress={handleNavigateToSearchTopic}
        >
          <Text style={styles.textInput}>Procurar um tópico</Text>
        </View>
      </View>
      <Studys />
    </View>
  );
}
