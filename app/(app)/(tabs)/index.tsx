import { useState } from "react";
import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from "react-native";
import Title from "@/components/Title";
import DashboardTasks from "@/components/DashboardTasks";

export default function Index() {
    const [boxVisible, setBoxVisible] = useState(false);
    const [sort, setSort] = useState<'day' | 'week'>('day'); // Add state to track the sort parameter

    const tasks = [
        { description: 'Label 1', project: 'Project A' },
        { description: 'Label 2', project: 'Project B' },
    ];

    const handleOpenBox = () => {
        setBoxVisible(!boxVisible); // Toggle the visibility of the box
    };

    const handlePressWeek = () => {
        setSort('week'); // Change the sort to 'week'
        setBoxVisible(false); // Close the box
        console.log('Sorting by week');
    };

    const handlePressDay = () => {
        setSort('day'); // Change the sort to 'day'
        setBoxVisible(false); // Close the box
        console.log('Sorting by day');
    };

    return (
        <View className="flex-1 items-center bg-white p-4">
            <View className="w-full">
                <Title label="Pendientes de hoy" color="main" />
                <ScrollView>
                    {/* Pass the sort state to DashboardTasks */}
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
                            onPress={handlePressWeek} // Switch to week view
                        >
                            <Text style={styles.boxText}>Ver por semana</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.box, { bottom: 160 }]} // Adjust position for second box
                            onPress={handlePressDay} // Switch to day view
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
        borderRadius: 30,
        backgroundColor: '#dd1155',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2.5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    box: {
        position: 'absolute',
        bottom: 70,
        right: 0,
        width: 150,
        height: 60,
        borderRadius: 8,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2.5,
    },
    boxText: {
        fontSize: 14,
        color: '#333',
    },
});
