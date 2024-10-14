"use client";

export function BackgroundGradientDemo(props: {
  source: string | undefined;
  title: string;
  content: string;
  Author: string;
}) {
  return (
    <div>
      <div className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900 border border-white h-[30rem] flex justify-between flex-col items-center">
        <div className="">
          <img
            src={props.source}
            alt="jordans"
            height={400}
            width={400}
            className="object-contain"
          />
        </div>
        <div className="">
          <p className="text-base sm:text-xl text-neutral-200">
            {props.title}
          </p>

          <p className="text-sm text-neutral-400">
            {props.content.length > 200
              ? props.content.substring(0, 200) + "..."
              : props.content}
          </p>
        </div>
        <div className="">
          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>Author </span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
              {props.Author}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
