import React, { PureComponent, useMemo } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import data from "./data.json";

export default function Chart() {
  //   static demoUrl = 'https://codesandbox.io/s/stacked-bar-chart-s47i2';

  // data 상위 5개 구하기 알고리즘
  const _data = useMemo(() => {
    return data
      .map((it) => {
        let totalCount = 0;
        Object.keys(it).forEach((t2) => {
          if (typeof it[t2] === "number") {
            totalCount = totalCount + it[t2];
          }
        });
        return {
          ...it,
          totalCount: totalCount,
        };
      })
      .sort((a1, a2) => {
        return a2.totalCount - a1.totalCount;
      })
      .filter((_, index) => index < 5);
  }, [data]);

  // console.log(_data);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={_data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="15 0" />
        <XAxis dataKey="Food product" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          name="글로벌 평균 GHG 배출량(kg)"
          dataKey="Total Global Average GHG Emissions per kg"
          stackId="a"
          fill="#1a2e91"
        />
        <Bar
          name="토지부터 소매 총액"
          dataKey="Total from Land to Retail"
          stackId="a"
          fill="#0045a5"
        />
        <Bar name="양식장" dataKey="Farm" stackId="a" fill="#0069c0" />
        <Bar
          name="토지 이용"
          dataKey="Land Use Change"
          stackId="a"
          fill="#008ac5"
        />
        <Bar name="식량" dataKey="Feed" stackId="a" fill="#00a9b5" />
        <Bar name="처리" dataKey="Processing" stackId="a" fill="#00c698" />
        <Bar name="운송" dataKey="Transport" stackId="a" fill="#1fe074" />
        <Bar name="포장재" dataKey="Packaging" stackId="a" fill="#2dedb0" />
        <Bar name="소매" dataKey="Retail" stackId="a" fill="#51cff5" />
      </BarChart>
    </ResponsiveContainer>
  );
}
