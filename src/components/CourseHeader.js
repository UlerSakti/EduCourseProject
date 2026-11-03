import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function CourseHeader({ courseTitle, instructorName, level, thumbnailUrl }) {
  return (
    <View style={styles.headerContainer}>
      <Image source={{ uri: thumbnailUrl }} style={styles.thumbnail} />
      <Text style={styles.title}>{courseTitle}</Text>
      <Text style={styles.subtitle}>{instructorName} • {level}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: { marginBottom: 16, alignItems: 'center' },
  thumbnail: { width: 100, height: 100, borderRadius: 8, marginBottom: 8 },
  title: { fontSize: 20, fontWeight: 'bold' },
  subtitle: { fontSize: 14, color: '#666' }
});