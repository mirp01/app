import React, { useState, useEffect } from "react";
import { Text, View, ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";
import Title from "@/components/Title";
import {useAuth} from '@/app/context/auth';

export default function Perfil() {
  const {signOut} = useAuth();
  const [name, setName] = useState("");

  // Simulate fetching data from a database
  useEffect(() => {
    const fetchName = () => {
      setName("Name"); // Set a dummy name
    };

    fetchName();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Title label="Mi cuenta" color="lighter" />
        <View style={styles.center}>
          {name ? (
            <>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.name}>_______________</Text>
              <Text style={styles.editButton}>Editar tiempos disponibles</Text>
            </>
          ) : (
            <ActivityIndicator size="large" color="#0000ff" />
          )}
        </View>
      </View>
      <TouchableOpacity style={styles.buttonSO} onPress={signOut}>
                <Text style={styles.buttonTextSO}>Cerrar Sesión</Text>
            </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
    alignItems: "center",
  },
  content: {
    width: "100%",
  },
  center: {
    justifyContent: "center",
    height: "80%",
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    color: '#aa1155',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  editButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#30D5C8',
    padding: 10,
    borderRadius: 8,
    textAlign: 'center',
    marginTop: 10,
  },
});
