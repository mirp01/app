import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';

export default function TabLayout() {
  // Customizable colors
  const activeTabColor = '#ffee88';
  const inactiveTabColor = '#880044';
  const backgroundColor = '#aa1155';
  const borderColor = '#000';  // Change this to your preferred border color

  // Customizable sizes
  const tabBarHeight = 60;  // Increase this value to make the background bigger
  const borderWidth = 2;  // Change this to adjust the border width

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: activeTabColor,
        tabBarInactiveTintColor: inactiveTabColor,
        tabBarStyle: {
          backgroundColor: backgroundColor,
          height: tabBarHeight,
          borderTopWidth: borderWidth,
          borderTopColor: borderColor,
          // Add some padding to account for the increased height
          paddingBottom: 5,
          paddingTop: 5,
        },
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}