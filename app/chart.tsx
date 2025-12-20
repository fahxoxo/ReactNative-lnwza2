import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph } from 'react-native-chart-kit';
import { StyleSheet, Text, View, Dimensions } from 'react-native';




export default function Chart() {  

    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2 // optional
            }
        ],
        legend: ["Rainy Days"] // optional
    };
    const chartConfig = {
        backgroundColor: '#e26a00',
        backgroundGradientFrom: '#fb8c00',
        backgroundGradientTo: '#ffa726',
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
            borderRadius: 16
        }
    };
    const screenWidth = Dimensions.get("window").width;

   return (
       <View style={{ flex: 1 , padding : 10 }}>            
            <Text style={{ fontSize : 20 }}>
                Bezier Line Chart
            </Text>
            <LineChart
                data={data}
                width={screenWidth-20} // from react-native
                height={220}
                chartConfig={chartConfig}
                bezier={true}
                style={{
                    marginVertical : 10,
                    borderRadius: 15
                }}
            />
            <Text style={{ fontSize: 20, marginTop: 20 }}>
                Pie Chart: เมือง
            </Text>
            <PieChart
                data={[
                    { name: 'Seoul', population: 21500000, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
                    { name: 'Toronto', population: 2800000, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
                    { name: 'Beijing', population: 527612, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 },
                    { name: 'New York', population: 8538000, color: '#ffffff', legendFontColor: '#7F7F7F', legendFontSize: 15 },
                    { name: 'Moscow', population: 11920000, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 15 }
                ]}
                width={screenWidth-20}
                height={220}
                chartConfig={chartConfig}
                accessor={'population'}
                backgroundColor={'transparent'}
                paddingLeft={'15'}
                style={{ marginVertical: 8, borderRadius: 16 }}
            />

            {/* Pie Chart 2: ผลไม้ */}
            <Text style={{ fontSize: 20, marginTop: 20 }}>
                Pie Chart: ผลไม้
            </Text>
            <PieChart
                data={[
                    { name: 'Apple', population: 40, color: '#FF6384', legendFontColor: '#7F7F7F', legendFontSize: 15 },
                    { name: 'Banana', population: 30, color: '#FFCE56', legendFontColor: '#7F7F7F', legendFontSize: 15 },
                    { name: 'Orange', population: 20, color: '#36A2EB', legendFontColor: '#7F7F7F', legendFontSize: 15 },
                    { name: 'Grape', population: 10, color: '#9966FF', legendFontColor: '#7F7F7F', legendFontSize: 15 }
                ]}
                width={screenWidth-20}
                height={220}
                chartConfig={chartConfig}
                accessor={'population'}
                backgroundColor={'transparent'}
                paddingLeft={'15'}
                style={{ marginVertical: 8, borderRadius: 16 }}
            />
        
        </View>

   );
}

