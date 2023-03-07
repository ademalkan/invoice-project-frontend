import Image from "next/image";
import { useState, useRef, useEffect } from "react";

function FilterMenu({ options, setOptions }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleOptionChange = (event) => {
    const { name, checked } = event.target;
    setOptions((prevState) => ({ ...prevState, [name]: checked }));
    console.log(options);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="lg:w-2/5 mr-4 lg:mr-0 relative" ref={menuRef}>
      <button
        className="flex items-center w-full font-bold justify-between"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        Filter{" "}
        <Image
          src="/starter-code/assets/icon-arrow-down.svg"
          alt="Loog"
          width={12}
          height={12}
          className="pl-1"
        />
      </button>
      {menuOpen && (
        <div className="absolute  bg-light rounded-xl shadow-xl lg:top-10 top-16  p-5 w-44 flex flex-col items-start justify-center">
          <label className="mb-2 flex items-center justify-center">
            <input
              type="checkbox"
              name="draft"
              value="draft"
              checked={options.option1}
              onChange={handleOptionChange}
              className="mr-2"
            />
            Draft
          </label>
          <label className="mb-2 flex items-center justify-center">
            <input
              type="checkbox"
              name="pending"
              value="pending"
              checked={options.option2}
              onChange={handleOptionChange}
              className="mr-2"
            />
            Pending
          </label>
          <label className="mb-2 flex items-center justify-center">
            <input
              type="checkbox"
              name="paid"
              value="paid"
              checked={options.option3}
              onChange={handleOptionChange}
              className="mr-2"
            />
            Paid
          </label>
        </div>
      )}
    </div>
  );
}

export default FilterMenu;
