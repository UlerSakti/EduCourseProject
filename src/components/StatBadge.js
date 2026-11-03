import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

export default function StatBadge({ label, count, onPress }) {
  return (
    <View style={styles.badgeContainer}>
      <Text style={styles.countText}>{count} Peminat</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  badgeContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f0f0f0', padding: 12, borderRadius: 8 },
  countText: { fontSize: 16, fontWeight: '600' },
  button: { backgroundColor: '#007bff', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 4 },
  buttonText: { color: '#fff', fontWeight: 'bold' }
});