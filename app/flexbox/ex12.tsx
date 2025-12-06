// app/flexbox/ex12.tsx
import { View, StyleSheet } from 'react-native';

export default function Ex12() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, backgroundColor: '#50E3C2' }} />
      <View style={{ flex: 1, backgroundColor: '#4A90E2' }} />
      <View style={{ flex: 1, backgroundColor: '#9013FE' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // เรียงแนวนอน
  },
});