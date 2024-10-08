/* eslint-disable react/prop-types */
import Svg01 from "../svg/propertiesSvg/propertiesSvg01";
import Svg02 from "../svg/propertiesSvg/propertiesSvg02";

const PropertiesCard = ({ title, price, bedroom, bathroom, image }) => {
  return (
    <div className="p-4 bg-white rounded-lg border border-gray-600/10">
      <img src={image} alt="property" />

      <div className="p-6">
        <h4 className="text-2xl font-bold cursor-pointer">{title}</h4>

        <div className="mt-2">
          <span className="text-xl font-extrabold text-blue-600">${price}</span>{" "}
          /M
        </div>
      </div>
      <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
        <div className="flex items-center">
          <Svg01 />
          <p>
            <span className="font-bold text-gray-900">{bedroom}</span> Bedrooms
          </p>
        </div>
        <div className="flex items-center">
          <Svg02 />
          <p>
            <span className="font-bold text-gray-900">{bathroom}</span>{" "}
            Bathrooms
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertiesCard;
