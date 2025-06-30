import React from 'react';
import Images from '../constans/Images';

const about = () => {
    return (
        <div>
           <section id="about" className="w-full  text-black py-16 px-6 lg:px-24">
            <video
                        src={Images.video}
                        autoPlay
                        loop
                        muted
                        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
                      ></video>
  <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">

    
    <div className="w-full lg:w-1/2">
      <img
        src={Images.imag} 
        alt="About Me"
        className="w-[600vw] rounded-xl shadow-lg object-cover"
      />

    </div>

    <div className='bg-gray-950/80 flex flex-col justify-center items-center w-[60vw] rounded-xl shadow-lg'>
        <div className="w-full lg:w-1/2 text-center lg:text-left">
      <h2 className="text-4xl font-extrabold mb-4 text-emerald-400">About Me</h2>
      <p className="text-lg text-emerald-200 leading-relaxed  font-bold">
        Hello! I'm <strong>Douaa Khayara</strong>, a passionate web developer who loves building clean, modern, and user-friendly websites. 
        I enjoy turning creative ideas into real-life digital experiences. I'm currently focusing on front-end development using React.js and Tailwind CSS.
      </p>
      <p className="text-md text-emerald-200 mt-4">
        When I’m not coding, I enjoy learning new tech skills, watching design trends, and helping others get into web development.
      </p>
    </div>
    </div>
    
  </div>
</section>


        </div>
    );
};

export default about;