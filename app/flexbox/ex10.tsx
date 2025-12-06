// app/flexbox/ex10.tsx
import { View, StyleSheet } from 'react-native';

export default function Ex10() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, backgroundColor: '#4A90E2' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});