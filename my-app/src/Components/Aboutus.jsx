import React from 'react';
import chef1 from '../img/chef1.png'

const Aboutus = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-white border-b border-gray-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="text-gray-800 font-bold text-2xl lg:text-4xl">
              ORGABLISS
            </a>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 md:pr-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              About Us
            </h1>
            <p className="text-gray-800 text-lg leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue
              nisl et elit posuere, nec ullamcorper risus gravida.
            </p>
            <p className="text-gray-800 text-lg leading-relaxed mb-6">
              Phasellus sit amet sapien eu libero luctus pretium. Duis scelerisque
              quam eget arcu congue congue.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <img
              src={chef1}
              alt="About Us"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
