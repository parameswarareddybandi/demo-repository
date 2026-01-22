import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import GreetUser from './GreetUser';

export default function App() {
  const [name, setName] = useState('');
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TextInput placeholder=' Enter User Name ' value={name} onChangeText={(text) => setName(text)} />
      <GreetUser name={name} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
