"use client";

export function BackgroundGradientDemo() {
  return (
    <div>
      <div className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900 border border-white">
        <img
          src={`/jordans.webp`}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
          Truth of Air Jordan 4 Retro Reimagined
        </p>

        <p className="text-sm text-neutral-400">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Author </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            Tanmay Kumar Chaurasia
          </span>
        </button>
      </div>
    </div>
  );
}