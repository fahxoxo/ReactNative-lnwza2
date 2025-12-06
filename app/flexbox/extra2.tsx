import { StyleSheet, View } from 'react-native';

export default function Extra2() {
  return (
    <View style={styles.container}>
      
      {/* 1. ซ้ายสุด (สีครีม) */}
      {/* เป็นแถบยาวลงมาตลอดแนว */}
      <View style={{ flex: 1, backgroundColor: '#FFEBB6' }} />

      {/* 2. พื้นที่ขวา (ก้อนใหญ่) */}
      {/* กินพื้นที่ 3 ส่วน (กว้างกว่าซ้าย) และเรียงแนวตั้ง (Column) */}
      <View style={{ flex: 3, flexDirection: 'column' }}>
        
        {/* 2.1 ขวา-บน (สีเขียว) */}
        <View style={{ flex: 1, backgroundColor: '#8BD7B1' }} />

        {/* 2.2 ขวา-ล่าง (ก้อนผสม) */}
        {/* ก้อนนี้ต้องเรียงแนวนอน (Row) เพื่อเอา แดง กับ ส้ม/แดง มาวางคู่กัน */}
        <View style={{ flex: 2, flexDirection: 'row' }}>
            
            {/* 3.1 แท่งแดง (ซ้าย) */}
            <View style={{ flex: 1, backgroundColor: '#FE706E' }} />

            {/* 3.2 ก้อนขวาสุด (ขวา) */}
            {/* ก้อนนี้ต้องเรียงแนวตั้ง (Column) อีกรอบ */}
            <View style={{ flex: 2, flexDirection: 'column' }}>
                
                {/* 4.1 ส้ม (บน) */}
                <View style={{ flex: 1, backgroundColor: '#FFCB65' }} />

                {/* 4.2 แดง (ล่าง) */}
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
    flexDirection: 'row', // เริ่มต้นด้วยแนวนอน (ซ้าย vs ขวา)
  },
});