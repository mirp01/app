import { Text, View } from "react-native";
import Title from "@/components/Title";

export default function Index() {
  return (
    <View className="flex-1 items-center bg-white p-4">
      <View className="w-full">
        <Title label="Pendientes de hoy" color="main" />
        <View className="border-t border-rose-300 my-4" />
      </View>
    </View>
  );
}

