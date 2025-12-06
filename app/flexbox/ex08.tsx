// app/flexbox/ex08.tsx
import { View, StyleSheet } from 'react-native';

export default function Ex08() {
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
    justifyContent: 'space-between', // กระจายห่างกัน
    alignItems: 'center', // ในรูป Ex8 อยู่กลางๆ (แนวตั้ง) หรือล่าง? 
                          // ถ้าดูตามรูปน่าจะอยู่ล่าง ให้แก้เป็น 'flex-end'
    paddingBottom: 20,    // เว้นขอบล่างหน่อย
    paddingHorizontal: 20 // เว้นขอบซ้ายขวา
  },
  box: {
    width: 80,
    height: 80,
  },
});