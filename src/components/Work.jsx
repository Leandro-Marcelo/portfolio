import React from "react";
import Portfolio from "../assets/Portfolio.png";
import SocialNetwork from "../assets/SocialNetwork.png";
import SocialNetworkBack from "../assets/SocialNetworkBack.png";
import TiendaOnlineBack from "../assets/TiendaOnlineBack.png";
import TiendaOnlineFront from "../assets/TiendaOnlineFront.png";
import WebsiteTailwind from "../assets/WebsiteTailwind.png";
import Workflow from "../assets/Workflow.png";
import WorkflowBack from "../assets/WorkflowBack.png";
import UploadImageFullStack from "../assets/UploadImageFullStack.png";
import Frontend from "../assets/Frontend.png";

const Work = () => {
    return (
        <div
            name="work"
            /* le quito el md:h-screen */
            className="w-full text-gray-300 bg-[#0a192f]"
        >
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
                        Mis proyectos
                    </p>
                    {/* <p className="py-6">
            Estos son proyectos en los que estuve trabajando, cada uno con
            detalle respecto a las tecnologías utilizadas.
          </p> */}
                </div>

                {/* Container */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {/* Grid Item */}
                    {/*  <div
                        style={{
                            backgroundImage: `url(${SocialNetwork})`,
                        }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
           
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Social Network Front
                            </span>
                            <div className="pt-8 text-center">
                                <a
                                    href="https://leandro-marcelo.github.io/social-network-frontend"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Demo
                                    </button>
                                </a>
                                <a
                                    href="https://github.com/Leandro-Marcelo/social-network-frontend"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            backgroundImage: `url(${SocialNetworkBack})`,
                        }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                  
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Social Network Back
                            </span>
                            <div className="pt-8 text-center">
                                <a
                                    href="https://documenter.getpostman.com/view/19311828/Uyr4L1JK"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Docu
                                    </button>
                                </a>
                                <a
                                    href="https://github.com/Leandro-Marcelo/socialNetworkAPIREST"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div> */}
                    {/* Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${Workflow})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Workflow Front
                            </span>
                            <div className="pt-8 text-center">
                                <a
                                    href="https://leandro-marcelo.github.io/workflow-front"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Demo
                                    </button>
                                </a>
                                <a
                                    href="https://github.com/Leandro-Marcelo/workflow-front"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${WorkflowBack})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Workflow Back
                            </span>
                            <div className="pt-8 text-center">
                                <a
                                    href="https://documenter.getpostman.com/view/19311828/Uyr4L1JJ"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Docu
                                    </button>
                                </a>
                                <a
                                    href="https://github.com/Leandro-Marcelo/workflow-backend"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item */}
                    <div
                        style={{
                            backgroundImage: `url(${WebsiteTailwind})`,
                        }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Website con Tailwind
                            </span>
                            <div className="pt-8 text-center">
                                <a
                                    href="https://leandro-marcelo.github.io/tailwind-lean/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Demo
                                    </button>
                                </a>
                                <a
                                    href="https://github.com/Leandro-Marcelo/tailwind-lean/tree/master"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            backgroundImage: `url(${UploadImageFullStack})`,
                        }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Upload Image FullStack
                            </span>
                            <div className="pt-8 text-center">
                                <a
                                    href="https://leandro-marcelo.github.io/filestack2785/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Demo
                                    </button>
                                </a>
                                <a
                                    href="https://github.com/Leandro-Marcelo/filestack2785"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            backgroundImage: `url(${Frontend})`,
                        }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Frontend Projects
                            </span>
                            <div className="pt-8 text-center">
                                <a
                                    href="https://leandro-marcelo.github.io/components/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Demo
                                    </button>
                                </a>
                                <a
                                    href="https://github.com/Leandro-Marcelo/components"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <div
                        style={{
                            backgroundImage: `url(${TiendaOnlineFront})`,
                        }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Tienda Online Front
                            </span>
                            <div className="pt-8 text-center">
                                <a
                                    href="https://leandro-marcelo.github.io/tienda-online-react/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Demo
                                    </button>
                                </a>
                                <a
                                    href="https://github.com/Leandro-Marcelo/tienda-online-react"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            backgroundImage: `url(${TiendaOnlineBack})`,
                        }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Tienda Online Back
                            </span>
                            <div className="pt-8 text-center">
                                <a
                                    href="https://apitiendaonline.rj.r.appspot.com/api-doc/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Docu
                                    </button>
                                </a>
                                <a
                                    href="https://github.com/Leandro-Marcelo/tiendaOnlineAPIREST"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div> */}
                    <div
                        style={{
                            backgroundImage: `url(${Portfolio})`,
                        }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Portfolio Leandro
                            </span>
                            <div className="pt-8 text-center">
                                <a
                                    href="/portfolio"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Demo
                                    </button>
                                </a>
                                <a
                                    href="https://github.com/Leandro-Marcelo/portfolio"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
