import React from 'react';
import Images from '../constans/Images';

const Portfoloi = () => {
    return (
        <div>
            <section id="work" className="w-full  text-gray-800 py-16 px-6 lg:px-24">
              <video
                  src={Images.video}
                  autoPlay
                  loop
                  muted
                  className="fixed top-0 left-0 w-full h-full object-cover -z-10"
                ></video>
              
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-extrabold mb-12 text-amber-100">My Work</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
     
      <div className="bg-gray-950/90 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
        <img src={Images.prct1} alt="Project 1" className="w-full h-48 object-cover" />
        <div className="p-4 text-left">
          <h3 className="text-xl text-emerald-50 font-semibold mb-2">yummy</h3>
          <p className="text-emerald-50 mb-3">A clean portfolio website built with javascript-html-css</p>
          <a href="https://douaakhayara.github.io/projct-douaa-khayara/" target="_blank" className="text-emerald-200 hover:underline font-medium">View Project →</a>
        </div>
      </div>

      
      <div className="bg-gray-950/90 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
        <img src={Images.prct2} alt="Project 2" className="w-full h-48 object-cover" />
        <div className="p-4 text-left">
          <h3 className="text-xl text-emerald-50 font-semibold mb-2">delicious</h3>
          <p className="text-emerald-50  mb-3">A responsive landing page design using HTML, sass and Bootstrap.</p>
          <a href="https://douaakhayara.github.io/douaa_khayara-projct-final/" target="_blank" className="text-emerald-200 hover:underline font-medium">View Project →</a>
        </div>
      </div>

      
      <div className="bg-gray-950/90 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
        <img src={Images.prct4} alt="Project 3" className="w-full h-48 object-cover" />
        <div className="p-4 text-left">
          <h3 className="text-xl text-emerald-50 font-semibold mb-2">simpel</h3>
          <p className="text-emerald-50 mb-3"> html-css.</p>
          <a href="https://github.com/Douaakhayara/simple.projct" target="_blank" className="text-emerald-200 hover:underline font-medium">View Project →</a>
        </div>
      </div>

    </div>
  </div>
</section>

        </div>
    );
};

export default Portfoloi;