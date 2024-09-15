import { Text, View, Image } from 'react-native';

interface Task {
    description: string;
    project: string;
}

interface DashboardTasksProps {
    tasks: Task[];
}

export default function DashboardTasks({ tasks }: DashboardTasksProps) {
    return (
        <View className="flex flex-wrap flex-row grid grid-cols-1 divide-y divide-dashed divide-main">
            {tasks.length === 0 ? (
                <View className="flex h-80 w-full flex-col justify-center items-center">
                    <Image
                    source={require('../assets/images/empty.png')}
                    style={{ 
                        width: '50%', 
                        height: '50%', 
                        resizeMode: 'contain',  
                    }} />
                    <Text className="text-sm text-center text-gray-500">No hay tarea</Text>
                </View>
            ) : (
                tasks.map((task, index) => (
                    <View key={index} className="w-full flex flex-row p-4">
                        <View className="w-1/2 pr-2">
                            <Text className="text-sm">{task.description}</Text>
                        </View>
                        <View className="w-1/2 pl-2">
                            <Text className="font-bold text-sm text-center bg-mint p-2">{task.project}</Text>
                        </View>
                    </View>
                ))
            )}
        </View>
    );
}
