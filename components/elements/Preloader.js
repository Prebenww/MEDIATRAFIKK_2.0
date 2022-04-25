import React from 'react';

const Preloader = () => {
    return (
        <>
            <div id="preloader-active  ">
            <div className="preloader flex-1 content-center">
                <div className="logo absolute inset-y-2/4 jump flex justify-center items-center flex-col ">
                    <img src="/favicon.ico" className='flex items-center' alt="Aug" />
                    <h1 className="text-lg font-semibold">AUGTRACK</h1>
                </div>
            </div>
        </div>
        </>
    );
};

export default Preloader;