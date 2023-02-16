import React, { useEffect, useState } from "react";
import { filterData } from "../../utils/utils";

const Filter = ({ properties, setFilteredProperties }) => {
  const [search, setSearch] = useState({
    name: "",
    price: "",
    location: "",
    type: "",
    date: "",
  });

  const handleSearchQueryChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilteredProperties(filterData(search, properties));
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
          className="bg-gray-200 px-4 py-2 rounded-md placeholder:text-gray-600 font-semibold"
          type="text"
          placeholder="Search Properties"
          name="name"
          onChange={(e) => handleSearchQueryChange(e)}
        />
      </div>
      <div className="flex items-center justify-between ">
        <div>
          <p>Location</p>
          <input
            className="w-[12rem]"
            type="text"
            placeholder="Enter Location"
            name="location"
            onChange={(e) => handleSearchQueryChange(e)}
          />
        </div>
        <div>
          <p>When</p>
          <input
            className="w-[12rem]"
            type="date"
            placeholder="Enter date"
            onChange={(e) => handleSearchQueryChange(e)}
            name="date"
          />
        </div>
        <div>
          <p>Price</p>
          <input
            className="w-[12rem]"
            type="text"
            placeholder="Enter Price"
            name="price"
            onChange={(e) => handleSearchQueryChange(e)}
          />
        </div>
        <div>
          <p>Type</p>
          <select
            name="type"
            id="type"
            onChange={(e) => handleSearchQueryChange(e)}
          >
            <option value="">All </option>
            <option value="complex">Complex </option>
            <option value="apartment">Apartment </option>
          </select>
        </div>

        <button className="bg-[#6f60f2] px-5 rounded-md py-2 text-white">
          Search
        </button>
      </div>
    </div>
  );
};

export default Filter;
