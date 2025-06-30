import { useState } from "react";
import { FiX, FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "My Work", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
     
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed top-4 right-4 z-50 text-white text-3xl p-2 bg-[#051B0C]/95 rounded-md shadow-md hover:bg-[#00FF66]/80 transition duration-300"
          aria-label="Open menu"
        >
          <FiMenu />
        </button>
      )}

      
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-[#051B0C]/95 border-l border-[#00FF66]/20 shadow-xl z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
       
        <div className="flex justify-end p-4">
          <button onClick={() => setOpen(false)} aria-label="Close menu">
            <FiX className="text-white text-3xl hover:text-red-400 transition duration-200" />
          </button>
        </div>

  
        <ul className="flex flex-col items-center gap-6 mt-10 text-lg font-medium text-white font-[Poppins]">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                onClick={() => setOpen(false)} 
                className="hover:text-[#00FF66] transition duration-200"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
