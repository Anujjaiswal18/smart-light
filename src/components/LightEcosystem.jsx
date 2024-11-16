import React from "react";

const LightEcosystem = () => {
  return (
    <div className="w-full h-auto pb-10 ps-10 pt-5 md:ps-5  lg:ps-32 pt-20   bg-gradient-to-r from-slate-300 to-slate-200">
      <span className="px-2 lg: mt-96 text-blue-800 w-16 px-4 py-2 bg-gradient-to-r from-violet-300 to-slate-200 to-slate-200">
        Ecosystem
      </span>
      <p className="text-sm md:text-lg lg:text-xl text-black  font-sans mt-4">
        How does a smart street <br /> light ecosystem works?
      </p>
      {/* this is for street light */}
      <div className="block md:flex lg:flex">
        <div className="mb: ms-0 lg:ms-3">
          <div className="flex lg: mt-5 ms-5">
            <div className="border border-dashed p-2 rounded-xl border-violet-700">
              <div className="p-4 rounded-xl border  border-violet-700">
                <img
                  className="w-10 h-10"
                  src="public\images\street_light_controler.png"
                  alt="streatlight"
                />
              </div>
            </div>
            <div className=" lg:ms-5 border border-dashed p-2 rounded-xl border-violet-700">
              <div className="p-4 rounded-xl border  border-violet-700">
                <img
                  className="w-10 h-10"
                  src="public\images\street_light_controler.png"
                  alt="streatlight"
                />
              </div>
            </div>
          </div>
          <span className="block lg: ps-12 pt-4 text-sm font-bold">
            Street Light Controller
          </span>
          <p className="lg:text-sm w-56 text-center">
            Activates/deactivates in response to motion/light sensing and
            controls the brightness of the street lamp
          </p>
        </div>
        {/* ================================================ */}
        <div className="hidden md: w-44 md:block md:mt-16 md:h-0 md:rotate-180 block border border-dashed border-slate-400 lg:rotate-180 lg:block lg:w-44 lg:mt-16 h-0 "></div>
        {/* ================================================================ */}
        <div>
          <div className="border mt-5 ms-16 h-24 w-28 border-dashed p-2 rounded-xl border-violet-700">
            <div className="p-4 rounded-xl border  border-violet-700">
              <img
                className="w-12 h-12"
                src="public\images\gateway_png.png"
                alt="streatlight"
              />
            </div>
          </div>
          {/* ================== */}
          <span className="block lg: ps-12 pt-4 text-sm font-bold">
            Street Light Controller
          </span>
          <p className="lg:text-sm w-56 text-center">
            Activates/deactivates in response to motion/light sensing and
            controls the brightness of the street lamp
          </p>
        </div>
        <div className="hidden md:w-44 md:mt-16 md: h-0 md:block border border-dashed border-slate-400 
        lg:w-44 lg:mt-16 lg:h-0 lg:block lg:border lg:border-dashed lg:border-slate-400 
        "></div>
        {/* =============================================================================== */}
        <div>
          <div className="border mt-5 ms-16 h-24 w-28 border-dashed p-2 rounded-xl border-violet-700">
            <div className="p-4 rounded-xl border  border-violet-700">
              <img
                className="w-12 h-12 ms-1"
                src="public\images\cloud_based management.png"
                alt="streatlight"
              />
            </div>
          </div>
          {/* ================== */}
          <span className="block lg: ps-12 pt-4 text-sm font-bold">
            Management System
          </span>
          <p className="lg:text-sm w-56 text-center">
            Collects information from multiple gateways.
          </p>
        </div>
        {/* =================================================== */}
      </div>
      {/* second part of street lights */}
      <div className="w-full">
        <div className="hidden md:block mb: ms-[45vw] lg:ms-[40vw] lg:block w-20 mt-20  h-0 block border border-dashed border-slate-400 rotate-90"></div>
        <div className="hidden md:block ms-[32vw]  w-64 mt-10  h-0  border border-dashed border-slate-400 lg:ms-[32vw] lg:block  w-64 mt-10  h-0 block"></div>

        <div className="block md:flex justify-evenly gap-60 lg:flex justify-evenly gap-60">
          {/*  */}
          <div>
            <div className="border mt-5 ms-16 h-24 w-28 border-dashed p-2 rounded-xl border-violet-700">
              <div className="p-4 rounded-xl border  border-violet-700">
                <img
                  className="w-12 h-12 ms-1"
                  src="public\images\evaluation_png.png"
                  alt="streatlight"
                />
              </div>
            </div>
            {/* ================== */}
            <span className="block lg: ps-24 pt-4 text-sm font-bold">
             Evaluation
            </span>
            <p className="lg:text-sm w-56 text-center">
              Data from the cloud is used to monitor and control street lights
              by the system Managers.
            </p>
          </div>
          <div>
            <div className="border mt-5 ms-16 h-24 w-28 border-dashed p-2 rounded-xl border-violet-700">
              <div className="p-4 rounded-xl border  border-violet-700">
                <img
                  className="w-12 h-12 ms-1"
                  src="public\images\users_png.png"
                  alt="streatlight"
                />
              </div>
            </div>
            {/* ================== */}
            <span className="block lg: ps-24 pt-4 text-sm font-bold">
              Users
            </span>
            <p className="lg:text-sm w-56 text-center">
              Data from the cloud is used to monitor and control street lights
              by the system Managers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightEcosystem;
