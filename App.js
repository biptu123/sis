import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, Platform, StatusBar as RNStatusBar } from 'react-native';
import Home from './src/Home';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Home />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdf7f0",
    paddingTop: Platform.OS === "android" ? RNStatusBar.currentHeight : 0, // Ensures content starts below status bar
  },
  content: {
    flex: 1,
  },
});
