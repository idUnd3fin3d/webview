import React from 'react';
import {
  SafeAreaView
} from 'react-native';

import { WebView } from 'react-native-webview';

const URL = 'https://google.com/';

const App: () => React$Node = () => {
  return (
  <WebView
        source={{ uri: URL }}
        style={{ marginTop: 20 }}
      />
  );
};

/*const styles = StyleSheet.create({
  
});*/

export default App;
