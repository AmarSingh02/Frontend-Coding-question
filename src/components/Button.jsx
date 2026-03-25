import React from 'react';

const Button = ({ onClick, text, className = "" }) => {
  const defaultStyle = `
    px-4 py-2 
    text-black 
    bg-white 
    shadow-md 
    rounded 
    hover:shadow-lg 
    transition 
    duration-200
  `;

  return (
    <button onClick={onClick} className={`${defaultStyle} ${className}`}>
      {text}
    </button>
  );
};

export default Button;
