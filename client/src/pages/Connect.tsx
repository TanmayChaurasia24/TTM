import React from "react";
import { BackgroundBeamsWithCollisionDemo } from "../components/Connectbg";
import { AnimatedPinDemo } from "../components/Featuresec";
import coder from "../assets/chris-ried-ieic5Tq8YMk-unsplash.jpg";
import ig1 from "../assets/hackernoon-SWDxRmJ5wvA-unsplash.jpg";
import ig2 from "../assets/miguel-angel-hernandez-cObuSxlcUac-unsplash.jpg";

const Connect = () => {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="h-[10vh] bg-neutral-950 text-neutral-200 flex items-center justify-center">
        <div className="flex justify-between items-center w-[95%] h-[90%] p-8">
          <div className="font-bold text-2xl">TTC (Tomorrow Tech Code)</div>
          <div>
            <ul className="flex items-center gap-6">
              <a href="/jobs">Find Jobs</a>
              <a href="/bloggers">Find Bloggers</a>
            </ul>
          </div>
        </div>
      </nav>

      {/* Background Beams Section */}
      <div className="h-[70vh] mb-28">
        <BackgroundBeamsWithCollisionDemo />
      </div>

      <div className="bg-neutral-900 max-h-fit p-6">
        <div className="text-neutral-200 text-center font-extrabold text-6xl">
          Featured Bloggers
        </div>
        <div className="grid grid-cols-3 gap-8 justify-items-center">
          {/* First Blogger Card */}
          <AnimatedPinDemo
            title="Tanmay Kumar Chaurasia"
            source="/path-to-image-tanmay.jpg"
            cardtitle="@tanmay kumar"
            cardcontent="I'm Tanmay, a passionate tech blogger and the founder of TTC. I love writing about modern web development and freelancing."
            imgurl={coder}
          />

          {/* Second Blogger Card */}
          <AnimatedPinDemo
            title="Naman Gupta"
            source="/path-to-image-naman.jpg"
            cardtitle="@naman gupta"
            cardcontent="I'm Naman, a developer and blogger with expertise in JavaScript and web technologies. I enjoy sharing coding tutorials and tech tips."
            imgurl={ig1}
          />

          {/* Third Blogger Card */}
          <AnimatedPinDemo
            title="Priya Sharma"
            source="/path-to-image-priya.jpg"
            cardtitle="@priya sharma"
            cardcontent="I'm Priya, a content creator and freelance writer specializing in tech and digital marketing. I help businesses build their online presence."
            imgurl={ig2}
          />
        </div>
      </div>
    </>
  );
};

export default Connect;
