import { Text, View, ScrollView, TouchableOpacity, Modal, Button } from "react-native";
import Title from "@/components/Title";
import { Collapsible } from '@/components/Collapsible';
import React, { useState } from 'react';

const tasks = [
    { description: 'Mandar Pull Request', project: 'Servicio Social', date: '2024-09-09T23:00:00Z', horas: 1 },
    { description: 'Revisar comentarios del código', project: 'Servicio Social', date: '2024-09-09T15:00:00Z', horas: 2 },
    { description: 'Actualizar la documentación del proyecto', project: 'Servicio Social', date: '2024-09-09T10:00:00Z', horas: 3 },
    { description: 'Terminar task manager', project: 'HackMTY2024', date: '2024-09-15T23:00:00Z', horas: 1 },
];

const groupTasksByProject = (tasks) => {
    return tasks.reduce((acc, task) => {
        (acc[task.project] = acc[task.project] || []).push(task);
        return acc;
    }, {});
};

export default function Edita() {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);
    const groupedTasks = groupTasksByProject(tasks);
    const [taskHoras, settaskHoras] = useState(tasks.map(task => task.horas));

    const openModal = (task, index) => {
        setSelectedTask({ task, index });
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedTask(null);
    };

    // const deleteTask = (taskIndex) => {
    //     const updatedTasks = tasks.filter((task, index) => index !== taskIndex);
    //     setTasks(updatedTasks);
    //     closeModal();
    // };

    // Function to handle the increment/decrement of task horas inside the modal
    const handleIncrement = () => {
        const updatedHours = [...taskHoras];
        updatedHours[selectedTask.index] += 1;
        settaskHoras(updatedHours);
    };

    const handleDecrement = () => {
        const updatedHours = [...taskHoras];
        if (updatedHours[selectedTask.index] > 0) {
            updatedHours[selectedTask.index] -= 1;
        }
        settaskHoras(updatedHours);
    };

    return (
        <View className="flex-1 items-center bg-white p-4">
            <View className="w-full">
                <Title label="Edita ✎" color="mint" />
                <ScrollView>
                    {Object.keys(groupedTasks).map((project) => (
                        <Collapsible key={project} title={project}>
                            {groupedTasks[project].map((task, index) => (
                                <TouchableOpacity key={index} onPress={() => openModal(task, index)}>
                                    <View className="p-2 border-b border-gray-200">
                                        <View className="flex-row justify-between">
                                            <View className="flex-col">
                                                <View className="flex-row">
                                                    <Text className="font-semibold">{task.description}</Text>
                                                </View>
                                                <View className="flex-row">
                                                    <Text className="text-gray-600">{new Date(task.date).toLocaleString()}</Text>
                                                </View>
                                            </View>
                                            <View className="flex-col items-center">
                                                <Text className="font-bold text-lighter text-2xl">✐</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </Collapsible>
                    ))}
                </ScrollView>
            </View>

            {/* Modal */}
            {selectedTask && (
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={closeModal}
                >
                    <View className="flex-1 justify-center items-center bg-zinc-700/80">
                        <View className="w-4/5 bg-white p-5 rounded-lg border-black border-2">
                            <Text className="font-bold text-xl mb-2 text-main">{selectedTask.task.description}</Text>
                            <View className="flex-row items-center my-6 justify-between">
                                <View className="flex-col">
                                    <Text className="text-darker text-lg">Horas asignadas</Text>
                                </View>
                                <View className="flex-col">
                                    <View className="flex-row">
                                        <TouchableOpacity onPress={handleDecrement}>
                                            <Text className="text-[40px] text-red-500">-</Text>
                                        </TouchableOpacity>
                                        <Text className="text-[40px] mx-4">{taskHoras[selectedTask.index]}</Text>
                                        <TouchableOpacity onPress={handleIncrement}>
                                            <Text className="text-[40px] text-green-500">+</Text>
                                        </TouchableOpacity>
                                    </View>
                                    
                                </View>
                                
                            </View>

                            <TouchableOpacity 
                                //onPress={() => deleteTask(selectedTask.index)} 
                                className="bg-red-500 p-3 rounded-lg mt-4 border-black border-2"
                            >
                                <Text className="text-white text-center font-bold">Eliminar tarea</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={closeModal} className="bg-mint p-3 rounded-lg mt-4 border-black border-2">
                                <Text className="text-white text-center font-bold">Guardar y cerrar</Text>
                                {/* Add here to update!! */}
                            </TouchableOpacity>

                        </View>
                    </View>
                </Modal>
            )}
        </View>
    );
}