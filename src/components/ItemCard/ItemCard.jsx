import React from "react";
import { Link } from "react-router-dom";

function ItemCard(props) {
  // Convert single imagePath1 to an array if it's not already
  const imagePaths = Array.isArray(props.imagePath1)
    ? props.imagePath1
    : [props.imagePath1];

  return (
    <div
      className="h-auto w-72 bg-gray-700 mr-2 border-black border-0 rounded-lg shadow-md shadow-black hover:drop-shadow-lg mt-4 lg:mt-0
        transition-transform duration-300 hover:scale-105 hover:shadow-blue-700"
    >
      <div className="bg-gray-500 h-72 w-72 rounded-t-lg overflow-hidden">
        {imagePaths.map((image, index) => (
          <img
            key={index}
            className="h-72 w-full object-cover"
            src={image}
            alt={`${props.name}-${index}`}
          />
        ))}
      </div>
      <center>
        <div className="text-white font-bold">{props.name}</div>
      </center>

      <div className="justify-center rounded-lg">
        <center>
          <Link
            to={`/contact?name=${encodeURIComponent(props.name)}&${imagePaths
              .map(
                (image, index) =>
                  `image${index + 1}=${encodeURIComponent(image)}`
              )
              .join("&")}`}
          >
            <button className="bg-white h-8 w-56 m-3 text-lg font-bold rounded-lg">
              View More
            </button>
          </Link>
        </center>
      </div>
    </div>
  );
}

export default ItemCard;
