import Image from "next/image";
import { useState, useRef, useEffect } from "react";

function FilterMenu() {
  const [options, setOptions] = useState({
    option1: false,
    option2: false,
    option3: false,
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleOptionChange = (event) => {
    const { name, checked } = event.target;
    setOptions((prevState) => ({ ...prevState, [name]: checked }));
    // Burada filtreleme işlemlerini yapabilirsiniz
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
    <div className="w-2/5 relative" ref={menuRef}>
      <button
        className="flex items-center w-full font-bold justify-between"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        Filter by status{" "}
        <Image
          src="/starter-code/assets/icon-arrow-down.svg"
          alt="Loog"
          width={12}
          height={12}
        />
      </button>
      {menuOpen && (
        <div className="absolute   rounded-xl shadow-xl top-10  p-5 w-44 flex flex-col items-start justify-center">
          <label className="mb-2 flex items-center justify-center">
            <input
              type="checkbox"
              name="option1"
              checked={options.option1}
              onChange={handleOptionChange}
              className="mr-2"
            />
            Draft
          </label>
          <label className="mb-2 flex items-center justify-center">
            <input
              type="checkbox"
              name="option2"
              checked={options.option2}
              onChange={handleOptionChange}
              className="mr-2"
            />
            Pending
          </label>
          <label className="mb-2 flex items-center justify-center">
            <input
              type="checkbox"
              name="option3"
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
