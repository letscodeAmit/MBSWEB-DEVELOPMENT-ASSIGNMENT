import React, { useEffect, useRef } from "react";

const MainPage = () => {
  const videoRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const parallax = document.getElementById("parallax");
      const videoContainer = parallax.querySelector(".video-container");

      videoContainer.style.height = `${100 - scrollPosition * 0.1}vh`;
      videoContainer.style.width = `${100 - scrollPosition * 0.1}vw`;

      videoContainer.style.left = `${scrollPosition * 0.8}px`;
      videoContainer.style.top = `${scrollPosition * 0.5}px`;

      if (scrollPosition > window.innerHeight) {
        const parallaxSecond = document.getElementById("parallax-second");
        const secondVideoContainer = parallaxSecond.querySelector(
          ".second-video-container"
        );

        secondVideoContainer.style.height = `${scrollPosition * 0.1}vh`;
        secondVideoContainer.style.width = `${scrollPosition * 0.1}vw`;

        secondVideoContainer.style.left = `${scrollPosition * 0.3}px`;
        secondVideoContainer.style.top = `${scrollPosition * 0.3}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video) => {
      video.addEventListener("ended", () => {
        video.play();
      });
    });

    return () => {
      videoRefs.current.forEach((video) => {
        video.removeEventListener("ended", () => {
          video.play();
        });
      });
    };
  }, []);

  return (
    <>
      <div
        className="parallax"
        id="parallax"
        style={{
          backgroundColor: "black",
          position: "relative",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <div
          className="video-container"
          style={{
            backgroundColor: "black",

            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <iframe
            ref={(video) => videoRefs.current.push(video)}
            title="video"
            src="https://www.youtube.com/embed/B1TRRiLOw0Q?autoplay=1&mute=1&controls=0&loop=1&playlist=B1TRRiLOw0Q"
            frameBorder="none"
            allow="autoplay; fullscreen"
            style={{
              width: "140%",
              height: "140%",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            loop
          ></iframe>
        </div>
      </div>

      <div
        className="parallax second"
        id="parallax-second"
        style={{
          backgroundColor: "black",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <div
          className="second-video-container"
          style={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <iframe
            ref={(video) => videoRefs.current.push(video)}
            title="second-video"
            src="https://www.youtube.com/embed/fbxqpvU554Q?autoplay=1&mute=1&controls=0&loop=1&playlist=fbxqpvU554Q"
            frameBorder="0"
            allow="autoplay; fullscreen"
            style={{
              width: "100%",
              height: "100%",
            }}
            loop
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default MainPage;
