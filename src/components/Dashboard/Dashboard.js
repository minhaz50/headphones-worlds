import React, { useEffect, useState } from "react";
import { Line, LineChart, XAxis, YAxis } from "recharts";

const Dashboard = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("data1.json").then((data) => setProduct(data));
  }, []);

  return (
    <LineChart width={1000} height={500} data={product}>
      <Line dataKey={product.investment}></Line>
      <Line dataKey={product.sell}></Line>
      <XAxis dataKey={product.month}></XAxis>
      <YAxis></YAxis>
    </LineChart>
  );
};

export default Dashboard;
