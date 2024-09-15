import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import { useAuth } from '../context/auth';

export default function LoginScreen() {
  const {signIn} = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <View className='justify-center items-center'>
      <Image
        source={require('../../assets/images/icon.png')}
        style={{ 
            width: '50%', 
            height: '50%', 
            resizeMode: 'contain',  
        }} />
        <Text className='text-4xl text-white italic'>CopyCat</Text>
      </View>
        <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={signIn}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={signIn}>
        <Text style={styles.buttonText}>Regístrate</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#aa1155'
  },
  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 6
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
    margin: 6,
    borderRadius: 10
  },
  buttonText: {
    color: '#aa1155',
    fontSize: 16,
  },
});