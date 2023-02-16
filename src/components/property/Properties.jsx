import React, { useState } from "react";
import Property from "./property";
import { propertiesData } from "../../../data/data";
import Filter from "./Filter";

function Properties() {
  const [filteredProperties, setFilteredProperties] = useState(propertiesData);
  console.log(filteredProperties);

  return (
    <div className="flex flex-col">
      <Filter
        properties={propertiesData}
        setFilteredProperties={setFilteredProperties}
      />

      <div className="p-4 bg-gray-300  mb-[2rem] mx-[7rem]">
        Try searching for <span className="mx-1">property</span> In{" "}
        <span className="mx-1">delhi</span> on
        <span className="mx-1">26-Feb-2023</span>
      </div>

      <div className="flex justify-center items-center flex-wrap gap-[2rem]">
        {filteredProperties.length === 0 && (
          <div className="h-[10rem] flex justify-center items-center">
            <p className="text-3xl font-medium text-[#6f60f2]">
              No Result Matches the Applied Filter
            </p>
          </div>
        )}
        {filteredProperties &&
          filteredProperties.map((property) => (
            <Property key={property.name} property={property} />
          ))}
      </div>
    </div>
  );
}

export default Properties;
