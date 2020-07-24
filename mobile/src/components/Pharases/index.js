import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Pharases() {
  const [numberPharase, setNumberPharase] = useState(0);
  
  const pharases = [
    '"O aprendizado é conhecimento, e conhecimento é liberdade e poder." - Altaïr',
    '"Os investimentos em conhecimento geram os melhores dividendos" - Benjamin Franklin',
    '"Lembre-se que as pessoas podem tirar tudo de você menos o seu conhecimento" - Albert Einstein',
    '"Na ciência temos de nos interessar pelas coisas e não pelas pessoas." - Marie Curie',
  ];

  useEffect(() => {
    setNumberPharase(Math.floor(Math.random() * pharases.length));
  }, []);
  return (
    <View>
      <Text style={styles.headerText}>{pharases[numberPharase]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    textAlign: 'center',
    color: '#C8C8C8',
    fontSize: 14,
  },
});