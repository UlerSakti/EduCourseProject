import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ModuleItemCard({ moduleTitle, duration, topicTag }) {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.title}>{moduleTitle}</Text>
      <Text style={styles.details}>{duration} • {topicTag}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: { borderBottomWidth: 1, borderBottomColor: '#eee', paddingVertical: 12 },
  title: { fontSize: 16, fontWeight: '500' },
  details: { fontSize: 12, color: '#888', marginTop: 4 }
});