// app/flexbox/ex07.tsx
import { View, StyleSheet } from 'react-native';

export default function Ex07() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: '#50E3C2' }]} />
      <View style={[styles.box, { backgroundColor: '#4A90E2' }]} />
      <View style={[styles.box, { backgroundColor: '#9013FE' }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end', // ดันไปติดขอบล่าง (Cross Axis ของ Row)
  },
  box: {
    width: 100,
    height: 100,
  },
});