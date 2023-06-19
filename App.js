import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import { store } from './src/store';
// import products from './src/data/products';
// import { Provider } from 'react-redux';
// import { store } from './src/store';
// import { StripeProvider } from '@stripe/stripe-react-native';

// const STRIPE_KEY =
//   'pk_test_51MhWh3KFBbgW0VClMkCwptwPtXFBm3F8cYTSTy2FfORjqlbmDnVChl6VTevEm5wGLpCkirGN4GmJT4TShFrqO8KD00zH60RQoD';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Navigation />

        <StatusBar style="auto" />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});