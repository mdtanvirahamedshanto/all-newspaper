import { TextInput, View } from 'react-native';

export function SearchInput({
  value,
  onChangeText,
  placeholder = 'Search newspapers…',
}: {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}) {
  return (
    <View className="rounded-2xl border border-neutral-200 bg-white px-3 py-2">
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        autoCapitalize="none"
        autoCorrect={false}
        className="text-base text-neutral-900"
        placeholderTextColor="#9ca3af"
      />
    </View>
  );
}
