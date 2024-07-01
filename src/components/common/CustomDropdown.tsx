import React, { useState } from "react";

interface CustomTokenProps {
  tokens: Token[];
  selectedToken: Token | null;
  setSelectedToken: (token: Token | null) => void;
}
const CustomDropdown = (props: CustomTokenProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (token: any) => {
    props.setSelectedToken(token);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-full">
      <div
        className="flex items-center space-x-4 p-3 bg-white rounded-lg shadow-md cursor-pointer border border-gray-300 "
        onClick={toggleDropdown}
      >
        {props.selectedToken && (
          <img
            src={props.selectedToken?.logoURI}
            alt="Logo"
            className="h-10 w-10"
          />
        )}
        <div className="w-full">
          <div className="block text-sm font-medium text-gray-700">
            {props.selectedToken
              ? props.selectedToken.name
              : "Select Destination"}
          </div>
        </div>
        <svg
          className={`w-5 h-5 transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
      {isOpen && (
        <ul className="absolute z-10 mt-1 overflow-auto max-h-56 w-full absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          {props.tokens.map((token) => (
            <li
              key={token.address}
              className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(token)}
            >
              <img
                src={token.logoURI}
                alt={token.name}
                className="h-6 w-6 mr-2"
              />
              <span className="block text-sm font-medium text-gray-700">
                {token.name}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
