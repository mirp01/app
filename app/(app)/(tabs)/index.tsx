import { useState } from "react";
import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from "react-native";
import Title from "@/components/Title";
import DashboardTasks from "@/components/DashboardTasks";
import {useAuth} from '@/app/context/auth';

export default function Index() {
  const {signOut} = useAuth();
  const [boxVisible, setBoxVisible] = useState(false);
  const [sort, setSort] = useState<'day' | 'week'>('day');

  const tasks = [
    { description: 'Mandar Pull Request', project: 'Servicio Social', date: '2024-09-09T23:00:00Z' },
    { description: 'Revisar comentarios del código', project: 'Servicio Social', date: '2024-09-09T15:00:00Z' },
    { description: 'Actualizar la documentación del proyecto', project: 'Servicio Social', date: '2024-09-09T10:00:00Z' },

    { description: 'Terminar task manager', project: 'HackMTY2024', date: '2024-09-15T23:00:00Z' },
    { description: 'Preparar presentación para el demo', project: 'HackMTY2024', date: '2024-09-15T18:00:00Z' },
    { description: 'Revisar requisitos del proyecto', project: 'HackMTY2024', date: '2024-09-15T14:00:00Z' },

    { description: 'Hacer pruebas de funcionalidad', project: 'HackMTY2024', date: '2024-09-14T16:00:00Z' },
    { description: 'Actualizar el plan de trabajo', project: 'HackMTY2024', date: '2024-09-14T09:00:00Z' },
    { description: 'Preparar reportes de progreso', project: 'HackMTY2024', date: '2024-09-14T11:00:00Z' },

    { description: 'Enviar correos a los participantes', project: 'Servicio Social', date: '2024-09-10T08:00:00Z' },
    { description: 'Organizar reunión de seguimiento', project: 'Servicio Social', date: '2024-09-10T13:00:00Z' },

    { description: 'Revisar progreso del equipo', project: 'HackMTY2024', date: '2024-09-12T17:00:00Z' },
    { description: 'Revisar entregables', project: 'HackMTY2024', date: '2024-09-12T09:00:00Z' },

    { description: 'Coordinar con el equipo de diseño', project: 'HackMTY2024', date: '2024-09-11T14:00:00Z' },
    { description: 'Actualizar el prototipo', project: 'HackMTY2024', date: '2024-09-11T10:00:00Z' },
];


  const handleOpenBox = () => {
      setBoxVisible(!boxVisible);
  };

  const handlePressWeek = () => {
      setSort('week');
      setBoxVisible(false);
  };

  const handlePressDay = () => {
      setSort('day');
      setBoxVisible(false);
  };

  return (
      <View className="flex-1 items-center bg-white p-4">
          <View className="w-full">
          <Title label={`Tareas de ${sort === 'day' ? 'hoy' : 'la semana'}`} color="main" />

              <ScrollView>
                  <DashboardTasks tasks={tasks} sort={sort} />
              </ScrollView>
          </View>
          <View className="absolute bottom-4 right-6">
              <TouchableOpacity
                  style={styles.button}
                  onPress={handleOpenBox}
              >
                  <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
              {boxVisible && (
                  <>
                      <TouchableOpacity
                          style={styles.box}
                          onPress={handlePressWeek}
                      >
                          <Text style={styles.boxText}>Ver por semana</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                          style={[styles.box, { bottom: 140 }]}
                          onPress={handlePressDay}
                      >
                          <Text style={styles.boxText}>Ver por día</Text>
                      </TouchableOpacity>
                  </>
              )}
          </View>
          
      </View>
  );
}


const styles = StyleSheet.create({
  button: {
      width: 60,
      height: 60,
      borderColor: '#000',
      borderWidth: 2,
      borderRadius: 30,
      backgroundColor: '#dd1155',
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 6,
  },
  buttonText: {
      color: 'black',
      fontSize: 18,
  },
  buttonSO: {
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
  },
buttonTextSO: {
  color: '#aa1155',
  fontSize: 16,
},
  box: {
      position: 'absolute',
      bottom: 70,
      right: 0,
      width: 150,
      height: 60,
      borderColor: '#000',
      borderWidth: 2,
      borderRadius: 8,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 6,
  },
  boxText: {
      fontSize: 14,
      color: '#333',
  },
});