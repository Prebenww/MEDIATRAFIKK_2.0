import React from "react";
import Link from "next/link"

const Footer = () => {
    return (
        <>
            <section className="py-20">
                <div className="container px-4 mx-auto wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                    <div className="flex flex-wrap mb-12 lg:mb-20 -mx-3 text-center lg:text-left">
                        <div className="w-full lg:w-1/5 px-3 mb-6 lg:mb-0">
                            <Link href="/">
                                <a className="inline-block mx-auto lg:mx-0 text-3xl font-semibold leading-none">
                                    <img className="h-10" src="/media-logo.png" alt="Monst" />
                                </a>
                            </Link>
                        </div>
                        <div className="w-full lg:w-2/5 px-3 mb-8 lg:mb-0">
                            <p className="max-w-md mx-auto lg:max-w-full lg:mx-0 lg:pr-32 lg:text-lg text-blueGray-400 leading-relaxed">
                                Samarbeid med  <strong>influencere</strong>
                            </p>
                        </div>
                        <div className="w-full lg:w-1/5 px-3 mb-8 lg:mb-0">
                            <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">Kontor</p>
                            <p className="lg:text-lg text-blueGray-400">Lars Hilles gate 30 5008 Bergen</p>
                        </div>
                        <div className="w-full lg:w-1/5 px-3">
                            <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">Kontakt</p>

                            <p className="lg:text-lg text-blueGray-400">preben@mediatrafikk.no</p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center lg:justify-between">
                        <p className="text-sm text-blueGray-400">
                            &copy; 2022. All rights reserved. Designed by{" "}
                            <a className="text-blue-400" href="https://mediatrafikk.no" target="_blank">
                                mediatrafikk.no
                            </a>
                        </p>
                        <div className="order-first lg:order-last -mx-2 mb-4 lg:mb-0">
                            <a className="inline-block px-2" href="https://facebook.com/mediatrafikk">
                                <img src="/assets/imgs/icons/facebook-blue.svg" alt="Monst" />
                            </a>
                            <a className="inline-block px-2" href="https://twitter.com">
                                <img src="/assets/imgs/icons/twitter-blue.svg" alt="Monst" />
                            </a>
                            <a className="inline-block px-2" href="https://instagram.com/mediatrafikk/">
                                <img src="/assets/imgs/icons/instagram-blue.svg" alt="instagram" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;
