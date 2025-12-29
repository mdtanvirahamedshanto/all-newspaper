import { Image, Pressable, Text, View } from 'react-native';

import type { Newspaper } from '../data/bdNewspapers';
import { getDomain, getFaviconUrl } from '../utils/url';

export function NewspaperRow({
  item,
  onPress,
  right,
}: {
  item: Newspaper;
  onPress: () => void;
  right?: React.ReactNode;
}) {
  return (
    <Pressable
      onPress={onPress}
      className="flex-row items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3 active:opacity-80">
      <View className="h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-neutral-100">
        <Image source={{ uri: getFaviconUrl(item.url) }} className="h-6 w-6" />
      </View>

      <View className="flex-1">
        <Text className="text-base font-semibold text-neutral-900">{item.name}</Text>
        <Text className="text-xs text-neutral-500">{getDomain(item.url)}</Text>
      </View>

      {right ? <View>{right}</View> : null}
    </Pressable>
  );
}
