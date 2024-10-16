import { BackgroundBeamsWithCollisionDemo } from "../components/Connectbg";
import { AnimatedPinDemo } from "../components/Featuresec";
import coder from "../assets/chris-ried-ieic5Tq8YMk-unsplash.jpg";
import ig1 from "../assets/hackernoon-SWDxRmJ5wvA-unsplash.jpg";
import ig2 from "../assets/miguel-angel-hernandez-cObuSxlcUac-unsplash.jpg";
import { ThreeDCardDemo } from "../components/Jobcard";
import { FloatingDockDemo } from "../components/MenuBarHome";

const Connect = () => {
  return (
    <>
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
          <AnimatedPinDemo
            title="Tanmay Kumar Chaurasia"
            source="/path-to-image-tanmay.jpg"
            cardtitle="@tanmay kumar"
            cardcontent="I'm Tanmay, a passionate tech blogger and the founder of TTC. I love writing about modern web development and freelancing."
            imgurl={coder}
          />

          <AnimatedPinDemo
            title="Naman Gupta"
            source="/path-to-image-naman.jpg"
            cardtitle="@naman gupta"
            cardcontent="I'm Naman, a developer and blogger with expertise in JavaScript and web technologies. I enjoy sharing coding tutorials and tech tips."
            imgurl={ig1}
          />

          <AnimatedPinDemo
            title="Priya Sharma"
            source="/path-to-image-priya.jpg"
            cardtitle="@priya sharma"
            cardcontent="I'm Priya, a content creator and freelance writer specializing in tech and digital marketing. I help businesses build their online presence."
            imgurl={ig2}
          />
        </div>
      </div>
      <div className="bg-neutral-900 max-h-fit p-6 relative">
        <div className="text-neutral-200 text-center font-extrabold text-6xl">
          Latest Opportunities
        </div>
        <div className="grid grid-cols-3 gap-8 justify-items-center">
          <ThreeDCardDemo
            post="Travel blogger"
            company="wanderlust magzine"
            type="freelance"
            stipend="$100/hr"
            location="india"
          />
          <ThreeDCardDemo
            post="food blogger"
            company="mithas"
            type="contract based"
            stipend="$140/day"
            location="india"
          />
          <ThreeDCardDemo
            post="fashion blogger"
            company="t-fashionHub"
            type="fulltime"
            stipend="$146k/year"
            location="india"
          />
        </div>
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50">
      <FloatingDockDemo/>
        </div>
      </div>
      
    </>
  );
};

export default Connect;