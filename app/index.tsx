import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  // สร้าง Array เลข 1-12 เอาไว้วนลูปสร้างปุ่ม จะได้ไม่ต้องพิมพ์โค้ดซ้ำๆ
  const exercises = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Flexbox Exercises</Text>
      <Text style={styles.subHeader}>by Pemika 66222420004</Text>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {exercises.map((num) => {
          // แปลงเลขให้เป็น 2 หลัก (เช่น 1 -> "01")
          const exNum = num < 10 ? `0${num}` : `${num}`;

          return (
            <Link key={num} href={`/flexbox/ex${exNum}`} style={styles.link}>
              <Text style={styles.linkText}>Ex{exNum}</Text>
            </Link>
          );
        })}
        {/* เพิ่มปุ่มพิเศษ Extra ต่อท้าย */}
        <Link
          href="/flexbox/extra"
          style={[styles.link, { backgroundColor: "#8BD7B1" }]}
        >
          <Text style={styles.linkText}>Extra Lab</Text>
        </Link>
        <Link
          href="/flexbox/extra2"
          style={[styles.link, { backgroundColor: "#8BD7B1" }]}
        >
          <Text style={styles.linkText}>Extra Lab2</Text>
        </Link>


        <Link href="/travel" style={styles.link}>
        <Text style={styles.linkText}>Travel</Text>
      </Link>


<Link href="/resort" style={styles.link}>
        <Text style={styles.linkText}>Resort</Text>
      </Link>

      <Link href="/health" style={styles.link}>
  <Text style={styles.linkText}>Health</Text>
</Link>

<Link href="/home" style={styles.link}>
  <Text style={styles.linkText}>Home</Text>
</Link>

<Link href="/flatlistexample" style={styles.link}>
  <Text style={styles.linkText}>FlatList Example</Text>
</Link>

<Link href="/chart" style={styles.link}>
  <Text style={styles.linkText}>Chart</Text>
</Link>

<Link href="/your-health" style={styles.link}>
  <Text style={styles.linkText}>Your Health</Text>
</Link>

<Link href="/todolist" style={styles.link}>
          <Text style={styles.linkText}>Todo List</Text>
        </Link>

<Link href="/location" style={styles.link}>
    <Text style={styles.linkText}>Location</Text>
</Link>

<Link href="/location-quiz" style={styles.link}>
    <Text style={styles.linkText}>Location-quiz</Text>
</Link>
<Link href="/ant" style={styles.link}>
        <Text style={styles.linkText}>heros</Text>
</Link>

<Link href="/charmander" style={styles.link}>
        <Text style={styles.linkText}>Pokemon</Text>
</Link>

<Link href="/book" style={styles.link}>
  <Text style={styles.linkText}>Book</Text>
</Link>

<Link href="/book-online" style={styles.link}>
  <Text style={styles.linkText}>Book Online</Text>
</Link>







      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5", // สีพื้นหลังเทาอ่อนๆ สบายตา
    paddingTop: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  subHeader: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  scrollContent: {
    alignItems: "center", // จัดปุ่มให้อยู่กึ่งกลาง
    paddingBottom: 40, // เว้นระยะด้านล่างเผื่อรูดไม่ถึง
  },
  link: {
    width: 200, // ความกว้างปุ่ม
    marginBottom: 12, // ระยะห่างระหว่างปุ่ม
    paddingVertical: 12, // ความสูงของปุ่ม (บน-ล่าง)
    backgroundColor: "#2196F3", // สีฟ้า
    borderRadius: 8, // มุมโค้งมน
    textAlign: "center", // (สำหรับ Link) ช่วยจัดตำแหน่ง
  },
  linkText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center", // จัดข้อความให้อยู่กลางปุ่ม
  },
});
