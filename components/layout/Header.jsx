import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";

const Header = ({handleHidden}) => {
    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        document.addEventListener("scroll", () => {
          const scrollCheck = window.scrollY > 100
          if (scrollCheck !== scroll) {
            setScroll(scrollCheck)
          }
        })
      })

    useEffect(() => {

            window._mfq = window._mfq || [];
            (function() {
            var mf = document.createElement("script");
            mf.type = "text/javascript"; mf.defer = true;
            mf.src = "//cdn.mouseflow.com/projects/b9f37824-9213-4cd7-b373-451223f42588.js";
            document.getElementsByTagName("head")[0].appendChild(mf);
        })();

    }, []);

    return (
        <>
            <header className={scroll ? "bg-transparent sticky-bar mt-4 stick": "bg-transparent sticky-bar mt-4"}>
                <div className="container bg-transparent">
                    <nav className="bg-transparent flex justify-between items-center py-3">
                        <Link href="/">
                            <a className="text-3xl font-semibold leading-none">
                                <img
                                    className="h-12"
                                    src="/media-logo.png"
                                    alt="AugTrack"
                                />
                            </a>
                        </Link>
                        <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
                            <li className="group relative pt-4 pb-4 has-child">
                                <Link href="/">
                                    <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                                        Hjem
                                    </a>
                                </Link>

                            </li>
                            <li className="pt-4 pb-4">
                                <Link href="/about">
                                    <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                                       Om oss
                                    </a>
                                </Link>
                            </li>


                            <li className="group relative pt-4 pb-4 has-child">
                                <Link href="#">
                                    <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                                        Blog
                                    </a>
                                </Link>

                            </li>
                            <li className="pt-4 pb-4">
                                <Link href="/contact">
                                    <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                                        Kontakt oss
                                    </a>
                                </Link>
                            </li>
                        </ul>
                        <div className="hidden lg:block cursor-not-allowed">
                            <Link href="#"  >
                                <a className="btn-accent hover-up-2 cursor-not-allowed">Logg inn</a>
                            </Link>
                            <Link href="/#" >
                                <a className="btn-primary hover-up-2">
                                    Registrer
                                </a>
                            </Link>
                        </div>
                        <div className="lg:hidden">
                            <button className="navbar-burger flex items-center py-2 px-3 text-blue-500 hover:text-blue-700 rounded border border-blue-200 hover:border-blue-300" onClick={handleHidden}>
                                <svg
                                    className="fill-current h-4 w-4"
                                    viewbox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>Mobile menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                                </svg>
                            </button>
                        </div>
                    </nav>
                </div>
            </header>



        </>

    );
};

export default Header;
