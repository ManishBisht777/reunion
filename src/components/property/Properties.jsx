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
      <div className="flex justify-center items-center flex-wrap gap-[2rem]">
        {filteredProperties &&
          filteredProperties.map((property) => (
            <Property key={property.name} property={property} />
          ))}
      </div>
    </div>
  );
}

export default Properties;
