import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function Bmi() {
    // ประกาศตัวแปร State สำหรับเก็บค่า
    const [weight, setWeight] = useState<string>('70'); // ค่าเริ่มต้นตามรูป
    const [height, setHeight] = useState<string>('170'); // ค่าเริ่มต้นตามรูป
    const [bmi, setBmi] = useState<string>('24.22');
    const [thisDescription, setDescription] = useState<string>('Normal');

    // ฟังก์ชันคำนวณเมื่อกดปุ่ม
    const onPressCalculate = () => {
        const w = parseFloat(weight);
        const h = parseFloat(height) / 100; // แปลง cm เป็น m
        const bmiValue = w / (h * h);

        setBmi(bmiValue.toFixed(2));

        // เกณฑ์การประเมินตามที่คุณกำหนด
        let criteria = "Normal";
        if (bmiValue < 18.5) {
            criteria = "Underweight";
        } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
            criteria = "Normal";
        } else if (bmiValue >= 25 && bmiValue <= 29.9) {
            criteria = "over weight";
        } else if (bmiValue >= 30 && bmiValue <= 34.9) {
            criteria = "Obese";
        } else if (bmiValue > 35) {
            criteria = "Extreme Obese";
        }

        setDescription(criteria);
    };

    return (
        <View>
            {/* แถวที่ 1 Input Weight */}
            <View style={styles.whiteBox}>
                <Text style={styles.label}>Weight (kg.)</Text>
                <TextInput
                    style={styles.input}
                    value={weight}
                    onChangeText={setWeight}
                    keyboardType="numeric"
                    placeholder="Input your weight"
                />
            </View>

            {/* แถวที่ 2 Input Height */}
            <View style={styles.whiteBox}>
                <Text style={styles.label}>Height (cm.)</Text>
                <TextInput
                    style={styles.input}
                    value={height}
                    onChangeText={setHeight}
                    keyboardType="numeric"
                    placeholder="Input your height"
                />
            </View>

            {/* แถวที่ 3 แสดงผลลัพธ์ (วางคู่กัน) */}
            <View style={styles.resultContainer}>
                <View style={[styles.whiteBox, styles.resultBox]}>
                    <Text style={styles.bmiText}>{bmi}</Text>
                </View>
                <View style={[styles.whiteBox, styles.resultBox]}>
                    <Text style={styles.criteriaText}>{thisDescription}</Text>
                </View>
            </View>

            {/* แถวที่ 4 ปุ่ม Calculate */}
            <TouchableOpacity onPress={onPressCalculate} style={styles.button}>
                <Text style={styles.buttonText}>Calculate</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    whiteBox: {
        backgroundColor: 'white',
        borderRadius: 10, // มุมโค้ง
        padding: 20,
        marginBottom: 15, // ระยะห่างจากกล่องด้านล่าง
        // เงา (Shadow) เพื่อความสวยงามเล็กน้อย
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        fontSize: 16,
        color: 'gray'
    },
    resultContainer: {
        flexDirection: 'row', // จัดเรียงแนวนอน
        justifyContent: 'space-between', // เว้นระยะห่างตรงกลาง
    },
    resultBox: {
        flex: 1, // ขยายให้เต็มพื้นที่
        alignItems: 'center', // จัดข้อความกึ่งกลางแนวนอน
        justifyContent: 'center', // จัดข้อความกึ่งกลางแนวตั้ง
        height: 100, // กำหนดความสูงให้เท่ากันตามรูป
        marginLeft: 5,
        marginRight: 5,
    },
    bmiText: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    criteriaText: {
        fontSize: 18,
    },
    button: {
        backgroundColor: 'blue', // สีปุ่มน้ำเงิน
        padding: 15,
        borderRadius: 30, // ทำเป็นทรงแคปซูล/วงรี
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }
});