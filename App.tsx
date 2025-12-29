import './global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AppNavigator } from './src/navigation/AppNavigator';
import { BookmarksProvider } from './src/state/BookmarksContext';

export default function App() {
  return (
    <SafeAreaProvider>
      <BookmarksProvider>
        <AppNavigator />
      </BookmarksProvider>
    </SafeAreaProvider>
  );
}
