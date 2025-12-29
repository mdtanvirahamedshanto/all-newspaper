import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ActivityIndicator, Linking, Pressable, Text, View } from 'react-native';
import WebView from 'react-native-webview';
import type { WebViewNavigation } from 'react-native-webview/lib/WebViewTypes';

import type { RootStackParamList } from '../navigation/types';
import { useBookmarks } from '../state/BookmarksContext';

type Nav = NativeStackNavigationProp<RootStackParamList>;
type R = RouteProp<RootStackParamList, 'Browser'>;

export function BrowserScreen() {
  const navigation = useNavigation<Nav>();
  const route = useRoute<R>();
  const { url, title, id } = route.params;
  const { isBookmarked, toggleBookmark } = useBookmarks();

  const webRef = useRef<WebView>(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);

  const bookmarked = useMemo(() => isBookmarked(url), [isBookmarked, url]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <Pressable onPress={() => Linking.openURL(url)} hitSlop={10}>
            <Ionicons name="open-outline" size={22} color="#111827" />
          </Pressable>
          <Pressable
            onPress={() => toggleBookmark({ id, title, url })}
            hitSlop={10}
            accessibilityLabel={bookmarked ? 'Remove bookmark' : 'Add bookmark'}>
            <Ionicons
              name={bookmarked ? 'bookmark' : 'bookmark-outline'}
              size={22}
              color="#111827"
            />
          </Pressable>
        </View>
      ),
    });
  }, [bookmarked, id, navigation, title, toggleBookmark, url]);

  const onNavChange = (navState: WebViewNavigation) => {
    setCanGoBack(navState.canGoBack);
    setCanGoForward(navState.canGoForward);
  };

  return (
    <View className="flex-1 bg-white">
      {loading ? (
        <View className="absolute left-0 right-0 top-0 z-10 items-center">
          <View className="h-1 w-full bg-neutral-100">
            <View className="h-1 bg-blue-600" style={{ width: `${Math.round(progress * 100)}%` }} />
          </View>
        </View>
      ) : null}

      <WebView
        ref={webRef}
        source={{ uri: url }}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        onLoadProgress={({ nativeEvent }) => setProgress(nativeEvent.progress)}
        onNavigationStateChange={onNavChange}
        startInLoadingState
        renderLoading={() => (
          <View className="flex-1 items-center justify-center">
            <ActivityIndicator />
            <Text className="mt-2 text-xs text-neutral-500">Loading {title}…</Text>
          </View>
        )}
      />

      <View className="flex-row items-center justify-between border-t border-neutral-200 bg-white px-6 py-3">
        <Pressable
          onPress={() => webRef.current?.goBack()}
          disabled={!canGoBack}
          className="rounded-xl p-2 disabled:opacity-30">
          <Ionicons name="chevron-back" size={22} color="#111827" />
        </Pressable>

        <Pressable onPress={() => webRef.current?.reload()} className="rounded-xl p-2">
          <Ionicons name="refresh" size={22} color="#111827" />
        </Pressable>

        <Pressable
          onPress={() => webRef.current?.goForward()}
          disabled={!canGoForward}
          className="rounded-xl p-2 disabled:opacity-30">
          <Ionicons name="chevron-forward" size={22} color="#111827" />
        </Pressable>
      </View>
    </View>
  );
}
