import { Text, View, Image } from 'react-native';

interface Task {
    description: string;
    project: string;
    date: string;
}

interface DashboardTasksProps {
    tasks: Task[];
    sort?: 'day' | 'week';
}

function getDayOfWeek(date: Date): string {
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    return days[date.getUTCDay()];
}

// Helper function to get the Monday of the current week from a date
function getMonday(date: Date): Date {
    const day = date.getUTCDay();
    const diff = (day === 0 ? -6 : 1) - day; // Adjust to Monday
    const monday = new Date(date);
    monday.setUTCDate(date.getUTCDate() + diff);
    return monday;
}

// Function to sort days of the week starting from Monday
function sortDaysOfWeek(days: string[]): string[] {
    const orderedDays = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    return orderedDays.filter(day => days.includes(day));
}

// Group tasks by day of the week
function groupTasksByDay(tasks: Task[]): Record<string, Task[]> {
    return tasks.reduce((grouped, task) => {
        const taskDate = new Date(task.date);
        const dayOfWeek = getDayOfWeek(taskDate); // Get the day of the week for each task
        if (!grouped[dayOfWeek]) {
            grouped[dayOfWeek] = [];
        }
        grouped[dayOfWeek].push(task);
        return grouped;
    }, {} as Record<string, Task[]>);
}

export default function DashboardTasks({ tasks, sort = 'day' }: DashboardTasksProps) {
    // Filter tasks for the current week if 'sort' is 'week'
    const currentMonday = getMonday(new Date()); // Monday of the current week
    const nextMonday = new Date(currentMonday); // Monday of the next week
    nextMonday.setUTCDate(currentMonday.getUTCDate() + 7); // Get the next Monday

    const tasksForWeek = tasks.filter(task => {
        const taskDate = new Date(task.date);
        return taskDate >= currentMonday && taskDate < nextMonday;
    });

    const groupedTasks = groupTasksByDay(tasksForWeek);

    // Sort the days of the week to ensure Monday comes first
    const sortedDays = sortDaysOfWeek(Object.keys(groupedTasks));

    // Helper function to check if a task date matches today's date
    function isToday(taskDate: Date): boolean {
        const today = new Date();
        return taskDate.getUTCFullYear() === today.getUTCFullYear() &&
               taskDate.getUTCMonth() === today.getUTCMonth() &&
               taskDate.getUTCDate() === today.getUTCDate();
    }

    // Filter tasks for today if 'sort' is 'day'
    const tasksForDay = tasks.filter(task => {
        const taskDate = new Date(task.date);
        return isToday(taskDate); // Only tasks for today
    });

    return (
        <View className="flex flex-wrap flex-row grid grid-cols-1 divide-y divide-dashed divide-main">
            {sort === 'week' ? (
                tasksForWeek.length === 0 ? (
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
                    sortedDays.map((dayOfWeek) => (
                        <View key={dayOfWeek}>
                            <Text className="font-bold text-lg p-4 text-lighter">{dayOfWeek}</Text>

                            {/* Render tasks for that day */}
                            {groupedTasks[dayOfWeek].map((task, index) => (
                                <View key={index} className="w-full flex flex-row p-4">
                                    <View className="w-1/2 pr-2">
                                        <Text className="text-sm">{task.description}</Text>
                                    </View>
                                    <View className="w-1/2 pl-2">
                                        <Text className="font-bold text-sm text-center border-black border-2 rounded-md bg-mint p-2">{task.project}</Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    ))
                )
            ) : (
                // Display tasks for today when 'sort' is 'day'
                tasksForDay.length === 0 ? (
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
                    tasksForDay.map((task, index) => (
                        <View key={index} className="w-full flex flex-row p-4">
                            <View className="w-1/2 pr-2">
                                <Text className="text-sm">{task.description}</Text>
                            </View>
                            <View className="w-1/2 pl-2">
                                <Text className="font-bold text-sm text-center bg-mint border-black border-2 rounded-md p-2">{task.project}</Text>
                            </View>
                        </View>
                    ))
                )
            )}
        </View>
    );
}
