import React, { useEffect, useState } from "react";
import Property from "./property";
import { propertiesData } from "../../../data/data";
import Filter from "./Filter";

function Properties() {
  const [properties, setProperties] = useState();
  const [filteredProperties, setFilteredProperties] = useState(propertiesData);

  useEffect(() => {
    setProperties(propertiesData);
  }, []);

  return (
    <div className="flex flex-col">
      <Filter
        properties={properties}
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
