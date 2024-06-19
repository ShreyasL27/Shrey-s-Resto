import { CDN_URL } from "../utils/constants";

const RestoCard = ({ resData }) => {
  // const { imgSrc, resName, rating, estTime, cuisine, location } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    sla,
    cuisines,
    areaName,
    costForTwo,
  } = resData.info;
  // console.log(resData);

  return (
    <div
      data-testid="resCard"
      className="bg-orange-50 border border-solid p-1 w-48 h-80 cursor-pointer mb-3 mx-3 whitespace-nowrap overflow-hidden text-ellipsis hover:shadow-xl rounded-lg"
    >
      <img
        className="w-full h-1/2 mb-3 rounded-lg"
        alt="resto-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="ml-1 whitespace-nowrap overflow-hidden text-ellipsis text-lg font-semibold">
        {name}
      </h3>
      <h4 className="font-medium">
        ⭐{avgRating} •<span className="ml-1">{sla.slaString}</span>
      </h4>
      <h4 className="ml-1 mt-4">{costForTwo}</h4>
      <h5 className="ml-1 whitespace-nowrap overflow-hidden text-ellipsis">
        {cuisines.join(", ")}
      </h5>
      <h5 className="ml-1">{areaName}</h5>
    </div>
  );
};

// Higher Order Component
// In our case, swiggy no more promotes any restaurant so this won't work
export const withPromotedLabel = (RestoCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestoCard {...props} />
      </div>
    );
  };
};

export default RestoCard;
