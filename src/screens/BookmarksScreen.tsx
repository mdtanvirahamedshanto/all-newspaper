import { useMemo } from 'react';
import { Pressable, Text, View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { BD_NEWSPAPERS } from '../data/bdNewspapers';
import type { RootStackParamList } from '../navigation/types';
import { useBookmarks } from '../state/BookmarksContext';
import { NewspaperRow } from '../components/NewspaperRow';

type Nav = NativeStackNavigationProp<RootStackParamList>;

export function BookmarksScreen() {
  const navigation = useNavigation<Nav>();
  const { bookmarks, removeBookmark, clearBookmarks, ready } = useBookmarks();

  const resolved = useMemo(() => {
    // if the bookmark matches a known paper, use the canonical title/url
    return bookmarks.map((b) => {
      const match = BD_NEWSPAPERS.find((n) => n.url === b.url || n.id === b.id);
      return {
        id: match?.id ?? b.url,
        name: match?.name ?? b.title,
        url: match?.url ?? b.url,
        category: match?.category ?? 'Bangla',
        language: match?.language ?? 'bn',
      };
    });
  }, [bookmarks]);

  return (
    <View className="flex-1 bg-neutral-50 px-4 pt-4">
      <View className="mb-3 flex-row items-center justify-between">
        <Text className="text-sm font-semibold text-neutral-700">Saved</Text>
        <Pressable
          onPress={clearBookmarks}
          disabled={!ready || bookmarks.length === 0}
          className="rounded-xl bg-neutral-900 px-3 py-2 disabled:opacity-40">
          <Text className="text-xs font-semibold text-white">Clear</Text>
        </Pressable>
      </View>

      <FlatList
        data={resolved}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View className="h-3" />}
        contentContainerStyle={{ paddingBottom: 24 }}
        renderItem={({ item }) => (
          <NewspaperRow
            item={item}
            onPress={() =>
              navigation.navigate('Browser', { url: item.url, title: item.name, id: item.id })
            }
            right={
              <Pressable
                onPress={() => removeBookmark(item.url)}
                className="rounded-xl bg-red-50 px-3 py-2">
                <Text className="text-xs font-semibold text-red-600">Remove</Text>
              </Pressable>
            }
          />
        )}
        ListEmptyComponent={
          <View className="mt-10 items-center">
            <Text className="text-neutral-500">No bookmarks yet.</Text>
            <Text className="mt-1 text-xs text-neutral-400">
              Open a newspaper and tap Bookmark.
            </Text>
          </View>
        }
      />
    </View>
  );
}
