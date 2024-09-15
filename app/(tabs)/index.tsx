import React from "react";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import Title from "@/components/Title";
import DashboardTasks from "@/components/DashboardTasks";

export default function Index() {
    const tasks = [
        { description: 'Label 1', project: 'Project A' },
        { description: 'Label 2', project: 'Project B' },
    ];

    return (
        <View className="flex-1 items-center bg-white p-4">
            <View className="w-full">
                <Title label="Pendientes de hoy" color="main"/>
                <ScrollView>
                    <DashboardTasks tasks={tasks} />
                </ScrollView>
            </View>
            <View className="absolute bottom-4 right-6">
                <TouchableOpacity
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                        backgroundColor: '#dd1155',
                        justifyContent: 'center',
                        alignItems: 'center',
                        elevation: 5,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.2,
                        shadowRadius: 2.5,
                    }}
                >
                    <Text style={{ color: 'white', fontSize: 18 }}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
