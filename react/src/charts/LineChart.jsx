import React from "react";
import { Chart } from "react-google-charts";
import axios from "axios";

const baseURL="http://localhost:9191/lineChart";



export const options = {
  hAxis: {
    title: "Months",
  },
  vAxis: {
    title: "Units",
  },
  series: {
    1: { curveType: "function" },
  },
};

export function LineChart() {
  const [product,setProduct]=React.useState([]);
  React.useEffect(() => {
    axios.get(baseURL).then((response)=>
    {
      // console.log(response.data[0].productId);
      setProduct(response.data);
    })
  },[]);
  // console.log(product[0]);
  const sales = [
    ["Month", "Sales"],
    ["Jan", product[0]],
    ["Feb", product[1]],
    ["March", product[2]],
    ["April", product[3]],
    ["May",product[4]],
    ["June",product[5]],
    ["July",product[6]],
    ["August", product[7]],
    ["September", product[8]],
    ["October",product[9]],
    ["November",product[10]],
    ["December",product[11]]
    
];
  return (
    
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={sales}
      options={options}
    />
  );
}
