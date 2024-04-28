
import React from "react";
import { View, Text, Dimensions } from "react-native";
import { LineChart, ProgressChart } from "react-native-chart-kit";
import styles from "./StatsPageStyles";

const StatsPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Line Chart</Text>
      

           <LineChart
        data={{
          labels: ["vegetable", "Meat", "Fruits", "Diary"],
          datasets: [
            {
              data: [25, 10, 35, 30],
            },
          ],
        }}
        width={Dimensions.get("window").width} 
        height={220}
        yAxisInterval={1} 
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 0, 
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 17,
          },
          propsForDots: {
            r: "3",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
        bezier
      />

      <View style={styles.progressChartContainer}>
        <Text style={styles.heading}>Progress chart</Text>
        <ProgressChart
       
       data={{
                  labels: ["Vegetables", "Fruits", "Meat", "Diary"],
                  data: [0.2, 0.4, 0.1, 0.3],
                }}
                width={Dimensions.get("window").width}
                height={220}
                strokeWidth={16}
                radius={32}
                chartConfig={{
                  backgroundColor: "#08c25e",
                  backgroundGradientFrom: "green",
                  backgroundGradientTo: "",
                  decimalPlaces: 0, 
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) => `#000`,
                  style: {
                    borderRadius: 16,
                    marginTop:230,
                  },
                  propsForDots: {
                    r: "3",
                    strokeWidth: "2",
                    stroke: "#ffa726",
                  },
                }}
                hideLegend={false}
              />
      </View>
    </View>
  );
};

export default StatsPage;
