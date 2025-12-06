import { View, StyleSheet } from 'react-native';

export default function Extra() {
  return (
    <View style={styles.container}>
      
      {/* 1. ส่วนบน (สีครีม) flex: 1 */}
      <View style={{ flex: 1, backgroundColor: '#FFEBB6' }} />

      {/* 2. ส่วนล่าง (ก้อนใหญ่) flex: 2 */}
      {/* ต้องใส่ flexDirection: 'row' เพื่อให้ เขียว กับ แดง อยู่ข้างกัน */}
      <View style={{ flex: 2, flexDirection: 'row' }}>
        
        {/* 2.1 ด้านซ้าย (สีเขียว) flex: 1 */}
        <View style={{ flex: 1, backgroundColor: '#8BD7B1' }} />

        {/* 2.2 ด้านขวา (ก้อนผสม) flex: 2 */}
        {/* เป็น container ที่จะเอาไว้ใส่ แดง กับ ส้ม เรียงลงมา (Column) */}
        <View style={{ flex: 2, flexDirection: 'column' }}>
          
          {/* 3.1 ขวา-บน (สีแดง) */}
          <View style={{ flex: 1, backgroundColor: '#FE706E' }} />

          {/* 3.2 ขวา-ล่าง (ก้อนส้มแดง) */}
          {/* ต้องใส่ flexDirection: 'row' เพื่อให้ ส้ม กับ แดง อยู่ข้างกัน */}
          <View style={{ flex: 1, flexDirection: 'row' }}>
            
            {/* 4.1 ส้ม */}
            <View style={{ flex: 1, backgroundColor: '#FFCB65' }} />
            
            {/* 4.2 แดง */}
            <View style={{ flex: 1, backgroundColor: '#FE706E' }} />
            
          </View>

        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // ค่าเริ่มต้นคือเรียงลงมาอยู่แล้ว
  },
});