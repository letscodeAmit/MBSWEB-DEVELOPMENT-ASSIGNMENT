import React from "react";

const About = () => {
  return (
    <div className="about relative text-white text-center">
      <img
        src="https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg"
        alt="logo"
        className="w-screen h-screen object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-8">
        <div>
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 font-serif">
            about skate.
          </h1>
        </div>
        <div>
          <h1 className="text-base sm:text-lg px-4">
            This is not a sequel. This is skate. refreshed with a forever vision
            in mind. Reimagined with the skate. community - you - guiding us
            through development. We’re listening to you. Join us on this journey
            and help shape the future of skate. For more on the studio team
            behind skate. check out&nbsp;
            <a
              href="https://www.ea.com/ea-studios/full-circle"
              className="text-amber-300"
            >
              Full Circle&nbsp;
            </a>
            including its career page featuring recent job listings. Follow
            along on &nbsp;
            <a
              href="https://twitter.com/skate"
              target="_blank"
              className="text-amber-300"
            >
              Twitter
            </a>
            ,
            <a
              href="https://www.instagram.com/skateea"
              target="_blank"
              className="text-amber-300"
            >
              Instagram&nbsp;
            </a>
            and&nbsp;
            <a
              href="https://discord.com/invite/skateea"
              target="_blank"
              className="text-amber-300"
            >
              Discord
            </a>{" "}
            for the latest news.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
