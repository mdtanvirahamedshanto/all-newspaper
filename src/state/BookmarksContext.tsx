import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

type Bookmark = {
  id?: string;
  title: string;
  url: string;
  createdAt: number;
};

type BookmarksState = {
  bookmarks: Bookmark[];
  isBookmarked: (url: string) => boolean;
  toggleBookmark: (bookmark: Omit<Bookmark, 'createdAt'>) => void;
  removeBookmark: (url: string) => void;
  clearBookmarks: () => void;
  ready: boolean;
};

const STORAGE_KEY = 'bookmarks.v1';

const BookmarksContext = createContext<BookmarksState | null>(null);

export function BookmarksProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(STORAGE_KEY);
        if (!raw) return;
        const parsed = JSON.parse(raw) as Bookmark[];
        if (!cancelled && Array.isArray(parsed)) setBookmarks(parsed);
      } catch {
        // ignore
      } finally {
        if (!cancelled) setReady(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const persist = useCallback(async (next: Bookmark[]) => {
    setBookmarks(next);
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // ignore
    }
  }, []);

  const isBookmarked = useCallback(
    (url: string) => bookmarks.some((b) => b.url === url),
    [bookmarks]
  );

  const removeBookmark = useCallback(
    (url: string) => {
      const next = bookmarks.filter((b) => b.url !== url);
      void persist(next);
    },
    [bookmarks, persist]
  );

  const toggleBookmark = useCallback(
    (bookmark: Omit<Bookmark, 'createdAt'>) => {
      const exists = bookmarks.some((b) => b.url === bookmark.url);
      if (exists) {
        void persist(bookmarks.filter((b) => b.url !== bookmark.url));
        return;
      }
      void persist([{ ...bookmark, createdAt: Date.now() }, ...bookmarks]);
    },
    [bookmarks, persist]
  );

  const clearBookmarks = useCallback(() => {
    void persist([]);
  }, [persist]);

  const value = useMemo<BookmarksState>(
    () => ({ bookmarks, isBookmarked, toggleBookmark, removeBookmark, clearBookmarks, ready }),
    [bookmarks, clearBookmarks, isBookmarked, removeBookmark, ready, toggleBookmark]
  );

  return <BookmarksContext.Provider value={value}>{children}</BookmarksContext.Provider>;
}

export function useBookmarks() {
  const ctx = useContext(BookmarksContext);
  if (!ctx) throw new Error('useBookmarks must be used within BookmarksProvider');
  return ctx;
}
