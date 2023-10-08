import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Admindashboard() {



  return (
    <>
      <div className="grid grid-cols-1 col-span-12 lg:col-span-10 gap-6 md:grid-cols-3 lg:grid-cols-4  p-4">
        <article className="flex flex-col gap-4 rounded-lg border  border-gray-100 bg-white p-6">
          <div>
          <Link to="/teacher">
                {/* <div className="flex items-center gap-2">
                  <img
                    alt="inventory-icon"
                    src={require("../assets/inventory-icon.png")}
                  />
                  <span className="text-sm font-medium"> Student </span>
                </div> */}   
                         <button type="button" name="button" id="sec">Teacher</button>
              </Link>

          </div>
        </article>

        <article className="flex flex-col gap-4 rounded-lg border  border-gray-100 bg-white p-6">
          <div>
          <Link to="/logs">
                {/* <div className="flex items-center gap-2">
                  <img
                    alt="inventory-icon"
                    src={require("../assets/inventory-icon.png")}
                  />
                  <span className="text-sm font-medium"> Student </span>
                </div> */}   
                         <button type="button" name="button" id="sec">Logs</button>
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

export default Admindashboard;
