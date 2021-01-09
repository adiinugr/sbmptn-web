import Head from "next/head";

const HomeScreen = () => {
  return (
    <div className="font-custom min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="py-4 px-6 absolute top-0 left-0 right-0 z-10">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="items-center">Logo</div>
            <div className="hidden lg:flex items-center">
              <button className="px-4 py-2 hover:text-indigo-600">Home</button>
              <button className="px-4 py-2  hover:text-indigo-600">
                Process
              </button>
              <button className="px-4 py-2  hover:text-indigo-600">
                About us
              </button>
            </div>
            <div className="hidden lg:flex items-center">
              <button className="px-4 py-2 hover:text-indigo-600">Login</button>
              <button className="px-4 py-2 bg-green-500 text-white hover:bg-green-600 rounded">
                Sign Up
              </button>
            </div>
            <button className="px-4 py-2  lg:hidden">Hamburger</button>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden px-20">
        <img
          src={require("../assets/images/wave.svg")}
          className="absolute top-0 left-2/5"
          width={400}
        />
        <div className="container mx-auto relative">
          <div className="flex flex-col md:flex-row items-center pt-16 mb-16 md:mb-0 md:pb-0 md:h-screen ">
            <div className="md:w-1/2 mt-16 md:mt-0 mb-4 sm:mb-16 md:mb-0">
              <h3 className="text-3xl md:text-4xl font-bold  leading-tight mb-4 md:mb-8">
                Social Network Management
              </h3>
              <p className="mb-4 md:mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                deserunt placeat labore commodi ullam quaerat, explicabo nihil
                rerum blanditiis iure voluptate veniam deleniti eius? Odio
                deleniti minima totam et ab.
              </p>
              <button className="bg-green-500 text-white px-5 md:px-4 py-4 md:py-3 rounded hover:bg-green-600">
                More info
              </button>
            </div>
            <div className="md:w-1/2 mt-16 sm:mt-0 text-center flex-1 flex justify-end">
              <img
                src={require("../assets/images/read.svg")}
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-blue-100">
        <div className="container mx-auto px-6 py-12 text-center border-t border-gray-300">
          <p>
            Copyright ©2019 TaildwindComponents. All rights reserved. |
            Illustrations by{" "}
            <a href="https://freepik.com/" className=" font-bold underline">
              Freepik
            </a>{" "}
            | Avatars by{" "}
            <a href="https://uifaces.co/" className=" font-bold underline">
              UI Faces
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomeScreen;
