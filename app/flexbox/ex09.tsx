// app/flexbox/ex09.tsx
import { View, StyleSheet } from 'react-native';

export default function Ex09() {
  return (
    <View style={styles.container}>
      {/* แถวบน */}
      <View style={styles.row}>
         <View style={[styles.box, { backgroundColor: '#50E3C2' }]} />
         <View style={[styles.box, { backgroundColor: '#50E3C2' }]} />
         <View style={[styles.box, { backgroundColor: '#50E3C2' }]} />
      </View>
      {/* แถวกลาง */}
      <View style={styles.row}>
         <View style={[styles.box, { backgroundColor: '#4A90E2' }]} />
         <View style={[styles.box, { backgroundColor: '#4A90E2' }]} />
         <View style={[styles.box, { backgroundColor: '#4A90E2' }]} />
      </View>
      {/* แถวล่าง */}
      <View style={styles.row}>
         <View style={[styles.box, { backgroundColor: '#9013FE' }]} />
         <View style={[styles.box, { backgroundColor: '#9013FE' }]} />
         <View style={[styles.box, { backgroundColor: '#9013FE' }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around', // กระจาย 3 แถวออกจากกัน (แนวตั้ง)
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between', // กระจายกล่องในแถวออกจากกัน (แนวนอน)
    paddingHorizontal: 20,
  },
  box: {
    width: 80,
    height: 80,
  },
});