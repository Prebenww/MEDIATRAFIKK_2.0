import CounterUp from "../components/elements/Counterup"
import TextEffect from "../components/elements/TextEffect"
import Layout from "../components/layout/Layout"
import Slider1 from "../components/slider/Slider1"


function Home() {
    return (
        <>
            <Layout>
                <section className=" flex flex-col justify-center xl:bg-contain bg-top bg-no-repeat -mt-24 pt-24 "
                         style={{backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')"}}>
                    <div className="container px-4 mx-auto">
                        <div className="pt-12 text-center">
                            <div className="max-w-2xl mx-auto mb-8 ">
                                <h2 className="text-3xl lg:text-5xl lg:leading-normal mb-4 font-bold font-heading wow animate__animated animate__fadeIn">
                                    Finn ut hvor kundene <br/>
                                    sine <span className="text-blue-500">øyne</span> beveger seg.
                                </h2>
                                <p className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn">
                                    Vi er <strong className="text-blue-500">AugTrack</strong>, vi gir deg et heatmap av
                                    din {" "}
                                    <span className="typewrite d-inline text-brand">
                                        <TextEffect text1="nettside" text2="app" text3='annonse'/>
                                    </span>
                                </p>
                            </div>
                            <div>
                                <a className="btn-primary py-4 px-8 mr-2 wow animate__animated animate__fadeIn hover-up-2"
                                   href="#plan2">
                                    Bestill
                                </a>

                                <a className="btn-white wow animate__animated animate__fadeIn hover-up-2"
                                   data-wow-delay=".3s" href="#how-we-work">
                                    Lær mer
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="relative max-w-6xl mt-0 md:mt-0 mb-8 mx-auto">
                        <img src="/assets/imgs/elements/pattern.png" alt="Monst"/>
                        <div className="absolute overflow-hidden"
                             style={{top: "9%", left: "14%", width: "72%", height: "150%"}}>

                            {/*  <video loop

                                   id="selection-vid" width="100%" className="inline-video" autoPlay muted
                                   playsInline
                                   src=""> </video>*/}

                            <video autoPlay playsInline muted loop className='px-12 py-12'>
                                <source src='https://augtrack.s3.eu-north-1.amazonaws.com/222-AUGTRACK-web.webm?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiRjBEAiBho5mrJE44OsNGTnbe%2BeJlOmNwHpoM8bImt3KccHtfYgIgGLPgNdWPITFPv9%2BlhnnvWAK%2Fyy%2F6klDZDPWuXVJvT0Aq5AIIYBAAGgw4NTE0MTQ0MTIwMTciDPrcIxVayWwUWuPWCCrBAlW%2B2JjP13js%2BgTDDobZPySoXZE0aV5n%2F1GcWj5r47cmRkJHJaBojtJhjb4HIyQESs4p%2FmXPxSIbYTEa3suZ41UGY%2BBgfCuJSAlEqXbsC3tpwP1X%2B1OwXCtfes6voBybK4wjIYN%2Bgtu%2BV5OIpvfhc6S%2FXeKpWDpWrO3cYhR3tPAXTBbBWn7LxrCERdfXk1uVmJFQJh0hR32XYkBrXg2yYQOESvb%2Fj4Hdo4ls2G42bSix6DFL%2BmDEEQl86TqP9yUxnr%2F%2FJs4WVb%2F%2FZ3ZIyBX9K42uPRVcz%2F3KAtdYldpbdII5Y%2BLit3Ww%2F4jRIgHvnVwCdAgpV6nfMf6dx1Vk1g5RCmBL0rjANSVr%2FHQzoImvQYEjvnBAtOQHFudGKZyoUl%2FI41aSQVK%2BGB%2BXMpjaPJq%2BfNAduKaBWprtrpwrq3oLN3o0PTC0sZCTBjq0AtsIU7WN1cfMGYqJtwHdUWQjjH%2BbCbwVQqtc%2BcLr5Yh8A3WPQyKaxgYKuvMs1OV3dtobkMA7op9VtPEE4igREQ3GvYqIqozfo5CKATutL2vf3ZfVYarsUi%2FuujVNiUc78z7Yv7xiSdLqFTSwwv7qOnnYCQ8qlLDr2HtBGeo4FIMnIv10uYRc%2FfGWd31AFUqnyP0Y%2FtGSOfcf4SDr2h8f8%2FgQ6sDoUmShalX%2Fvx5whd4lRCYTM3re4PgUyrCnjhJEsYTBmh64co0Wbg4vSbRi4zeKP6AOpP4jU8BEkxEB0r7R7FGOEQwsmB8KOg2Ykh1g0KUWTIPLkjCtvm8u9AASPrUCG7l%2BWfX%2FYUAI5qyscfF5ygA7RicN%2BO%2Ff0wV7zQyO8Rie%2BHIJ5iwYDcrATaxZhDqjfTDJ&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220423T152414Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA4MPCA5LYQDXJ4OFT%2F20220423%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Signature=e9a9077728e27a6c964df1ddfaae40bdb05a36feac039c47b7bc1fe7df1ba774'/>
                            </video>


                        </div>
                    </div>

                    <div className="container pt-40 px-4 mx-auto mt-32 ">
                        <div className="flex flex-wrap justify-between pt-8 pb-16 ">
                            <div className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn"
                                 data-wow-delay=".2s">
                                <div
                                    className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                    </svg>
                                </div>
                                <div className="sm:py-2 ml-2 sm:ml-6">
                                    <span className="sm:text-2xl font-bold font-heading">+ </span>
                                    <span className="sm:text-2xl font-bold font-heading count">
                                        <CounterUp count={950} time={3}/>
                                    </span>
                                    <p className="text-xs sm:text-base text-blueGray-400">Annual Partner</p>
                                </div>
                            </div>
                            <div className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn"
                                 data-wow-delay=".4s">
                                <div
                                    className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                                    </svg>

                                </div>
                                <div className="sm:py-2 ml-2 sm:ml-6">
                                    <span className="sm:text-2xl font-bold font-heading">+ </span>
                                    <span className="sm:text-2xl font-bold font-heading count">
                                        <CounterUp count={58} time={3}/>
                                    </span>
                                    <span className="sm:text-2xl font-bold font-heading"> k </span>
                                    <p className="text-xs sm:text-base text-blueGray-400">Completed Projects</p>
                                </div>
                            </div>
                            <div className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn"
                                 data-wow-delay=".6s">
                                <div
                                    className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                    </svg>
                                </div>
                                <div className="sm:py-2 ml-2 sm:ml-6">
                                    <span className="sm:text-2xl font-bold font-heading">+ </span>
                                    <span className="sm:text-2xl font-bold font-heading count">
                                        <CounterUp count={500} time={3}/>
                                    </span>
                                    <p className="text-xs sm:text-base text-blueGray-400">Happy Customers</p>
                                </div>
                            </div>
                            <div className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn"
                                 data-wow-delay=".8s">
                                <div
                                    className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                                    </svg>
                                </div>
                                <div className="sm:py-2 ml-2 sm:ml-6">
                                    <span className="sm:text-2xl font-bold font-heading">+ </span>
                                    <span className="sm:text-2xl font-bold font-heading count">
                                        <CounterUp count={300} time={3}/>
                                    </span>
                                    <p className="text-xs sm:text-base text-blueGray-400">Research Work</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-8 pb-12 md:py-16 lg:py-16 overflow-x-hidden" id="key-features">
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap lg:flex-nowrap">
                            <div className="w-full lg:w-1/2">
                                <div className="lg:py-6 lg:pr-77 wow animate__animated animate__fadeIn"
                                     data-wow-delay=".3s">
                                    <div className="mb-4">
                                        <span
                                            className="text-xs py-1 px-3 text-blue-500 font-semibold bg-blue-50 rounded-xl wow animate__animated animate__fadeInDown"
                                            data-wow-delay=".9s">
                                           Heatmap
                                        </span>
                                        <h2 className="text-4xl mt-5 font-bold font-heading wow animate__animated animate__fadeIn"
                                            data-wow-delay=".3s">
                                            Slik fungerer det:
                                        </h2>
                                    </div>
                                    <div className="flex items-start py-4 wow animate__animated animate__fadeIn"
                                         data-wow-delay=".5s">
                                        <div id="key" className="w-8 mr-5 text-blue-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                                 viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="mb-2 text-xl font-semibold font-heading">Velg en pakke</h3>
                                            <p className="text-blueGray-400 leading-loose">Velg den pakken som passer
                                                deg best, enten du skal ha heatmap av en enkel annonse eller et helt
                                                nettsted.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start py-4 wow animate__animated animate__fadeIn"
                                         data-wow-delay=".7s">
                                        <div className="w-8 mr-5 text-blue-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                                 viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="mb-2 text-xl font-semibold font-heading">Last opp</h3>
                                            <p className="text-blueGray-400 leading-loose">Last opp link til ditt
                                                nettsted eller annonse</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start py-4 wow animate__animated animate__fadeIn"
                                         data-wow-delay=".9s">
                                        <div className="w-8 mr-5 text-blue-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                                 viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"/>
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"/>
                                            </svg>


                                        </div>
                                        <div>
                                            <h3 className="mb-2 text-xl font-semibold font-heading">Motta Heatmap</h3>
                                            <p className="text-blueGray-400 leading-loose">Motta ditt Heatmap på e-post
                                                etter 1-2 dager</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative w-full lg:w-1/2 my-12 lg:my-0">
                                <div className="wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                    {/* <img className="jump relative mx-auto rounded-xl w-full z-10"
                                         src="/assets/imgs/placeholders/img-1.png" alt="Monst"/>*/}


                                    <div className=' relative z-10'><img alt='heatmap'
                                              src='/png-heat-v2.png' className='relative z-0 '/></div>

                                    <div className='z-0'><img className="  absolute top-0 left-0 w-40 -ml-12 -mt-12"
                                              src="/assets/imgs/elements/blob-tear.svg" alt="Monst"/></div>
                                    <div className='z-0'><img className=" -z-10 absolute bottom-0 right-0 w-40 -mr-12 -mb-12"
                                              src="/assets/imgs/elements/blob-tear.svg" alt="Monst"/></div>


                                    {/*
                                    <video loop=""
                                           poster="https://s3-us-west-1.amazonaws.com/hawkeye-access-web-videos/urban_thumb.png"
                                           id="selection-vid" width="100%" className="inline-video" autoPlay="" muted=""
                                           playsInline=""
                                           src="https://s3-us-west-1.amazonaws.com/hawkeye-access-web-videos/urban_recording.m4v"></video>
                                 */}


                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id='plan2' className="py-20 xl:bg-contain bg-top bg-no-repeat"
                         style={{backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')"}}>
                    <div className="container px-4 mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="max-w-lg mx-auto mb-4 text-4xl font-bold font-heading wow animate__animated animate__fadeIn"
                                data-wow-delay=".2s">
                                <span>Velg den   <span className="text-blue-500"> heatmap </span>-pakken som passer best for deg</span>


                            </h2>
                            <p className="max-w-sm mx-auto text-lg text-blueGray-400 wow animate__animated animate__fadeInDown"
                               data-wow-delay=".5s">
                                Ingen abonnement eller binding. Du blir ikke trukket før du mottar ditt heatmap.
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
                                    <span className="text-4xl text-blue-500 font-bold font-heading">439 NOK</span>
                                    <p className="mt-2 mb-8 text-blueGray-400">inkl mva</p>
                                    <div className="flex flex-col items-center mb-8">
                                        <ul className="text-blueGray-400">
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500"
                                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                          stroke-width="2"
                                                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>Heatmap</span>
                                            </li>
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500"
                                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                          stroke-width="2"
                                                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>1 side</span>

                                            </li>
                                            <br/>
                                            <br/>


                                        </ul>
                                    </div>
                                    <div>
                                        <a className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded"
                                           href="#">
                                            Velg pakke
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
                                    <span className="text-4xl font-bold font-heading">999 NOK</span>
                                    <p className="mt-2 mb-8">inkl mva</p>
                                    <div className="flex flex-col items-center mb-8">
                                        <ul>
                                            <li className="flex items-center mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500"
                                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                          stroke-width="2"
                                                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>Heatmap</span>
                                            </li>
                                            <li className="flex items-center mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500"
                                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                          stroke-width="2"
                                                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>

                                                <span>Opp til 5 sider</span>
                                            </li>
                                            <li className="flex items-center mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500"
                                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                          stroke-width="2"
                                                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>

                                                <span>UX analyse</span>
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-6 h-6 mr-2 text-green-500"
                                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                          stroke-width="2"
                                                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>

                                                <span>Rådgivning basert på funn</span>

                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-blue-500 font-semibold leading-none bg-white hover:bg-blueGray-50 rounded"
                                           href="#">
                                            Velg pakke
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
                                    <p className="mt-2 mb-8 text-blueGray-400">Kontakt oss for informajson</p>
                                    <div className="flex flex-col items-center mb-8">
                                        <ul className="text-blueGray-400">
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500"
                                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                          stroke-width="2"
                                                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>Heatmap</span>
                                            </li>
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500"
                                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                          stroke-width="2"
                                                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>Hele nettsted</span>
                                            </li>
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500"
                                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                          stroke-width="2"
                                                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>UX analyse</span>
                                            </li>
                                            <li className="flex">
                                                <svg className="w-6 h-6 mr-2 text-green-500"
                                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                          stroke-width="2"
                                                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>Veiledning</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded"
                                           href="#">
                                            Velg
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*  <section className="py-12 md:py-20">
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap -mx-3">
                            <div className="relative w-full lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left">
                                <div className="max-w-md lg:max-w-xs lg:pr-16 mx-auto lg:ml-0 mb-6 lg:mb-0">
                                    <h2 className="text-3xl md:text-4xl mb-4 font-bold font-heading wow animate__animated animate__fadeIn"
                                        data-wow-delay=".3s">
                                        Simple Solution for <span className="text-blue-500">Complex</span> Connections
                                    </h2>
                                    <p className="text-xs md:text-base text-blueGray-400 leading-loose wow animate__animated animate__fadeIn"
                                       data-wow-delay=".9s">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo
                                        et iaculis.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full lg:w-2/3 flex flex-wrap">
                                <div className="relative w-full">
                                    <div className="carausel-2-columns slick-carausel" id="carausel-2-columns-1">
                                        <Slider1/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>*/}

                <section className="py-20 bg-blueGray-50" id="how-we-work">
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12">
                            <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                                <h2 className="text-3xl md:text-4xl font-bold font-heading wow animate__animated animate__fadeInDown">
                                    <span>Vi hjelper deg med</span>
                                    <br/>
                                    <span className="text-blue-500">Brukervennlighet </span>

                                </h2>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <p className="text-blueGray-400 leading-loose wow animate__animated animate__fadeIn">Vi
                                    er eksperter på brukervennlig design og kan hjelpe deg å optmailisere ditt nettsted,
                                    annonse eller nettbutikk for å maksimere koverteringer slik at du når dine mål </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 -mb-6 text-center">
                            <div
                                className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn"
                                data-wow-delay=".3s">
                                <div className="p-12 bg-white shadow rounded">
                                    <div
                                        className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">1
                                    </div>
                                    <img className="h-36 mx-auto my-4" src="/assets/imgs/illustrations/eating.svg"
                                         alt="Monst"/>
                                    <h3 className="mb-2 font-bold font-heading text-xl">Utvikle ideer</h3>
                                    <p className="text-sm text-blueGray-400 leading-relaxed">Vi har mange kreative hoder
                                        som gjerne hjelper deg med innovative ideer til markedsføring eller design. </p>
                                </div>
                            </div>
                            <div
                                className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn"
                                data-wow-delay=".5s">
                                <div className="p-12 bg-white shadow rounded">
                                    <div
                                        className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">2
                                    </div>
                                    <img className="h-36 mx-auto my-4" src="/assets/imgs/illustrations/space.svg"
                                         alt="Monst"/>
                                    <h3 className="mb-2 font-bold font-heading text-xl">Planlegging</h3>
                                    <p className="text-sm text-blueGray-400 leading-relaxed">Vi hjelper deg å planlegge
                                        og implemetere de beste løsningene for din tjeneste eller nettside</p>
                                </div>
                            </div>
                            <div className="hover-up-5 w-full lg:w-1/3 px-3 mb-6">
                                <div className="p-12 bg-white shadow rounded wow animate__animated animate__fadeIn"
                                     data-wow-delay=".7s">
                                    <div
                                        className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">3
                                    </div>
                                    <img className="h-36 mx-auto my-4" src="/assets/imgs/illustrations/tasks.svg"
                                         alt="Monst"/>
                                    <h3 className="mb-2 font-bold font-heading text-xl">Gjennomføring</h3>
                                    <p className="text-sm text-blueGray-400 leading-relaxed">Vi driver med Heatmaps så
                                        vi vet at du at du sannsynligvis ikke leser dette - så kredz til deg!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section id="plans" className="py-20 bg-top bg-no-repeat"
                         style={{backgroundImage: "url('assets/imgs/elements/blob.svg')"}}>
                    <div className="container px-4 mx-auto">
                        <div className="relative py-20 px-4 lg:p-20">
                            <div className="max-w-lg mx-auto text-center">
                                <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading wow animate__animated animate__fadeIn">
                                    <span>Jobbe som  </span>
                                    <span className="text-blue-500">tester </span>
                                    <span>hos oss?</span>
                                </h2>
                                <p className="mb-8 text-blueGray-400 wow animate__animated animate__fadeIn"
                                   data-wow-delay=".3s">
                                    Legg ved din E-post, så tar vi kontakt med deg.
                                </p>
                                <div
                                    className="p-4 bg-white rounded-lg flex flex-wrap max-w-md mx-auto wow animate__animated animate__fadeIn"
                                    data-wow-delay=".5s">
                                    <div
                                        className="flex w-full md:w-2/3 px-3 mb-3 md:mb-0 md:mr-6 bg-blueGray-100 rounded">
                                        <svg className="h-6 w-6 my-auto text-blueGray-500"
                                             xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" fill="currentColor">
                                            <path
                                                d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                        </svg>
                                        <input
                                            className="w-full pl-3 py-4 text-xs text-blueGray-400 font-semibold leading-none bg-blueGray-100 outline-none"
                                            type="text" placeholder="Din epost"/>
                                    </div>
                                    <button
                                        className="w-full md:w-auto py-4 px-8 text-xs text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded"
                                        type="submit">
                                        Send
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}

export default Home

