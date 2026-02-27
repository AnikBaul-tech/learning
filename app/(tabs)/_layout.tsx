import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "red" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <FontAwesome name="home" size={24} color={color} />
            ) : (
              <AntDesign name="home" size={24} color={color} />
            );
          },
        }}
      ></Tabs.Screen>
      <Tabs.Screen name="Login" options={{ title: "Login" }}></Tabs.Screen>
    </Tabs>
  );
}
