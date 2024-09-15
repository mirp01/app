import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';

export default function TabLayout() {

  const activeTabColor = '#ffee88';
  const inactiveTabColor = '#880044';
  const backgroundColor = '#aa1155';
  const borderColor = '#000';

  const tabBarHeight = 60;
  const borderWidth = 3;

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
            <TabBarIcon name={focused ? 'file-tray-full' : 'file-tray-full'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="edita"
        options={{
          title: 'Edita',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'create' : 'create'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: 'Mi Cuenta',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person-circle' : 'person-circle'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}