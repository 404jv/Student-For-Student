import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons'
import { AppLoading } from 'expo';
import { 
  useFonts, 
  Roboto_400Regular, 
  Roboto_700Bold 
} from '@expo-google-fonts/roboto';

import styles from './style';

export default function Home() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.groupTopics}>

        <View style={styles.topic}>
          <Text style={styles.topicTitle}>Topic 1</Text>
          <ScrollView
            style={styles.groupMatter}
            contentContainerStyle={{
              contentContainerStyle: 32
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.matter}>
              <Text style={styles.matterTitle}>Title</Text>
              <Text style={styles.matterTags}>#Study</Text>
            </View>
            <View style={styles.matter}>
              <Text style={styles.matterTitle}>Title</Text>
              <Text style={styles.matterTags}>#Study</Text>
            </View>
            <View style={styles.matter}>
              <Text style={styles.matterTitle}>Title</Text>
              <Text style={styles.matterTags}>#Study</Text>
            </View>
            <View style={styles.matter}>
              <Text style={styles.matterTitle}>Title</Text>
              <Text style={styles.matterTags}>#Study</Text>
            </View>
            <View style={styles.matter}>
              <Text style={styles.matterTitle}>Title</Text>
              <Text style={styles.matterTags}>#Study</Text>
            </View>
            <View style={styles.matter}>
              <Text style={styles.matterTitle}>Title</Text>
              <Text style={styles.matterTags}>#Study</Text>
            </View>
          </ScrollView>
          <TouchableOpacity style={styles.button}>
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
        
        <View style={styles.topic}>
          <Text style={styles.topicTitle}>Topic 1</Text>
          <ScrollView
            style={styles.groupMatter}
            contentContainerStyle={{
              contentContainerStyle: 32
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.matter}>
              <Text style={styles.matterTitle}>Title</Text>
              <Text style={styles.matterTags}>#Study</Text>
            </View>
            <View style={styles.matter}>
              <Text style={styles.matterTitle}>Title</Text>
              <Text style={styles.matterTags}>#Study</Text>
            </View>
            <View style={styles.matter}>
              <Text style={styles.matterTitle}>Title</Text>
              <Text style={styles.matterTags}>#Study</Text>
            </View>
            <View style={styles.matter}>
              <Text style={styles.matterTitle}>Title</Text>
              <Text style={styles.matterTags}>#Study</Text>
            </View>
            <View style={styles.matter}>
              <Text style={styles.matterTitle}>Title</Text>
              <Text style={styles.matterTags}>#Study</Text>
            </View>
            <View style={styles.matter}>
              <Text style={styles.matterTitle}>Title</Text>
              <Text style={styles.matterTags}>#Study</Text>
            </View>
          </ScrollView>
          <TouchableOpacity style={styles.button}>
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
      </View>
    </View>
  );
}
