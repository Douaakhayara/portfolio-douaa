import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiGithub } from "react-icons/si";
import { FaMobileAlt } from "react-icons/fa"; 
import { FaSass, FaBootstrap } from "react-icons/fa";
import Images from '../constans/Images';

import '../App.css'


const Skills = () => {
    return (
        <div>
            <section id="skills" className="w-full bg-green-800/30 text-gray-800 py-16 px-6 lg:px-24">
                 <video
                                        src={Images.video}
                                        autoPlay
                                        loop
                                        muted
                                        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
                                      ></video>
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-extrabold mb-12 text-amber-100">My Skills</h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 place-items-center">
   
      <div className="flex flex-col items-center gap-3">
        <FaHtml5 className="text-orange-600 text-6xl" />
        <span className="font-semibold text-amber-100">HTML</span>
      </div>

      <div className="flex flex-col items-center gap-3">
        <FaCss3Alt className="text-blue-600 text-6xl" />
        <span className="font-semibold text-amber-100">CSS</span>
      </div>

      <div className="flex flex-col items-center gap-3">
        <FaJs className="text-yellow-400 text-6xl" />
        <span className="font-semibold text-amber-100">JavaScript</span>
      </div>

      <div className="flex flex-col items-center gap-3">
        <FaReact className="text-cyan-500 text-6xl animate-spin-slow" />
        <span className="font-semibold text-amber-100">React</span>
      </div>

      <div className="flex flex-col items-center gap-3">
        <SiTailwindcss className="text-sky-400 text-6xl" />
        <span className="font-semibold text-amber-100 ">Tailwind CSS</span>
      </div>

      <div className="flex flex-col items-center gap-3">
        <FaGitAlt className="text-red-600 text-6xl" />
        <span className="font-semibold text-amber-100">Git</span>
      </div>

      <div className="flex flex-col items-center gap-3">
        <SiGithub className="text-black text-6xl" />
        <span className="font-semibold text-amber-100">GitHub</span>
      </div>

     
<div className="flex flex-col items-center gap-3">
  <FaSass className="text-pink-500 text-6xl" />
  <span className="font-semibold text-amber-100">Sass</span>
</div>

<div className="flex flex-col items-center gap-3">
  <FaBootstrap className="text-indigo-600 text-6xl" />
  <span className="font-semibold text-amber-100">Bootstrap</span>
</div>


    </div>
  </div>
</section>

        </div>
    );
};

export default Skills;