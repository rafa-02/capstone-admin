import React, { useContext, useEffect, useState } from "react";
// import Chart from "react-apexcharts";
// import AuthContext from "../AuthContext";
// import { Doughnut } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Link } from "react-router-dom";

// ChartJS.register(ArcElement, Tooltip, Legend);
// export const data = {
//   labels: ["Apple", "Knorr", "Shoop", "Green", "Purple", "Orange"],
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [0, 1, 5, 8, 9, 15],
//       backgroundColor: [
//         "rgba(255, 99, 132, 0.2)",
//         "rgba(54, 162, 235, 0.2)",
//         "rgba(255, 206, 86, 0.2)",
//         "rgba(75, 192, 192, 0.2)",
//         "rgba(153, 102, 255, 0.2)",
//         "rgba(255, 159, 64, 0.2)",
//       ],
//       borderColor: [
//         "rgba(255, 99, 132, 1)",
//         "rgba(54, 162, 235, 1)",
//         "rgba(255, 206, 86, 1)",
//         "rgba(75, 192, 192, 1)",
//         "rgba(153, 102, 255, 1)",
//         "rgba(255, 159, 64, 1)",
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

function Dashboard() {
  // const [stores, setStores] = useState([]);
  // const [products, setProducts] = useState([]);

  // const [chart, setChart] = useState({
  //   options: {
  //     chart: {
  //       id: "basic-bar",
  //     },
  //     xaxis: {
  //       categories: [
  //         "Jan",
  //         "Feb",
  //         "Mar",
  //         "Apr",
  //         "May",
  //         "Jun",
  //         "Jul",
  //         "Aug",
  //         "Sep",
  //         "Oct",
  //         "Nov",
  //         "Dec",
  //       ],
  //     },
  //   },
  //   series: [
  //     {
  //       name: "series",
  //       data: [10, 20, 40, 50, 60, 20, 10, 35, 45, 70, 25, 70],
  //     },
  //   ],
  // });

  // // Update Chart Data
  // const updateChartData = (salesData) => {
  //   setChart({
  //     ...chart,
  //     series: [
  //       {
  //         name: "Monthly Sales Amount",
  //         data: [...salesData],
  //       },
  //     ],
  //   });
  // };

  // const authContext = useContext(AuthContext);

  // useEffect(() => {
  //   fetchStoresData();
  //   fetchProductsData();
  //   fetchMonthlySalesData();
  // }, []);

  


  // // Fetching all stores data
  // const fetchStoresData = () => {
  //   fetch(`http://localhost:4000/api/store/get/${authContext.user}`)
  //     .then((response) => response.json())
  //     .then((datas) => setStores(datas));
  // };

  // // Fetching Data of All Products
  // const fetchProductsData = () => {
  //   fetch(`http://localhost:4000/api/product/get/${authContext.user}`)
  //     .then((response) => response.json())
  //     .then((datas) => setProducts(datas))
  //     .catch((err) => console.log(err));
  // };

  // // Fetching Monthly Sales
  // const fetchMonthlySalesData = () => {
  //   fetch(`http://localhost:4000/api/sales/getmonthly`)
  //     .then((response) => response.json())
  //     .then((datas) => updateChartData(datas.salesAmount))
  //     .catch((err) => console.log(err));
  // };



  return (
    <>
      <div className="grid grid-cols-1 col-span-12 lg:col-span-10 gap-6 md:grid-cols-3 lg:grid-cols-4  p-4">
        <article className="flex flex-col gap-4 rounded-lg border  border-gray-100 bg-white p-6">
          <div>
          <Link to="/subjects">
                {/* <div className="flex items-center gap-2">
                  <img
                    alt="inventory-icon"
                    src={require("../assets/inventory-icon.png")}
                  />
                  <span className="text-sm font-medium"> Student </span>
                </div> */}   
                         <button type="button" name="button" id="sec">Subject</button>
              </Link>

          </div>
        </article>

        <article className="flex flex-col gap-4 rounded-lg border  border-gray-100 bg-white p-6">
          <div>
          <Link to="">
                {/* <div className="flex items-center gap-2">
                  <img
                    alt="inventory-icon"
                    src={require("../assets/inventory-icon.png")}
                  />
                  <span className="text-sm font-medium"> Student </span>
                </div> */}   
                         <button type="button" name="button" id="sec">Subject</button>
              </Link>

          </div>
        </article>

        <article className="flex flex-col gap-4 rounded-lg border  border-gray-100 bg-white p-6">
          <div>
          <Link to="">
                {/* <div className="flex items-center gap-2">
                  <img
                    alt="inventory-icon"
                    src={require("../assets/inventory-icon.png")}
                  />
                  <span className="text-sm font-medium"> Student </span>
                </div> */}   
                         <button type="button" name="button" id="sec">Subject</button>
              </Link>

          </div>
        </article>

        <article className="flex flex-col gap-4 rounded-lg border  border-gray-100 bg-white p-6">
          <div>
          <Link to="/inventory">
                {/* <div className="flex items-center gap-2">
                  <img
                    alt="inventory-icon"
                    src={require("../assets/inventory-icon.png")}
                  />
                  <span className="text-sm font-medium"> Student </span>
                </div> */}   
                         <button type="button" name="button" id="sec">Subject</button>
              </Link>

          </div>
        </article>
      </div>
      
      {/* <div className="grid grid-cols-1 col-span-12 lg:col-span-10 gap-6 md:grid-cols-3 lg:grid-cols-4  p-4 ">
        <article className="flex flex-col gap-4 rounded-lg border  border-gray-100 bg-white p-6  ">
         <div>
            <strong className="block text-sm font-medium text-gray-500">
              Section1
            </strong>
              </div>
        </article>

        <article className="flex flex-col  gap-4 rounded-lg border border-gray-100 bg-white p-6 ">
          <div>
            <strong className="block text-sm font-medium text-gray-500">
              Section 2 
            </strong>

          
          </div>
        </article>
        <article className="flex flex-col   gap-4 rounded-lg border border-gray-100 bg-white p-6 ">
          
          <div>
            <strong className="block text-sm font-medium text-gray-500">
              Section3
            </strong>
          </div>
        </article>
        <article className="flex flex-col   gap-4 rounded-lg border border-gray-100 bg-white p-6 ">
          <div>
            <strong className="block text-sm font-medium text-gray-500">
             Section4
            </strong>

            <p>
              <span className="text-2xl font-medium text-gray-900">
                {" "}
                {stores.length}{" "}
              </span>
            </p>
          </div>
        </article>
        <div className="flex justify-around bg-white rounded-lg py-8 col-span-full justify-center">
          <div>
            <Chart
              options={chart.options}
              series={chart.series}
              type="bar"
              width="500"
            />
          </div>
          <div>
            <Doughnut data={data} />
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Dashboard;
