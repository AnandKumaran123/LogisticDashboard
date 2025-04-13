import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context'; // Ensures components respect safe area boundaries
import RouteNavigation from './src/Screens/Navigation/RouteNavigation';
import store from './src/Redux/Store/store';



const App = () => {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        {/* Makes Redux store available to all components in the app */}
        <Provider store={store}>
          {/* Main navigation component managing all screens */}
          <RouteNavigation />
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
