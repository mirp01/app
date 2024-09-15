import { Text, View, ScrollView } from "react-native";
import Title from "@/components/Title";
import { Collapsible } from '@/components/Collapsible';

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

const groupTasksByProject = (tasks) => {
    return tasks.reduce((acc, task) => {
        (acc[task.project] = acc[task.project] || []).push(task);
        return acc;
    }, {});
};

export default function Edita() {
    const groupedTasks = groupTasksByProject(tasks);
    return (
        <View className="flex-1 items-center bg-white p-4">
            <View className="w-full">
                <Title label="Edita ✎" color="mint" />
                <ScrollView>
                    {Object.keys(groupedTasks).map((project) => (
                        <Collapsible key={project} title={project}>
                            {groupedTasks[project].map((task, index) => (
                                <View key={index} className="p-2 border-b border-gray-200">
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
                            ))}
                        </Collapsible>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
}