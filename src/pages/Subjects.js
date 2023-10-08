import React from "react";

function Subjects() {
  return (
    <div className="col-span-12 lg:col-span-10  flex justify-center">
      <div className=" flex flex-col gap-5 w-11/12">

       
        {/* Table  */}
        <div className="overflow-x-auto rounded-lg border bg-white border-gray-200 ">
          <div className="flex justify-between pt-5 pb-3 px-3">
            <div className="flex gap-4 justify-center items-center ">
              <span className="font-bold"> Subjects </span>
              {/* <div className="flex justify-center items-center px-2 border-2 rounded-md ">
                <img
                  alt="search-icon"
                  className="w-5 h-5"
                  src={require("../assets/search-icon.png")}
                />
                <input
                  className="border-none outline-none focus:border-none text-xs"
                  type="text"
                  placeholder="Search here"
                  value={searchTerm}
                  onChange={handleSearchTerm}
                />
              </div> */}
            </div>
            <div className="flex gap-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 text-xs  rounded"
               //  onClick={addsubject}
              >
                Add Subject
              </button>
            </div>
          </div>

          <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
            <thead>
              <tr>
                
                <th className="whitespace-nowrap px-10 py-3 text-left font-medium text-gray-900">
                  Subject Code
                </th>

                <th className="whitespace-nowrap px-10 py-3 text-left font-medium text-gray-900">
                  Description
                </th>

                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Section
                </th>

                <th className="whitespace-nowrap px-20 py-3 text-left font-medium text-gray-900">
                  More
                </th>

              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
                  <tr 
                     // key={element._id}
                     >
                    <td className="whitespace-nowrap px-10 py-2  text-gray-900">
                      {/* {element.name} */}

                    </td>
                    {/* Account */}
                    <td className="whitespace-nowrap px-10 py-2 text-gray-700">
                      {/* {element.manufacturer} */}
                    </td>

                    {/* ID */}
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {/* {element.description} */}
                    </td>
                    {/* <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {element.stock > 0 ? "In Stock" : "Not in Stock"}
                    </td> */}
                    {/* more */}
                    <td className="whitespace-nowrap px-10 py-2 text-gray-700">
                      <span
                        className="text-green-700 px-2 cursor-pointer"
                        // onClick={}
                      >
                        Students
                        {/* links to Students.js when clicked */}
                      </span>
                    </td>
                  </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Subjects;
