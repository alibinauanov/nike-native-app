import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import products from './src/data/products';
import ProductsScreen from './src/screens/ProductsScreen';
// import Navigation from './src/navigation';
// import { Provider } from 'react-redux';
// import { store } from './src/store';
// import { StripeProvider } from '@stripe/stripe-react-native';

// const STRIPE_KEY =
//   'pk_test_51MhWh3KFBbgW0VClMkCwptwPtXFBm3F8cYTSTy2FfORjqlbmDnVChl6VTevEm5wGLpCkirGN4GmJT4TShFrqO8KD00zH60RQoD';

export default function App() {
  return (
    <View style={styles.container}>
      <ProductsScreen />

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});