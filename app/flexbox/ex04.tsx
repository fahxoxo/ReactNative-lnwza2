// app/flexbox/ex04.tsx
import { View, StyleSheet } from 'react-native';

export default function Ex04() {
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
    flexDirection: 'column', // ค่าปกติอยู่แล้ว ไม่ต้องใส่ก็ได้
    marginTop: 50,
    marginLeft: 20,
  },
  box: {
    width: 100,
    height: 100,
  },
});