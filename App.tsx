import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Avatar } from "react-native-paper";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-green-500">
      <Text className="text-2xl text-white font-bold p-10">
        Welcome to Panelize!
      </Text>
      <Avatar.Icon size={66} className="bg-white" icon="folder" />
      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
