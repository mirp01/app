import { Text, View, ScrollView } from "react-native";
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
        </View>
    );
}

