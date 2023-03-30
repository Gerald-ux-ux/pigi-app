import { View, Text, Dimensions } from "react-native";
import React from "react";
import {
  Chart,
  Line,
  Area,
  HorizontalAxis,
  VerticalAxis,
} from "react-native-responsive-linechart";

export const InsightGraph= () => {
  return (
    <View className="absolute  -bottom-16 -left-16">
      <Chart
        style={{ height: 110, width: 320, }}
        data={[
          { x: -2, y: 15 },
          { x: -1, y: 1 },
          { x: 0, y: 12 },
          { x: 1, y: 7 },
          { x: 2, y: 20 },
          { x: 3, y: 8 },
          { x: 4, y: 10 },
          { x: 5, y: 1 },
          { x: 6, y: 12 },
          { x: 7, y: 14 },
          { x: 8, y: 12 },
          { x: 9, y: 13.5 },
          { x: 10, y: 18 },
        ]}
        padding={{ left: 40, bottom: 20, right: 5, top: 20 }}
        xDomain={{ min: -2, max: 5 }}
        yDomain={{ min: 0, max: 20 }}
      >
        <VerticalAxis
          tickCount={2}
          theme={{ labels: { formatter: (v) => v.toFixed(2) } }}
        />
        <HorizontalAxis tickCount={5} />
        <Area
          theme={{
            gradient: {
              from: { color: "#2C3E5066" },
              to: { color: "#2C3E5000", opacity: 0.4 },
            },
          }}
        />
        
        <Line
          theme={{
            stroke: { color: "#343558", width: 1 },
            scatter: { default: { width: 4, height: 4, rx: 2 } },
          }}
        />
      </Chart>
    </View>
  );
};

export default InsightGraph;
