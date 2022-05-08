import React from 'react';
import Layout from '../components/layout/Layout';

const Team = () => {
    return (
        <>
        <Layout>
          {/*  <section className="pt-20">
                <div className="container text-center">
                    <div className="max-w-lg mx-auto mb-12">
                        <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">Våre kontoer</span>
                        <h2 className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading wow animate__animated animate__fadeIn animated" data-wow-delay=".3s">
                            Velg <span className="text-blue-500">influenceren</span> <br />
                            du vil jobbe med.
                        </h2>
                        <p className="text-blueGray-400 leading-loose wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">Du betaler ingenting før vi har hjulpet deg med hva som skal postes og når. Vi kontakter deg per e-post etter bestilling. </p>
                    </div>
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-12 hover-up-5 wow animate__animated animate__fadeIn animated" data-wow-delay=".4s">
                            <img className="h-64 w-64 mx-auto rounded object-cover object-top" src="/assets/imgs/placeholders/avatar-1.png" alt="Monst" />
                            <p className="mt-6"><strong className="text-md">Geraldine Tusoy</strong></p>
                            <p className="text-gray-500 text-xs mb-4">CEO, Co Founders</p>
                            <div className="flex py-1 justify-center space-x-2">
                                <img src="/assets/imgs/icons/facebook.svg" alt="Monst" />
                                <img src="/assets/imgs/icons/twitter.svg" alt="Monst" />
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-12 hover-up-5 wow animate__animated animate__fadeIn animated" data-wow-delay=".3s">
                            <img className="h-64 w-64 mx-auto rounded object-cover object-top" src="/assets/imgs/placeholders/avatar-2.png" alt="Monst" />
                            <p className="mt-6"><strong className="text-md">Clara Kolawole</strong></p>
                            <p className="text-gray-500 text-xs mb-4">CEO-Founder</p>
                            <div className="flex py-1 justify-center space-x-2">
                                <img src="/assets/imgs/icons/facebook.svg" alt="Monst" />
                                <img src="/assets/imgs/icons/twitter.svg" alt="Monst" />
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-12 hover-up-5 wow animate__animated animate__fadeIn animated" data-wow-delay=".5s">
                            <img className="h-64 w-64 mx-auto rounded object-cover object-top" src="/assets/imgs/placeholders/avatar-3.png" alt="Monst" />
                            <p className="mt-6"><strong className="text-md">Chris Fulton</strong></p>
                            <p className="text-gray-500 text-xs mb-4">Project-Manager</p>
                            <div className="flex py-1 justify-center space-x-2">
                                <img src="/assets/imgs/icons/facebook.svg" alt="Monst" />
                                <img src="/assets/imgs/icons/twitter.svg" alt="Monst" />
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-12 hover-up-5 wow animate__animated animate__fadeIn animated" data-wow-delay=".7s">
                            <img className="h-64 w-64 mx-auto rounded object-cover object-top" src="/assets/imgs/placeholders/avatar-4.png" alt="Monst" />
                            <p className="mt-6"><strong className="text-md">Dany Connolly</strong></p>
                            <p className="text-gray-500 text-xs mb-4">Direct-Founder</p>
                            <div className="flex py-1 justify-center space-x-2">
                                <img src="/assets/imgs/icons/facebook.svg" alt="Monst" />
                                <img src="/assets/imgs/icons/twitter.svg" alt="Monst" />
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-12 hover-up-5 wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                            <img className="h-64 w-64 mx-auto rounded object-cover object-top" src="/assets/imgs/placeholders/avatar-5.png" alt="Monst" />
                            <p className="mt-6"><strong className="text-md">Al-amin Bishash</strong></p>
                            <p className="text-gray-500 text-xs mb-4">Director</p>
                            <div className="flex py-1 justify-center space-x-2">
                                <img src="/assets/imgs/icons/facebook.svg" alt="Monst" />
                                <img src="/assets/imgs/icons/twitter.svg" alt="Monst" />
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-12 hover-up-5 wow animate__animated animate__fadeIn animated" data-wow-delay=".3s">
                            <img className="h-64 w-64 mx-auto rounded object-cover object-top" src="/assets/imgs/placeholders/avatar-6.png" alt="Monst" />
                            <p className="mt-6"><strong className="text-md">Sanuya Santa</strong></p>
                            <p className="text-gray-500 text-xs mb-4">Marketing</p>
                            <div className="flex py-1 justify-center space-x-2">
                                <img src="/assets/imgs/icons/facebook.svg" alt="Monst" />
                                <img src="/assets/imgs/icons/twitter.svg" alt="Monst" />
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-12 hover-up-5 wow animate__animated animate__fadeIn animated" data-wow-delay=".5s">
                            <img className="h-64 w-64 mx-auto rounded object-cover object-top" src="/assets/imgs/placeholders/avatar-7.png" alt="Monst" />
                            <p className="mt-6"><strong className="text-md">Steven Job</strong></p>
                            <p className="text-gray-500 text-xs mb-4">Designer</p>
                            <div className="flex py-1 justify-center space-x-2">
                                <img src="/assets/imgs/icons/facebook.svg" alt="Monst" />
                                <img src="/assets/imgs/icons/twitter.svg" alt="Monst" />
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-12 hover-up-5 wow animate__animated animate__fadeIn animated" data-wow-delay=".7s">
                            <img className="h-64 w-64 mx-auto rounded object-cover object-top" src="/assets/imgs/placeholders/avatar-8.png" alt="Monst" />
                            <p className="mt-6"><strong className="text-md">Romario</strong></p>
                            <p className="text-gray-500 text-xs mb-4">Designer</p>
                            <div className="flex py-1 justify-center space-x-2">
                                <img src="/assets/imgs/icons/facebook.svg" alt="Monst" />
                                <img src="/assets/imgs/icons/twitter.svg" alt="Monst" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>*/}


        </Layout>
        </>
    );
};

export default Team;