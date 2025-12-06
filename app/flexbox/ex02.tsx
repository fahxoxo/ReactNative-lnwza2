// app/flexbox/ex02.tsx
import { View, StyleSheet } from 'react-native';

export default function Ex02() {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // เรียงแนวนอน
  },
  box1: {
    width: 100, // กว้าง 100 หน่วย
    backgroundColor: '#50E3C2',
  },
  box2: {
    flex: 1, // กินพื้นที่ที่เหลือทั้งหมด
    backgroundColor: '#ffffff',
  },
});