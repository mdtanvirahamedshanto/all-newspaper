import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';

import { BrowserScreen } from '../screens/BrowserScreen';
import { BookmarksScreen } from '../screens/BookmarksScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import type { RootStackParamList, TabParamList } from './types';

enableScreens();

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tabs = createBottomTabNavigator<TabParamList>();

function TabNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerTitleAlign: 'center',
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#2563eb',
        tabBarInactiveTintColor: '#6b7280',
        tabBarStyle: { borderTopColor: '#e5e7eb' },
        tabBarIcon: ({ color, size }) => {
          const name =
            route.name === 'Home'
              ? 'newspaper-outline'
              : route.name === 'Bookmarks'
                ? 'bookmark-outline'
                : 'settings-outline';
          return <Ionicons name={name} size={size} color={color} />;
        },
      })}>
      <Tabs.Screen name="Home" component={HomeScreen} options={{ title: 'Bangladesh News' }} />
      <Tabs.Screen name="Bookmarks" component={BookmarksScreen} options={{ title: 'Bookmarks' }} />
      <Tabs.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
    </Tabs.Navigator>
  );
}

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen
          name="Browser"
          component={BrowserScreen}
          options={({ route }) => ({
            title: route.params.title,
            headerTitleStyle: { fontSize: 16 },
            headerBackTitleVisible: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
