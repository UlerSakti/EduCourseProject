/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import CourseHeader from './src/components/CourseHeader';
import StatBadge from './src/components/StatBadge';
import ModuleItemCard from './src/components/ModuleItemCard';

export default function App() {
  const [participantCount, setParticipantCount] = useState(0);
  const [modules, setModules] = useState([]);
  const [moduleInput, setModuleInput] = useState('');

  const handleJoinClass = () => {
    setParticipantCount(prevCount => prevCount + 1);
  };

  const handleAddModule = () => {
    if (moduleInput.trim() !== '') {
      const newModule = {
        id: Date.now().toString(),
        moduleTitle: moduleInput,
        duration: 'TBD',
        topicTag: 'Fundamental'
      };
      setModules(prevModules => [...prevModules, newModule]);
      setModuleInput('');
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <CourseHeader 
          courseTitle="React Native Mobile Dev" 
          instructorName="Asisten Dosen" 
          level="Beginner" 
          thumbnailUrl="https://reactnative.dev/img/tiny_logo.png" 
        />
      <StatBadge 
        label="Daftar Minat" 
        count={participantCount} 
        onPress={handleJoinClass} 
      />
      
      <View style={styles.formContainer}>
        <TextInput 
          style={styles.input} 
          placeholder="Judul Modul Baru" 
          value={moduleInput}
          onChangeText={setModuleInput}
        />
        <Button title="Tambah Modul" onPress={handleAddModule} />
      </View>

      <FlatList 
        data={modules}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ModuleItemCard 
            moduleTitle={item.moduleTitle} 
            duration={item.duration} 
            topicTag={item.topicTag} 
          />
        )}
      />
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16, 
    backgroundColor: '#fff' 
  },
  formContainer: { 
    marginVertical: 16, 
    flexDirection: 'row', 
    gap: 8,
    alignItems: 'center'
  },
  input: { 
    flex: 1, 
    borderWidth: 1, 
    borderColor: '#ccc', 
    padding: 8, 
    borderRadius: 6 
  }
});