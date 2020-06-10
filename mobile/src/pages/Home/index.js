import React from 'react';
import { Text, View, ScrollView } from 'react-native';

import styles from './style';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.groupTopics}>

        <View style={styles.topic}>
          <Text style={styles.topicTitle}>Topic 1</Text>
          <ScrollView 
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
          </ScrollView>
        </View>

      </View>
    </View>
  );
}
