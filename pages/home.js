import React from "react";

import Logo from "../assets/images/logo.svg";

const home = () => {
  return (
    <div className="font-custom min-h-screen">
      <div className="py-4 px-6 absolute top-0 left-0 right-0 z-10">
        <div className="container mx-auto">
          <div className="flex items-center">
            <div className="flex-1">
              <img src={Logo} className="h-6" />
            </div>
            {/* <button className="text-secondary lg:hidden">
          <svg className="current-fill h-6 w-6" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="-49 141 512 512" style="enable-background:new -49 141 512 512;" xml:space="preserve">
            <g>
              <g>
                <path d="M413,422H1c-13.807,0-25-11.193-25-25s11.193-25,25-25h412c13.807,0,25,11.193,25,25S426.807,422,413,422z"/>
              </g>
              <g>
                <path d="M413,562H1c-13.807,0-25-11.193-25-25s11.193-25,25-25h412c13.807,0,25,11.193,25,25S426.807,562,413,562z"/>
              </g>
              <g>
                <path d="M413,282H1c-13.807,0-25-11.193-25-25s11.193-25,25-25h412c13.807,0,25,11.193,25,25S426.807,282,413,282z"/>
              </g>
            </g>
          </svg>

        </button> */}
            <nav className="hidden lg:flex items-center">
              <a
                href="#"
                className="px-6 py-3 font-bold uppercase text-primary border-b-2 border-primary"
              >
                Home
              </a>
              <a
                href="#our-process"
                className="px-6 py-3 font-bold uppercase text-secondary hover:text-primary"
              >
                Process
              </a>
              <a
                href="#about-us"
                className="px-6 py-3 font-bold uppercase text-secondary hover:text-primary"
              >
                About us
              </a>
              <a
                href="#services"
                className="px-6 py-3 font-bold uppercase text-secondary hover:text-primary"
              >
                Services
              </a>
              <a
                href="#testimonials"
                className="px-6 py-3 font-bold uppercase text-secondary hover:text-primary"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="px-6 py-3 font-bold uppercase bg-primary hover:bg-primary-400 text-secondary rounded"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden px-6 pb-6">
        <img
          src={require("../assets/images/wave.svg")}
          className="absolute top-0 left-2/5"
        />
        <div className="container mx-auto relative">
          <div className="flex flex-col md:flex-row items-center pt-32 pb-16 md:pb-0">
            <div className="md:w-1/2 lg:w-1/3 mb-4 sm:mb-16 md:mb-0">
              <h2 className="text-xl font-bold text-secondary-600 uppercase mb-2">
                Lorem ipsum dolor
              </h2>
              <h1 className="text-4xl md:text-5xl font-bold text-secondary leading-tight mb-6 md:mb-10">
                Social Network Management
              </h1>
              <button className="bg-green-500 px-6 md:px-8 py-3 md:py-4 text-lg md:text-xl text-secondary font-bold uppercase rounded hover:bg-primary-400">
                More info
              </button>
            </div>
            <div className="mt-16 sm:mt-0 flex-1 flex justify-end">
              <img src={require("../assets/images/hero.svg")} />
            </div>
          </div>
        </div>
      </div>
      <div id="our-process" className="relative">
        <img
          src={require("../assets/images/circle2.svg")}
          className="hidden sm:block absolute top-0 left-0 -mx-32"
        />
        <div className="container mx-auto px-6 pt-6 pb-12 relative">
          <h3 className="flex flex-col items-center text-4xl text-secondary font-bold mb-12">
            Our process <span className="bg-primary h-1 w-20 block mt-4"></span>
          </h3>
          <div className="flex flex-col md:flex-row xl:px-32">
            <div className="flex flex-col items-center md:px-6 lg:px-12">
              <span className="text-6xl text-primary">1</span>
              <h4 className="font-semibold text-2xl text-secondary mb-2">
                Analysis
              </h4>
              <p className="text-center text-secondary-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                imperdiet est
              </p>
            </div>
            <div className="flex flex-col items-center md:px-6 lg:px-12">
              <span className="text-6xl text-primary">2</span>
              <h4 className="font-semibold text-2xl text-secondary mb-2">
                Execution
              </h4>
              <p className="text-center text-secondary-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                imperdiet est
              </p>
            </div>
            <div className="flex flex-col items-center md:px-6 lg:px-12">
              <span className="text-6xl text-primary">3</span>
              <h4 className="font-semibold text-2xl text-secondary mb-2">
                Success
              </h4>
              <p className="text-center text-secondary-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                imperdiet est
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="services" className="relative">
        <img
          src={require("../assets/images/circle.svg")}
          className="absolute top-0 right-0 mt-64 hidden md:block"
        />
        <div className="container mx-auto px-6 py-32 relative">
          <h3 className="flex flex-col items-center text-4xl text-secondary font-bold">
            Services we offer{" "}
            <span className="bg-primary h-1 w-20 block mt-4"></span>
          </h3>
          <div className="flex flex-col md:flex-row items-center mb-24 md:mb-16 xl:mb-8 mt-16 md:mt-0 md:mt-16 lg:mt-0">
            <img
              src={require("../assets/images/service1.svg")}
              className="md:w-1/3"
            />
            <div className="md:ml-16 xl:ml-32">
              <h4 className="text-2xl md:text-3xl font-bold text-secondary-800 mb-4">
                Social Media Marketing
              </h4>
              <p className="text-secondary-700 text-lg mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                imperdiet est tellus, et consequat sem sodales id. Quisque
                molestie et mauris efficitur lacinia.
              </p>
              <p className="text-secondary-700 text-lg">
                Aliquam eget semper mi. Mauris magna risus, viverra in nulla id,
                placerat fermentum tellus. Aliquam non felis eu dui fermentum
                auctor. Aenean sed ante congue, facilisis ipsum eu, gravida
                lacus.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row items-center mb-24 md:mb-16 xl:mb-8">
            <div className="md:mr-16 xl:mr-32">
              <h4 className="text-2xl md:text-3xl font-bold text-secondary-800 mb-4">
                Search Engine Optimization
              </h4>
              <p className="text-secondary-700 text-lg mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                imperdiet est tellus, et consequat sem sodales id. Quisque
                molestie et mauris efficitur lacinia.
              </p>
              <p className="text-secondary-700 text-lg">
                Aliquam eget semper mi. Mauris magna risus, viverra in nulla id,
                placerat fermentum tellus. Aliquam non felis eu dui fermentum
                auctor. Aenean sed ante congue, facilisis ipsum eu, gravida
                lacus.
              </p>
            </div>
            <img
              src={require("../assets/images/service2.svg")}
              className="md:w-1/3"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <img
              src={require("../assets/images/service3.svg")}
              className="md:w-1/3"
            />
            <div className="md:ml-16 xl:ml-32">
              <h4 className="text-2xl md:text-3xl font-bold text-secondary-800 mb-4">
                Increase your followers
              </h4>
              <p className="text-secondary-700 text-lg mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                imperdiet est tellus, et consequat sem sodales id. Quisque
                molestie et mauris efficitur lacinia.
              </p>
              <p className="text-secondary-700 text-lg">
                Aliquam eget semper mi. Mauris magna risus, viverra in nulla id,
                placerat fermentum tellus. Aliquam non felis eu dui fermentum
                auctor. Aenean sed ante congue, facilisis ipsum eu, gravida
                lacus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="testimonials" className="bg-blue-100">
        <div className="mt-16">
          <div className="bg-blue-500 pt-16 pb-16 md:pb-32 relative">
            <img
              src={require("../assets/images/wave3.svg")}
              className="w-full absolute bottom-full h-16 lg:h-auto object-cover object-top"
            />
            <div className="container px-6 mx-auto">
              <div className="md:w-2/3 mx-auto relative">
                <img
                  src={require("../assets/images/quote.svg")}
                  className="absolute top-0 left-0 sm:-ml-16 -mt-4"
                />
                <h3 className="text-white italic text-2xl text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  imperdiet est tellus, et consequat sem sodales id. Quisque
                  molestie et mauris efficitur lacinia.
                  <strong className="block not-italic mt-6 text-primary">
                    FRANK
                  </strong>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-blue-100">
        <div className="container mx-auto px-6 py-12 text-secondary-500 text-center border-t border-gray-300">
          <p>
            Copyright ©2019 TaildwindComponents. All rights reserved. |
            Illustrations by{" "}
            <a
              href="https://freepik.com/"
              className="text-secondary-900 font-bold underline"
            >
              Freepik
            </a>{" "}
            | Avatars by{" "}
            <a
              href="https://uifaces.co/"
              className="text-secondary-900 font-bold underline"
            >
              UI Faces
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default home;
