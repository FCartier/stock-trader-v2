import React from "react";
import {
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Area, 
  AreaChart,
  ReferenceLine
} from "recharts";

import {calculateMaxValue} from "./utils/calculateMaxValue";

const referenceLabel = (data) => {
  return ({
    position: 'right',  
    value: calculateMaxValue(data), 
    fill: 'orange', 
    fontSize: 14
  });
}

export const Chart = ({data} ) => {
  console.log(data)
  return (
    <ResponsiveContainer>
      <AreaChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 0 }}
      >
      <defs>
      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#72a2e9" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#72a2e9" stopOpacity={0} />
        </linearGradient>
      </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date"/>
        <YAxis
          orientation="right"
          dataKey="value"
          domain={[
            dataMin => Math.ceil(dataMin / 10) * 10 - 10,
            dataMax => {
              return Math.ceil(dataMax / 10) * 10 + 10}
          ]}
          tickLine={false}
        />
        <ReferenceLine y={calculateMaxValue(data)} stroke={'orange'} label={referenceLabel(data)} />
        <Area type="monotone" dataKey="value" stroke="#72a2e9" fillOpacity={1} fill="url(#colorUv)" />
        
      </AreaChart>
    </ResponsiveContainer>
  );
};
