import React from 'react';

const Preloader = () => {
    return (
        <>
            <div id="preloader-active  ">
            <div className="flex-1 justify-center items-center content-center pt-40  ">
                <div className=" inset-y-2/4 jump flex justify-center items-center flex-col ">
                    <img src="/favicon.ico" className='flex items-center' alt="Aug" />
                    <h1 className="text-lg font-semibold">MEDIATRAFIKK</h1>
                </div>
            </div>
        </div>
        </>
    );
};

export default Preloader;