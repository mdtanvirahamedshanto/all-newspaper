import { Linking, Pressable, Text, View } from 'react-native';

export function SettingsScreen() {
  return (
    <View className="flex-1 bg-neutral-50 px-4 pt-4">
      <View className="rounded-2xl border border-neutral-200 bg-white p-4">
        <Text className="text-base font-semibold text-neutral-900">About</Text>
        <Text className="mt-1 text-sm text-neutral-600">
          A simple Bangladesh newspaper reader. For production, we can add offline reading, reader
          mode, and push notifications.
        </Text>

        <Pressable
          onPress={() => Linking.openURL('https://expo.dev')}
          className="mt-4 rounded-xl bg-neutral-900 px-4 py-3">
          <Text className="text-center text-sm font-semibold text-white">Expo Docs</Text>
        </Pressable>
      </View>
    </View>
  );
}
