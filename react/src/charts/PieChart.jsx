import React from "react";
import { Chart } from "react-google-charts";
import axios from "axios";
const baseURL="http://localhost:9191/totalProduct";
const baseURL2="http://localhost:9191/totalInventory";


export const options = {
  title: "Inventory",
  pieHole: 0.4,
  is3D: false,
};

export function PieChart() {
  const [product,setProduct]=React.useState([]);
  const [post,setPost]=React.useState([]);
  React.useEffect(() => {
    axios.get(baseURL).then((response)=>
    {
      // console.log(response.data[0].productId);
      setProduct(response.data);
    })
  },[]);
  React.useEffect(() => {
    axios.get(baseURL2).then((response)=>
    {
      // console.log(response.data[0].productId);
      setPost(response.data);
    })
  },[]);
  const data = [
    ["Task", "Hours per Day"],
    ["Sold", product],
    ["Left", post],
  ];
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
