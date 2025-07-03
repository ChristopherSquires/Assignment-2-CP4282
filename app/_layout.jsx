import { Tabs } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function RootLayout() {
  return (
      <Tabs>
          <Tabs.Screen
          name="index"
          options={{
              title='Home',
              tabBarIcon: ({color}) => <MaterialIcons size={28} name="home" color={color} />,
              }}
          />
      <Tabs>
          <Tabs.Screen
          name="updateScares"
          options={{
          title: "Update Scares",
          tabBarIcon: ({color}) => <MaterialIcons size={28} name="home" color={color} />,
          }}
      />
      <Tabs>
          <Tabs.Screen
          name="scares"
          options={{
              title: "Scares Info",
              tabBarIcon: ({color}) => <MaterialIcons size={28} name="scare" color={color} />,
              }}
          />
      </Tabs>
      )
}
