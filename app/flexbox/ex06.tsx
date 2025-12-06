// app/flexbox/ex06.tsx
import { View, StyleSheet } from 'react-native';

export default function Ex06() {
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
    justifyContent: 'center', // จัดกึ่งกลาง (บน-ล่าง สำหรับ column)
    alignItems: 'center',     // จัดกึ่งกลาง (ซ้าย-ขวา สำหรับ column)
  },
  box: {
    width: 100,
    height: 100,
  },
});