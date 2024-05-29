import React, { useState } from 'react';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All Categories");
  const options = ['All Categories', 'Chair', 'Table'];

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative hidden md:block">
      <button onClick={handleButtonClick} className="ml-10 font-bold py-2 px-4 rounded ring-1 ring-black">
        <div className='flex flex-wrap'>
        {selectedOption}
        <ArrowDropDownOutlinedIcon />
        </div>
      </button>
      {isOpen && (
        <div className="absolute mt-1 w-40 bg-white rounded shadow-lg">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-200"
            >
              {option}
            </div>
          ))}
        </div>
      )}
      {selectedOption  && ""}
    </div>
  );
}

export default Dropdown;
