import { Spotlight } from "../components/ui/Spotlight";
import { FloatingDockDemo } from "../components/MenuBarHome";

export function SpotlightPreview() {
  return (
    <div className="h-[46.4rem] w-full flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden flex-col">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="flex flex-col justify-between items-center mt-32">
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0 mb-32">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            TTC <br /> Tomorrow Tech Code.
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Spotlight effect is a great way to draw attention to a specific part
            of the page. Here, we are drawing the attention towards the text
            section of the page. I don&apos;t know why but I&apos;m running out
            of copy.
          </p>
        </div>
        <div className="mt-5">
          <FloatingDockDemo />
        </div>
      </div>
    </div>
  );
}
