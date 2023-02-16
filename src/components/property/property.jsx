import img from "../../assets/bg.png";

import bed from "../../assets/icons/Bed.svg";
import Shower from "../../assets/icons/Shower.svg";
import Size from "../../assets/icons/Size.svg";

function Property({ property }) {
  return (
    <div className="rounded-md bg-white relative w-[16rem]">
      <img className="w-[16rem] rounded-t-md" src={img} alt="" />
      <div className="flex flex-col gap-1 mt-2 p-3 ">
        <div className="">
          <h2 className="text-[#6f60f2] text-2xl font-bold">
            ${property.price}
            <span className="text-gray-400 text-sm mt-[1rem]">
              /{property.period}
            </span>
          </h2>
        </div>
        <h2 className="text-gray-800 text-lg font-bold">{property.name}</h2>
        <p className="text-gray-500 text-sm">{property.desc}</p>
        <div className="text-gray-500 flex gap-3 text-sm mt-1">
          <div className="flex gap-1">
            <img src={Shower} alt="" /> <span>{property.beds} beds</span>
          </div>
          <div className="flex gap-1">
            <img src={bed} alt="" /> <span>{property.shower} shower</span>
          </div>
          <div className="flex gap-1">
            <img src={Size} alt="" /> <span>{property.size} </span>
          </div>
        </div>
      </div>
      {property.isPopular && (
        <p className="bg-[#6f60f2] px-2 py-1 text-sm text-white font-bold rounded w-fit absolute top-2 right-2">
          Popular
        </p>
      )}
    </div>
  );
}

export default Property;
