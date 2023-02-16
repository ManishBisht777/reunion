import React, { useEffect, useState } from "react";

const Filter = ({ properties, setFilteredProperties }) => {
  const [search, setSearch] = useState("");

  const filterData = (searchQuery) => {
    const lowerValue = searchQuery.toLowerCase();

    const filteredData = properties.filter((property) => {
      return property.name.toLowerCase().includes(lowerValue);
    });

    return filteredData;
  };

  useEffect(() => {
    if (!search) setFilteredProperties(properties);

    const timer = setTimeout(() => {
      setFilteredProperties(filterData(search));
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div className="mx-[7rem] flex flex-col gap-5 mb-[2rem]">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Search Properties to Rent
        </h2>
        <input
          className="bg-gray-200 px-4 py-2 rounded-md placeholder:text-gray-600"
          type="text"
          placeholder="Search Properties"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p>Location</p>
          <input
            className="w-[12rem]"
            type="text"
            placeholder="Enter Location"
          />
        </div>
        <div>
          <p>Location</p>
          <input
            className="w-[12rem]"
            type="text"
            placeholder="Enter Location"
          />
        </div>
        <div>
          <p>Location</p>
          <input
            className="w-[12rem]"
            type="text"
            placeholder="Enter Location"
          />
        </div>
        <div>
          <p>Location</p>
          <input
            className="w-[12rem]"
            type="text"
            placeholder="Enter Location"
          />
        </div>

        <button className="bg-[#6f60f2] px-5 rounded-md py-2 text-white">
          Search
        </button>
      </div>
    </div>
  );
};

export default Filter;
