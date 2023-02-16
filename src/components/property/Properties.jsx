import React from "react";
import Property from "./property";
import { propertiesData } from "../../../data/data";

function Properties() {
  console.log(propertiesData);
  return (
    <div className="flex justify-center items-center flex-wrap gap-[2rem]">
      {propertiesData &&
        propertiesData.map((property) => (
          <Property key={property.name} property={property} />
        ))}
    </div>
  );
}

export default Properties;
