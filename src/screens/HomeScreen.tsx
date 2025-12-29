import { useMemo, useState } from 'react';
import { SectionList, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { NewspaperRow } from '../components/NewspaperRow';
import { SearchInput } from '../components/SearchInput';
import { BD_CATEGORIES, BD_NEWSPAPERS, type Newspaper } from '../data/bdNewspapers';
import type { RootStackParamList } from '../navigation/types';

type Nav = NativeStackNavigationProp<RootStackParamList>;

export function HomeScreen() {
  const navigation = useNavigation<Nav>();
  const [query, setQuery] = useState('');

  const sections = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = q
      ? BD_NEWSPAPERS.filter(
          (n) =>
            n.name.toLowerCase().includes(q) ||
            n.url.toLowerCase().includes(q) ||
            n.category.toLowerCase().includes(q)
        )
      : BD_NEWSPAPERS;

    return BD_CATEGORIES.map((cat) => ({
      title: cat,
      data: filtered.filter((n) => n.category === cat),
    })).filter((s) => s.data.length > 0);
  }, [query]);

  const open = (n: Newspaper) => {
    navigation.navigate('Browser', { url: n.url, title: n.name, id: n.id });
  };

  return (
    <View className="flex-1 bg-neutral-50 px-4 pt-4">
      <SearchInput value={query} onChangeText={setQuery} />

      <SectionList
        className="mt-4"
        sections={sections}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 24 }}
        renderSectionHeader={({ section }) => (
          <Text className="mb-2 mt-4 text-sm font-semibold text-neutral-700">{section.title}</Text>
        )}
        ItemSeparatorComponent={() => <View className="h-3" />}
        renderItem={({ item }) => <NewspaperRow item={item} onPress={() => open(item)} />}
        ListEmptyComponent={
          <View className="mt-10 items-center">
            <Text className="text-neutral-500">No newspapers found.</Text>
          </View>
        }
      />
    </View>
  );
}
