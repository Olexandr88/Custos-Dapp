'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronDown, FaWallet, FaArrowRight, FaPlus, FaVideo, FaUser, FaUserPlus, FaPhone } from "react-icons/fa";
import ConnectButtoncomponent from "./connect";

const Navbar = () => {
  const [showLaunchDapps, setShowLaunchDapps] = useState(false);
  const [showCompany, setShowCompany] = useState(false);

  const toggleLaunchDapps = () => {
    setShowLaunchDapps(!showLaunchDapps);
  };

  const toggleCompany = () => {
    setShowCompany(!showCompany);
  };

  return (
    <nav className="py-4 bg-transparent fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Logo"
                width={200}
                height={50}
                className="rounded-lg"
              />
            </Link>
          </div>
          <ul className="flex space-x-4 items-center">
            <div className="flex space-x-4 items-center">
              <li className="relative">
                <button
                  onClick={toggleLaunchDapps}
                  className="text-white hover:text-[#c92eff] flex items-center"
                >
                  Launch Dapps
                  <FaChevronDown className="w-5 h-5 ml-1" />
                </button>
                {showLaunchDapps && (
                  <div 
                    className="absolute right-0 mt-2 w-48 bg-opacity-30 shadow-lg z-10"
                  >
                    <div className="w-[1000px] h-screen flex justify-center items-center text-white p-6">
                      <div className="w-[1000px] bg-black rounded-lg shadow-lg flex p-8 border-gradient space-x-6">
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <p className="text-3xl ">Launch Dapps</p>
                            <p className="mt-4 text-gray-300">
                              Decentralized apps help you leverage the blockchain technology to secure your evidence and legal agreements.
                            </p>
                          </div>
                          <Image
                            src="/group.png"
                            alt="Logo"
                            width={200}
                            height={50}
                            className="rounded-lg mt-20"
                          />
                        </div>
                        <div className="flex-1 border-gradient p-5 rounded-lg">
                          <div className="mb-20">
                            <p className="flex items-center text-xl font-semibold">
                              <FaPlus className="mr-2" />
                              <a href="/agreement" className="text-white">Create Agreement</a>
                            </p>
                            <p className="text-gray-300 mt-1">Custos ensures that agreements are securely stored.</p>
                          </div>
                          <div>
                            <p className="flex items-center text-xl font-semibold">
                              <FaVideo className="mr-2" />
                              <a href="#" className="text-white ">Record Video</a>
                            </p>
                            <p className="text-gray-300 mt-1">Custos ensures that agreements are securely stored.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
              <li className="relative">
                <button
                  onClick={toggleCompany}
                  className="text-white hover:text-[#c92eff] flex items-center"
                >
                  Company
                </button>
                {showCompany && (
                  <div 
                    className="absolute right-0 mt-2 w-48 bg-opacity-30 shadow-lg z-10"
                  >
                    <div className="w-[1000px] min-h-screen flex justify-center items-center text-white p-6">
                      <div className="w-[1000px] bg-black rounded-lg shadow-lg flex p-8 border-gradient space-x-6">
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <p className="text-3xl ">Invulnerable</p>
                            <p className="my-4 text-gray-300">
                              Custos Diretriz is mastering the art of preservation and shielding on the blockchain.
                            </p>
                            <a href="#" className="mt-4 text-gray-300 flex items-center">
                              Learn More
                              <FaArrowRight className="ml-2" />
                            </a>
                          </div>
                          <Image
                            src="/secu.png"
                            alt="Logo"
                            width={200}
                            height={50}
                            className="rounded-lg mt-20"
                          />
                        </div>
                        <div className="flex-1 border-gradient p-5 rounded-lg">
                          <div className="mb-20">
                            <p className="flex items-center text-xl font-semibold">
                              <FaUser className="mr-2" />
                              <a href="#" className="text-white">About Us</a>
                            </p>
                            <p className="text-gray-300 mt-1">Meet the developer team and read our story</p>
                          </div>
                          <div className="mb-20">
                            <p className="flex items-center text-xl font-semibold">
                              <FaUserPlus className="mr-2" />
                              <a href="#" className="text-white">Career</a>
                            </p>
                            <p className="text-gray-300 mt-1">Find your dream role</p>
                          </div>
                          <div>
                            <p className="flex items-center text-xl font-semibold">
                              <FaPhone className="mr-2" />
                              <a href="#" className="text-white">Contact Us</a>
                            </p>
                            <p className="text-gray-300 mt-1">Reach out to us for questions and clarifications</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            </div>
          </ul>
          <div>
            <ConnectButtoncomponent />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
