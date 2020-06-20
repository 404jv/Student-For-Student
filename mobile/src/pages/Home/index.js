import React, { useState, useEffect } from 'react';
import { 
  View, 
  TouchableOpacity, 
  TextInput 
} from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import styles from './style';

import Studys from '../../components/Studys';
import SearchTopic from '../../components/SearchTopic';

export default function Home() {
  const [selectedInput, setSelectedInput] = useState(false);

  return (
    <View style={styles.container}>
      {selectedInput
        ? <SearchTopic handleSelectedInput={setSelectedInput} />
        : <>
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
                onTouchStart={() => setSelectedInput(true)}
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
         </>
      }
    </View>
  );
}
