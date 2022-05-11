import React from 'react';
import Layout from '../components/layout/Layout';
import Link from "next/link";

const Pricing = () => {
    return (
        <>
            <Layout>
                {/*<section className="relative -mt-24 pt-24">
                    <div className="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-blueGray-100 z-0" style={{ "z-index": "-1" }}></div>
                    <div className="container">
                        <div className="flex flex-wrap items-center -mx-3">
                            <div className="w-full lg:w-1/2 px-3">
                                <div className="py-12">
                                    <div className="max-w-lg lg:max-w-md mx-auto lg:mx-0 mb-8 text-center lg:text-left">
                                        <h2 className="text-3xl lg:text-5xl mb-4 font-bold font-heading wow animate__animatedanimated animate__fadeIn">
                                            Committed to <span className="text-blue-500">People</span> and the future
                                        </h2>
                                        <p className="text-blueGray-400 leading-relaxed wow animate__animatedanimated animate__fadeIn">
                                            We are <strong className="text-blue-500">Monst</strong>, a Creative Design <span className="typewrite d-inline text-brand" data-period="3000" data-type='["Web Agency", "Social Marketing" ]'></span>
                                        </p>
                                        <p className="text-blueGray-400 leading-relaxed wow animate__animatedanimated animate__fadeIn mt-3 text-sm">Helping you maximize operations management with digitization</p>
                                    </div>
                                    <div className="text-center lg:text-left">
                                        <Link href="/about">
                                            <a className="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded wow animate__animatedanimated animate__fadeIn">About Us</a>
                                        </Link>
                                        <Link href="/services">
                                            <a className="block hover-up-2 sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded wow animate__animatedanimated animate__fadeIn" data-wow-delay=".3s">
                                                Our Services
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 px-3 lg:bg-blueGray-10 mb-12 lg:mb-0 pb-10">
                                <div className="flex items-center justify-center">
                                    <img className="lg:max-w-lg" src="/assets/imgs/illustrations/team.svg" alt="Monst" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>*/}
                {/*   <section className="py-6">
                    <div className="container">
                        <div className="flex flex-wrap justify-between pt-8 pb-16">
                            <div className="flex w-1/2 lg:w-auto py-4 wow animate__animatedanimated animate__fadeIn" data-wow-delay=".2s">
                                <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-24 sm:w-24">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                    </svg>
                                </div>
                                <div className="sm:py-2 ml-2 sm:ml-6">
                                    <span className="sm:text-2xl font-bold font-heading">+ </span>
                                    <span className="sm:text-2xl font-bold font-heading count">150</span>
                                    <p className="text-xs sm:text-base text-blueGray-400">Annual Partner</p>
                                </div>
                            </div>
                            <div className="flex w-1/2 lg:w-auto py-4 wow animate__animatedanimated animate__fadeIn" data-wow-delay=".4s">
                                <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-24 sm:w-24">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                                    </svg>
                                </div>
                                <div className="sm:py-2 ml-2 sm:ml-6">
                                    <span className="sm:text-2xl font-bold font-heading">+ </span>
                                    <span className="sm:text-2xl font-bold font-heading count">58</span>
                                    <span className="sm:text-2xl font-bold font-heading"> k </span>
                                    <p className="text-xs sm:text-base text-blueGray-400">Completed Projects</p>
                                </div>
                            </div>
                            <div className="flex w-1/2 lg:w-auto py-4 wow animate__animatedanimated animate__fadeIn" data-wow-delay=".6s">
                                <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-24 sm:w-24">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                    </svg>
                                </div>
                                <div className="sm:py-2 ml-2 sm:ml-6">
                                    <span className="sm:text-2xl font-bold font-heading">+ </span>
                                    <span className="sm:text-2xl font-bold font-heading count">500</span>
                                    <p className="text-xs sm:text-base text-blueGray-400">Happy Customers</p>
                                </div>
                            </div>
                            <div className="flex w-1/2 lg:w-auto py-4 wow animate__animatedanimated animate__fadeIn" data-wow-delay=".8s">
                                <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-24 sm:w-24">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                                    </svg>
                                </div>
                                <div className="sm:py-2 ml-2 sm:ml-6">
                                    <span className="sm:text-2xl font-bold font-heading">+ </span>
                                    <span className="sm:text-2xl font-bold font-heading count">320</span>
                                    <p className="text-xs sm:text-base text-blueGray-400">Research Work</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>*/}
                <section className="pt-20 xl:bg-contain bg-top bg-no-repeat"
                         style={{backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')"}}>
                    <div className="container">
                        <div className="text-center mb-16">
                            <h2 className="max-w-lg mx-auto mb-4 text-4xl font-bold font-heading wow animate__animated animate__fadeIn"
                                data-wow-delay=".2s">
                                <span>Velg den </span>
                                <span className="text-blue-500">pakken </span>
                                <span>som passer deg best</span>
                            </h2>
                            <p className="max-w-sm mx-auto text-lg text-blueGray-400 wow animate__animated animate__fadeInDown"
                               data-wow-delay=".5s">

                            </p>
                        </div>
                        <div className="flex flex-wrap -mx-3">
                            <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                                <div
                                    className="hover-up-5 pt-16 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn"
                                    data-wow-delay=".2s">
                                    <img className="h-20 mb-6 mx-auto" src="/assets/imgs/icons/startup.svg"
                                         alt="Monst"/>
                                    <h3 className="mb-2 text-4xl font-bold font-heading">Enkel</h3>
                                    <span className="text-4xl text-blue-500 font-bold font-heading">1 999 NOK</span>
                                    <p className="mt-2 mb-8 text-blueGray-400"></p>
                                    <div className="flex flex-col items-center mb-8">
                                        <ul className="text-blueGray-400">
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500"
                                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24"
                                                     stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                          stroke-width="2"
                                                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>1 stk historie</span>
                                            </li>

                                            <br/>

                                        </ul>
                                    </div>
                                    <div>
                                        <a className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded"
                                           href="#">
                                            Kjøp
                                        </a>

                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                                <div
                                    className="hover-up-5 pt-16 pb-8 px-4 text-center text-white bg-blue-500 rounded shadow wow animate__animated animate__fadeIn"
                                    data-wow-delay=".4s">
                                    <img className="h-20 mb-6 mx-auto" src="/assets/imgs/icons/agency.svg" alt="Monst"/>
                                    <h3 className="mb-2 text-4xl font-bold font-heading">Giga</h3>
                                    <span className="text-4xl font-bold font-heading">6 800 NOK</span>

                                    <div className="flex flex-col items-center mb-8">
                                        <ul>
                                            <li className="flex items-center mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500"
                                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24"
                                                     stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                          stroke-width="2"
                                                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>1 stk innlegg</span>
                                            </li>
                                            <li className="flex items-center mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500"
                                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24"
                                                     stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                          stroke-width="2"
                                                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>2 stk historie</span>
                                            </li>
                                           <br/>

                                        </ul>
                                    </div>
                                    <div>
                                        <a className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-blue-500 font-semibold leading-none bg-white hover:bg-blueGray-50 rounded"
                                           href="#">
                                            Kjøp
                                        </a>

                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3 px-3 mb-6">
                                <div
                                    className="hover-up-5 pt-16 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn"
                                    data-wow-delay=".6s">
                                    <img className="h-20 mb-6 mx-auto" src="/assets/imgs/icons/enterprise.svg"
                                         alt="Monst"/>
                                    <h3 className="mb-2 text-4xl font-bold font-heading">Enterprise</h3>
                                    <span className="text-4xl text-blue-500 font-bold font-heading">-</span>
                                    <p className="mt-2 mb-8 text-blueGray-400">Ta kontakt for å diskutere et samarbeid</p>
                                    <div className="flex flex-col items-center mb-8">

                                    </div>
                                    <div>
                                        <a className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded"
                                           href="mailto:preben@mediatrafikk.no?subject=Til%20Mediatrafikk&body=Jeg%20%C3%B8nsker%20%C3%A5%20bli%20kontaktet.">
                                            Kontakt oss
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className="py-20">
                    <div className="container">
                        <div className="max-w-lg mb-16">
                            <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading wow animate__animatedanimated animate__fadeIn" data-wow-delay=".1s">
                                <span>Start saving time today and </span>
                                <span className="text-blue-500">choose </span>
                                <span>your best plan</span>
                            </h2>
                            <p className="text-base lg:text-lg text-blueGray-400 wow animate__animatedanimated animate__fadeIn" data-wow-delay=".3s">
                                Best for freelance developers who need to save time
                            </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded shadow">
                            <div className="border-b border-gray-200">
                                <div className="flex flex-wrap p-6 -mx-3 wow animate__animatedanimated animate__fadeIn" data-wow-delay=".1s">
                                    <div className="w-full lg:w-1/6 text-center lg:text-left text-lg lg:text-base font-semibold lg:font-normal mb-2 lg:mb-0 px-3">
                                        <h3 class="text-md font-bold font-heading">Beginner</h3>
                                    </div>
                                    <div className="w-full lg:w-4/6 mb-6 lg:mb-0 px-3">
                                        <p className="mb-4 lg:mb-6 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ultricies est. Duis nec hendrerit magna. Ut vel orci gravida, hendrerit enim non, gravida turpis.</p>
                                        <ul className="flex flex-col lg:flex-row justify-start space-y-2 lg:space-y-0 lg:space-x-8">
                                            <li className="flex">
                                                <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span className="text-blueGray-400">12 Emails</span>
                                            </li>
                                            <li className="flex">
                                                <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span className="text-blueGray-400">8 Datebase</span>
                                            </li>
                                            <li className="flex">
                                                <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span className="text-blueGray-400">Unlimited Domains</span>
                                            </li>
                                            <li className="flex">
                                                <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span className="text-blueGray-400">50 GB Storage</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="w-full lg:w-1/6 self-center text-xs px-3">
                                        <a className="block mb-2 py-4 text-center hover:text-white font-semibold bg-blueGray-200 hover:bg-blue-500 rounded" href="#">
                                            Buy 25$
                                        </a>
                                        <p className="text-center text-blueGray-400">per month</p>
                                    </div>
                                </div>
                            </div>
                            <div className="border-b border-gray-200">
                                <div className="flex flex-wrap justify-between p-6 -mx-3 wow animate__animatedanimated animate__fadeIn" data-wow-delay=".3s">
                                    <div className="w-full lg:w-1/6 text-center lg:text-left text-lg lg:text-base font-semibold lg:font-normal mb-2 lg:mb-0 px-3">
                                        <h3 class="text-md font-bold font-heading">Intermediate</h3>
                                    </div>
                                    <div className="w-full lg:w-4/6 mb-6 lg:mb-0 px-3">
                                        <p className="mb-4 lg:mb-6 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ultricies est. Duis nec hendrerit magna. Ut vel orci gravida, hendrerit enim non, gravida turpis.</p>
                                        <ul className="flex flex-col lg:flex-row justify-start space-y-2 lg:space-y-0 lg:space-x-8">
                                            <li className="flex">
                                                <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span className="text-blueGray-400">12 Emails</span>
                                            </li>
                                            <li className="flex">
                                                <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span className="text-blueGray-400">8 Datebase</span>
                                            </li>
                                            <li className="flex">
                                                <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span className="text-blueGray-400">Unlimited Domains</span>
                                            </li>
                                            <li className="flex">
                                                <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span className="text-blueGray-400">50 GB Storage</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="w-full lg:w-1/6 self-center text-xs px-3">
                                        <a className="block mb-2 py-4 text-center hover:text-white font-semibold bg-blueGray-200 hover:bg-blue-500 rounded" href="#">
                                            Buy 25$
                                        </a>
                                        <p className="text-center text-blueGray-400">per month</p>
                                    </div>
                                </div>
                            </div>
                            <div className="border-b border-gray-200">
                                <div className="flex flex-wrap justify-between p-6 -mx-3 wow animate__animatedanimated animate__fadeIn" data-wow-delay=".5s">
                                    <div className="w-full lg:w-1/6 text-center lg:text-left text-lg lg:text-base font-semibold lg:font-normal mb-2 lg:mb-0 px-3">
                                        <h3 class="text-md font-bold font-heading">Advanced</h3>
                                    </div>
                                    <div className="w-full lg:w-4/6 mb-6 lg:mb-0 px-3">
                                        <p className="mb-4 lg:mb-6 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ultricies est. Duis nec hendrerit magna. Ut vel orci gravida, hendrerit enim non, gravida turpis.</p>
                                        <ul className="flex flex-col lg:flex-row justify-start space-y-2 lg:space-y-0 lg:space-x-8">
                                            <li className="flex">
                                                <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span className="text-blueGray-400">12 Emails</span>
                                            </li>
                                            <li className="flex">
                                                <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span className="text-blueGray-400">8 Datebase</span>
                                            </li>
                                            <li className="flex">
                                                <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span className="text-blueGray-400">Unlimited Domains</span>
                                            </li>
                                            <li className="flex">
                                                <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span className="text-blueGray-400">50 GB Storage</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="w-full lg:w-1/6 self-center text-xs px-3">
                                        <a className="block mb-2 py-4 text-center hover:text-white font-semibold bg-blueGray-200 hover:bg-blue-500 rounded" href="#">
                                            Buy 65$
                                        </a>
                                        <p className="text-center text-blueGray-400">per month</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-wrap p-6 -mx-3 wow animate__animatedanimated animate__fadeIn" data-wow-delay=".7s">
                                    <div className="w-full lg:w-1/6 text-center lg:text-left text-lg lg:text-base font-semibold lg:font-normal mb-2 lg:mb-0 px-3">
                                        <h3 class="text-md font-bold font-heading">Professional</h3>
                                    </div>
                                    <div className="w-full lg:w-4/6 mb-6 lg:mb-0 px-3">
                                        <p className="mb-4 lg:mb-6 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ultricies est. Duis nec hendrerit magna. Ut vel orci gravida, hendrerit enim non, gravida turpis.</p>
                                        <ul className="flex flex-col lg:flex-row justify-start space-y-2 lg:space-y-0 lg:space-x-8">
                                            <li className="flex">
                                                <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span className="text-blueGray-400">12 Emails</span>
                                            </li>
                                            <li className="flex">
                                                <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span className="text-blueGray-400">8 Datebase</span>
                                            </li>
                                            <li className="flex">
                                                <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span className="text-blueGray-400">Unlimited Domains</span>
                                            </li>
                                            <li className="flex">
                                                <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span className="text-blueGray-400">50 GB Storage</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="w-full lg:w-1/6 self-center text-xs px-3">
                                        <a className="block mb-2 py-4 text-center hover:text-white font-semibold bg-blueGray-200 hover:bg-blue-500 rounded" href="#">
                                            Buy 25$
                                        </a>
                                        <p className="text-center text-blueGray-400">per month</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>*/}



            </Layout>
        </>
    );
};

export default Pricing;