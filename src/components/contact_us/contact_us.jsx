import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import CallIcon from "@mui/icons-material/Call";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Modal from "./Modal";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ContactUs() {
  const query = useQuery();
  const name = query.get("name");
  const [showMore, setShowMore] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [];

  // Extracting image parameters from the URL
  query.forEach((value, key) => {
    if (key.startsWith("image")) {
      images.push(value);
    }
  });

  // Function to toggle More section
  const toggleMore = () => {
    setShowMore(!showMore);
  };

  // Function to open selected image in modal popup
  const openModal = (image) => {
    setSelectedImage(image);
  };

  // Function to close modal popup
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex justify-center px-4 md:px-0">
      <div className="w-full lg:w-1/2 mt-10">
        {name && images.length > 0 && (
          <div className="bg-gray-700 shadow-md text-white text-center text-3xl font-bold rounded-lg mb-10 transition-transform duration-300 hover:scale-105 hover:shadow-blue-700">
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-2">
              {images
                .slice(0, showMore ? images.length : 6)
                .map((image, index) => (
                  <div
                    key={index}
                    onClick={() => openModal(image)}
                    className="cursor-pointer"
                  >
                    <img
                      src={image}
                      alt={`${name}-${index}`}
                      className="h-48 w-full object-cover rounded-md hover:opacity-80"
                    />
                  </div>
                ))}
            </div>
            {images.length > 6 && (
              <div
                onClick={toggleMore}
                className="cursor-pointer text-white mt-4 flex justify-center"
              >
                <button className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border-2 border-blue-500 text-blue-500 font-bold py-2 px-4 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110 active:scale-95 active:shadow-inner flex items-center justify-center">
                  {showMore ? (
                    <ArrowBackIcon />
                  ) : (
                    <>
                      <ViewComfyIcon />
                      <span className="ml-2">See All</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        )}
        <div className="bg-green-600 shadow-md text-white text-center text-3xl font-bold rounded-lg mb-10 transition-transform duration-300 hover:scale-105 hover:shadow-blue-700">
          <div className="h-20 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10">
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
              Call now for Order:
            </span>
            <span className="ml-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">
              <CallIcon />
            </span>
            <span className="ml-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">
              7976140566.
            </span>
          </div>
        </div>

        <div className="shadow-lg border-2 border-black bg-neutral-500 rounded-2xl mb-10 transition-transform duration-300 hover:scale-105 hover:shadow-blue-700">
          <p className="text-center text-xl font-bold text-white mt-20">
            Address
          </p>
          <hr className="mt-1 mb-1 mx-20" />
          <p className="text-md font-semibold text-white mx-6 text-center">
            PLOT NO. F-73A, Road Number 2, RIICO INDUSTRIAL AREA,
            <br /> Churu Rajasthan 331001
          </p>
          <p className="text-center text-xl font-bold text-white mt-10">
            Contact
          </p>
          <hr className="mt-1 mb-1 mx-20" />
          <p className="text-md font-semibold text-white mx-6 text-center">
            7976140566
          </p>
          <p className="text-center text-xl font-bold text-white mt-10">
            Email
          </p>
          <hr className="mt-1 mb-1 mx-20" />
          <p className="text-md font-semibold text-white mb-20 mx-6 text-center">
            satyamcreationsashish@gmail.com
          </p>
        </div>
      </div>

      {/* Modal Popup for Image Display */}
      {selectedImage && (
        <Modal closeModal={closeModal}>
          <div className="flex justify-center">
            <img
              src={selectedImage}
              alt="selected"
              className="max-h-screen max-w-full"
            />
          </div>
        </Modal>
      )}
    </div>
  );
}

export default ContactUs;
