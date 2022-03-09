import React, { useEffect, useRef, useState } from 'react';

const Dropdown = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);
    useEffect(() => {
        function handleClickOut(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)){
                setShowDropdown(false);
            }else {
    
            }
            }
        document.addEventListener("click", handleClickOut);
        return () => {
        document.removeEventListener("click", handleClickOut);
        }
    },[])
    return (
        <div className='relative w-full max-w-[400px]' ref={dropdownRef}>
            <div className="p-5 border border-gray-200 rounded-lg w-full cursor-pointer"
                onClick={() => setShowDropdown(!showDropdown)}
            >Selected</div>
            {showDropdown && (
            <div className="border border-gray-200 rounded-lg absolute top-full left-0 w-full bg-white ">
                <div className="p-5 cursor-pointer">JavaScript</div>
                <div className="p-5 cursor-pointer">PHP</div>
                <div className="p-5 cursor-pointer">HTML</div>
            </div>
            )}
        </div>
    );
};

export default Dropdown;