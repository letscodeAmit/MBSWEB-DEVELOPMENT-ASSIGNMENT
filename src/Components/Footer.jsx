import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="upper-part flex flex-col sm:flex-row items-center justify-between px-4 sm:px-10">
        <div className="upper-content flex flex-col items-center sm:items-start justify-center h-full pl-4 sm:pl-0 sm:pr-40">
          <h1 className="text-2xl sm:text-4xl font-semibold text-center sm:text-left">
            Join The Community
          </h1>
          <h2 className="text-lg font-normal text-center sm:text-left mt-2">
            The official skate. Discord server
          </h2>
          <button className="py-1 px-6 bg-black text-white mt-4 w-28 sm:w-auto h-10 rounded-md">
            <h1 className="text-xl font-bold">JOIN</h1>
          </button>
        </div>

        <div className="pr-4 sm:pr-20 rounded-md">
          <img
            src="https://images.pexels.com/photos/5029053/pexels-photo-5029053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="logo"
            className="h-24 sm:h-80 w-auto"
          />
        </div>
      </div>

      <div className="lower-part">
        <div className="flex flex-col">
          <div className="flex flex-col sm:flex-row justify-around p-4 sm:p-10">
            <h1 className="text-white font-bold mb-2 sm:mb-0">skate.</h1>
            <h1 className="text-white font-bold mb-2 sm:mb-0">
              Join The Conversation
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row justify-around">
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
              <h1 className="text-white font-extralight">Home</h1>
              <h1 className="text-white font-extralight">Insider</h1>
              <h1 className="text-white font-extralight">FAQ</h1>
              <h1 className="text-white font-extralight">Reel</h1>
            </div>
            <div className="flex space-x-3">
              <a href="#" className="fa fa-facebook"></a>
              <a href="#" className="fa fa-twitter"></a>
              <a href="#" className="fa fa-youtube"></a>
              <a href="#" className="fa fa-instagram"></a>
              <a href="#" className="fa fa-reddit"></a>
            </div>
          </div>
          <hr
            className="solid mt-4 sm:mt-6 "
            style={{ height: "0.3px", width: "90%", margin: "0 auto" }}
          ></hr>

          <div className="flex justify-around p-4 sm:p-10">
            <div className="flex space-x-3">
              <img
                src="https://media.contentapi.ea.com/content/dam/eacom/skate/common/ea-medallion-white.png"
                alt="logo"
                style={{ width: "50px", height: "50px" }}
              />
              <img
                src="https://media.contentapi.ea.com/content/dam/eacom/studios/full-circle/common/fullcircle-placeholder-tile-ea-studios-page.png"
                alt="logo"
                style={{ width: "100px", height: "60px" }}
              />
              <img
                src="https://media.contentapi.ea.com/content/dam/eacom/skate/common/skate-nav-logo-white.svg"
                alt="logo"
                style={{ width: "100px", height: "60px" }}
              />
            </div>

            <div>
              <img
                src="https://media.contentapi.ea.com/content/dam/gin/images/2016/11/esrb/esrb-rating-pending.svg"
                alt="logo"
                className="w-36 sm:w-48"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
