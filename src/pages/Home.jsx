import React, { useEffect, useState } from 'react';
import '../App.css'
import Images from '../constans/Images';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { CiMenuKebab } from "react-icons/ci";
import { FiMenu } from "react-icons/fi"; 
import { Link } from 'react-router-dom';

const Home = () => {

    const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const typingSpeed = 70; 
  const deletingSpeed = 75; 
  const fullName = " I'm Douaa Khayara";

  useEffect(() => {
    let timeout;

    if (!isDeleting && index <= fullName.length) {
      timeout = setTimeout(() => {
        setDisplayText(fullName.substring(0, index));
        setIndex(index + 1);
      }, typingSpeed);
    } else if (isDeleting && index >= 0) {
      timeout = setTimeout(() => {
        setDisplayText(fullName.substring(0, index));
        setIndex(index - 1);
      }, deletingSpeed);
    }


    if (index === fullName.length + 1) {
      setTimeout(() => setIsDeleting(true), 1000);
    }

    if (index === -1) {
      setIsDeleting(false);
      setIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);
    return (
       <>
 
  <>
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
    rel="stylesheet"
  />

  <video
    src={Images.video}
    autoPlay
    loop
    muted
    className="fixed top-0 left-0 w-full h-full object-cover -z-10"
  ></video>

  <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0"></div>

 
  <FiMenu className="absolute top-5 right-6 text-white text-3xl z-20 cursor-pointer hover:text-blue-300 transition" />

  <section
    id="home"
    className="relative w-full h-screen flex items-center justify-center px-6 lg:px-24 text-white z-10 font-[Poppins]"
  >
    <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div className="text-center lg:text-left space-y-5">
        <div className='h-[30vh]  w-[28vw] pb-9'>
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-[#ffcb10]">
          {displayText}
        </h1>
        </div>
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#7c765f]">
          Front-End Web Developer
        </h2>
        <p className="text-[#7c765f] text-lg">
          I create elegant, interactive, and responsive websites using modern technologies like React and Tailwind CSS.
        </p>

        <div className="flex justify-center lg:justify-start gap-4 pt-4">
         <Link to={'/portfolio'}> <button className="bg-[#427F54] text-black px-6 py-2 rounded-full font-semibold hover:opacity-90 transition">
            Portfolio
          </button></Link>
          <Link to={'/contact'}><button className="border-2 text-white px-6 py-2 rounded-full font-semibold hover:bg-[#427F54] hover:text-black transition">
            Contact
          </button></Link>
        </div>
      </div>
      <div className="flex justify-center lg:justify-end">
        <img
          src={Images.imge}
          alt="Profile"
          className="w-[340px] h-[380px] object-cover rounded-[2rem] shadow-2xl shadow-black/40"
        />
      </div>
    </div>
  </section>
</>

</>

    );
};

export default Home;