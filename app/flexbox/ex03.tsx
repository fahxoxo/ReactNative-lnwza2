// app/flexbox/ex03.tsx
import { View, StyleSheet } from 'react-native';

export default function Ex03() {
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
    flexDirection: 'row', // หัวใจสำคัญ: เรียงแนวนอน
    marginTop: 50, // ดันลงมาหน่อยจะได้ไม่ชนขอบจอ
    marginLeft: 20,
  },
  box: {
    width: 100,
    height: 100,
  },
});