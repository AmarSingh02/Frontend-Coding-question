import React from 'react';

const Popup = ({ isOpen, onClose, title = "Popup Title", children }) => {
  if (!isOpen) return null; 

  return (
    <div 
    
    
    style={{position:'fixed', placeItems:'center' , background:'#00000003', opacity:'70'}}>
      <div style={{position:'relative', boxShadow:'0 2px 4px black', padding:'20px'}}>
        <h2 className="">{title}</h2>
        <div className="">{children}</div>

        <button
          onClick={onClose}
          className="bg-red-500 text-white px-4 py-2 rounded"
          style={{background:'red', color:'#fff'}}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
